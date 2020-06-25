import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { PostsService} from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers:[PostsService]
})
export class PostCreateComponent implements OnInit {

  public mode='';
  public postId:string;
  public totalpost:Post;
  imagePreview:string;
  form:FormGroup;

  formData : FormData;
  constructor(public postsService:PostsService,public router:ActivatedRoute ,public routerfun:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'title':new FormControl(null,{validators:[Validators.required,Validators.minLength(3)]}),
      'content':new FormControl(null,{validators:[Validators.required]}),
      'image':new FormControl(null,{validators:[Validators.required]})
    });
    this.router.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('postId'))
      {
        this.mode='edit'
        this.postId=paramMap.get('postId');
        this.postsService.getonePost(this.postId)
          .subscribe((items:any)=>{
        this.totalpost=items;
        console.log(this.totalpost);
        console.log(this.totalpost.title);
        this.form.patchValue({title: this.totalpost.title });
        this.form.patchValue({ content: this.totalpost.content});
        });
        //console.log("hlo");
        //console.log(this.totalpost);
      }
      else
      {
        this.mode='create';
        this.postId=null;
        console.log(this.mode);
      }
    })

  }


  /**onImagePick(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formData.append('image', file);
    }
  } **/

  onImagePick(event:Event)
  {
    const file=(event.target as HTMLInputElement).files[0];
    this.form.patchValue({image:file});
    this.form.get('image').updateValueAndValidity();
    const reader=new FileReader();
    reader.onload=()=>{
      this.imagePreview=reader.result as string;
    }
    reader.readAsDataURL(file);
  }


  onAddPost()
  {
    //console.log(this.mode);
    if(this.form.invalid)
    {
      return;
    }
    if(this.mode==="create")
    {
      console.log("entered add post page");
      /*let newpost={
        title:this.form.value.title,
        content:this.form.value.content
      }*/
      //console.log(newpost);
      const formData=new FormData()
      formData.append('title',this.form.value.title);
      formData.append('content',this.form.value.content );
      formData.append('image', this.form.value.image);

      this.postsService.addposts(formData)
        .subscribe((items:any)=>{
          console.log("savedpost")
        })
      //form.resetForm();
      this.routerfun.navigate(['/']);
      //window.location.reload();
    }
    else
    {
      console.log("entered update post page");
      let newpost={
        title:this.form.value.title,
        content:this.form.value.content
      }
      console.log("hloo");
      console.log(this.postId);
      this.postsService.updatepost(newpost,this.postId)
        .subscribe((items:any)=>{
          console.log(items);
          console.log("updatedpost");
          this.routerfun.navigate(['/']);
        })
        //form.resetForm();
        //window.location.reload();
    }
  }

}