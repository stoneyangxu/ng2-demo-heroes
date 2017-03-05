/**
 * Created by yangxu on 2017/3/5.
 */
import {Component, OnInit} from '@angular/core';
import {HeroService} from "./services/hero.service";
import {Hero} from "./hero";

@Component({
  selector: 'dashboard',
  templateUrl: 'templates/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
