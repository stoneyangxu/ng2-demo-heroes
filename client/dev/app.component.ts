import {
  Component
} from "@angular/core";
import {Hero} from "./hero";

const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

@Component({
  selector: "app",
  template: `
  <h1>{{title}}</h1>
  <hero-list [heroes]="heroes" (selectHeroEmitter)="onSelect($event)"></hero-list>

  <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ["styles/app.component.css"]

})
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[] = HEROES;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
