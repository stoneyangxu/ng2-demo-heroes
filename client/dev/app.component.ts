import {
  Component, OnInit
} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./services/hero.service";

@Component({
  selector: "app",
  template: `
  <h1>{{title}}</h1>
  <hero-list [heroes]="heroes" (selectHeroEmitter)="onSelect($event)"></hero-list>

  <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ["styles/app.component.css"],
  providers: [HeroService]

})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
