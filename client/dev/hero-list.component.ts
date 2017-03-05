/**
 * Created by yangxu on 2017/3/5.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./services/hero.service";
import {Router} from "@angular/router";
@Component({
  selector: 'hero-list',
  templateUrl: "templates/hero-list.component.html",
  styleUrls: ['styles/hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }


  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }
}
