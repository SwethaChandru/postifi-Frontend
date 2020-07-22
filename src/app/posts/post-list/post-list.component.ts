import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers:[PostsService]
})
export class PostListComponent implements OnInit {

  posts:Post[]=[];
  constructor(public postsService:PostsService) { }


  ngOnInit(): void {
    this.postsService.getPosts()
      .subscribe((items:any)=>{
        this.posts=items;
        //window.location.reload();
        //console.log(items);
      })
  }

  // onDeletePost(id:string)
  // {
  //   let dupPost=this.posts;
  //   this.postsService.deletepost(id)
  //     .subscribe(items=>{
  //       for(let i=0;i<dupPost.length;i++)
  //       {
  //         if(dupPost[i]._id == id)
  //         {
  //           dupPost.splice(i,1);
  //         }
  //       }
  //     })
  // }
}
