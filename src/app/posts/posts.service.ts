import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(public http:HttpClient) { }
  
  
  getPosts()
  {
    return this.http.get("http://localhost:3000/api/getpost");
  }
  getMyPosts(id:string)
  {
    return this.http.get("http://localhost:3000/api/getMyPost/"+id);
  }
  getonePost(id:string)
  {
    return this.http.get("http://localhost:3000/api/getpost/"+id)
  }
  addposts(title:string,content:string,image:File,id:string)
  {
    console.log("entered post service");
    const postData=new FormData();
    postData.append("title",title);
    postData.append("content",content);
    postData.append("image",image);
    postData.append("userId",id)
    //const headers = new Headers();
    // headers.append('Content-Type', 'application/json'//);
  
    return this.http.post("http://localhost:3000/api/newpost", postData);
      //.pipe(map(res => res, { 'headers': headers}));
  }
  deletepost(id:string)
  {
    return this.http.delete("http://localhost:3000/api/deletepost/"+id);
  }
  updatepost(postData:FormData,id:string)
  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put("http://localhost:3000/api/updatepost/"+id, postData);
      //.pipe(map(res => res, { 'headers': headers }));
  }
}
