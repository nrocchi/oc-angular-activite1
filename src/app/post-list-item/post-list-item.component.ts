import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  increaseLoveits(){
    this.post.loveIts++;
  }

  decreaseLoveits(){
    this.post.loveIts--;
  }
}
