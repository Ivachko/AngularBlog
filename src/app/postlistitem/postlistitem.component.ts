import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
})
export class PostlistitemComponent implements OnInit {
post = new Post(
  "Test",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed cumque facilis aliquid? Fugiat sit dicta quod quis ipsum beatae quas consequuntur, deleniti incidunt magni maxime quos eos ut! Odio.");
title: String = this.post.title;
content: String = this.post.content;
created_at: Date = this.post.created_at;
like : number= this.post.loveIts;

  constructor() { }
  getLove(){
    return this.like;
  }
  onLike(){
    
      return this.like +=  1;
  }
  onDislike(){
      
      return this.like -= 1
  }
  ngOnInit() {
  }

}
