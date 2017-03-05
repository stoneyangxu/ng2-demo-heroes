/**
 * Created by yangxu on 2017/3/5.
 */
import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./services/hero.service";
@Component({
  selector: 'hero-list',
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
`,
  styleUrls: ['styles/hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
