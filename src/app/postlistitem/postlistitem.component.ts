import { Component, OnInit, Input } from '@angular/core';
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
@Input() title: String;
@Input() content: String;
@Input()created_at:Date;
@Input() like : number;

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
