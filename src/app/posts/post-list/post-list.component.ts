import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers:[PostsService]
})
export class PostListComponent implements OnInit {

  /**posts=[
    //{title:'FirstPost', content:"This is the first post's content"},
    //{title:'SecondPost', content:"This is the Second post's content"},
    //{title:'ThirdPost', content:"This is the Third post's content"},
  ]**/
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
