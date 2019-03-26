import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrmocIMS';
  mobHeight: any;
  mobWidth: any;
  constructor(private router: Router) {
    this.mobHeight = (window.screen.height) + 'px';
    this.mobWidth = (window.screen.width) + 'px';
    console.log(this.mobHeight);
    console.log(this.mobWidth);
  }
}

