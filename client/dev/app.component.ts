import {Component} from '@angular/core';
@Component({
  selector: 'app',
  template: `
    <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ["styles/app.component.css"]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
