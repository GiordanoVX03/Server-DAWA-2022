import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  post = '';
  parentPosts: any[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  AddPost(post: any){
    console.log(post);
    this.parentPosts.push(post);
  }
  childEvent(data: string){
    alert(data);
  }
}
