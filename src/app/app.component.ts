import { Component } from '@angular/core';

@Component({
  //selector: 'app-root',
  selector: '[app-root]',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`

    h1{
    color:dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'my-first-app';
  name='Yubraj'
}
