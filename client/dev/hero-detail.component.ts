/**
 * Created by yangxu on 2017/3/5.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {ActivatedRoute, Params} from "@angular/router";
import {HeroService} from "./services/hero.service";
import {Location} from "@angular/common";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: "templates/hero-detail.component.html"
})
export class HeroDetailComponent implements OnInit {

  @Input()
  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
