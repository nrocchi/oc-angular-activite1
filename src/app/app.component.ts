import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    new Post('Premier post', 'Ceci est le contenu du premier post'),
    new Post('Deuxième post', 'Ceci est le contenu du deuxième post'),
    new Post('Troisième post', 'Ceci est le contenu du troisième post')
  ];

}
