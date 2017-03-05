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

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }
}
