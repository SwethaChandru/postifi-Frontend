import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {

  posts:Post[]=[];
  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
    this.postsService.getMyPosts(JSON.parse(localStorage.getItem('id')))
      .subscribe((items:any)=>{
        this.posts=items;
        console.log("this is my posts");
        console.log(items);
      })
  }

  onDeletePost(id:string)
  {
    let dupPost=this.posts;
    this.postsService.deletepost(id)
      .subscribe(items=>{
        for(let i=0;i<dupPost.length;i++)
        {
          if(dupPost[i]._id == id)
          {
            dupPost.splice(i,1);
          }
        }
      })
  }

}
