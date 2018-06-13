import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  post1 = new Post("Test","Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus libero velit dolorum veniam obcaecati maiores officia esse. Mollitia, ratione nemo quae rerum quidem sed quia porro vitae repudiandae reiciendis.")
  post3 = new Post("Test","Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus libero velit dolorum veniam obcaecati maiores officia esse. Mollitia, ratione nemo quae rerum quidem sed quia porro vitae repudiandae reiciendis.")
  post2 = new Post("Test","Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus libero velit dolorum veniam obcaecati maiores officia esse. Mollitia, ratione nemo quae rerum quidem sed quia porro vitae repudiandae reiciendis.")
  posts: Post[] = [this.post1,this.post2,this.post3]
}
