import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  //public posts:Post[]=[]; 
  constructor(public http:HttpClient) { }
  
  
  getPosts()
  {
    return this.http.get("http://localhost:3000/api/getpost");
  }
  getonePost(id:string)
  {
    return this.http.get("http://localhost:3000/api/getpost/"+id)
  }
  addposts(body:FormData)
  {
    //console.log(newpost);
    //this.posts.push(newpost); //refer later
    console.log("entered post service");
    // const postData=new FormData();
    // postData.append("title",title);
    // postData.append("content",content);
    // postData.append("image",image);
    //console.log(image);
    const headers = new Headers();
    // headers.append('Content-Type', 'application/json'//);
    
    return this.http.post("http://localhost:3000/api/newpost", body);
      //.pipe(map(res => res, { 'headers': headers}));
  }
  deletepost(id:string)
  {
    return this.http.delete("http://localhost:3000/api/deletepost/"+id);
  }
  updatepost(newpost,id)
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put("http://localhost:3000/api/updatepost/"+id, newpost)
      .pipe(map(res => res, { 'headers': headers }));
  }

  /**addPosts(title:string,content:string)
  {
    const post:Post={title:title,content:content};
    this.posts.push(post);
  }**/
}
