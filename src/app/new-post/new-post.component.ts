import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  blogPost:BlogPost = new BlogPost();
  tags:string;
  constructor(private data:PostService,private route:Router ) { }

  ngOnInit() {
  }

  formSubmit(){
    this.blogPost.tags= this.tags.split(',').map(tag=>tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toDateString();
    this.blogPost.views=0;
    this.data.newPost(this.blogPost).subscribe((data)=>this.route.navigate(['admin']));
  }

}
