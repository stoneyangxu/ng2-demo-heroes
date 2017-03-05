/**
 * Created by yangxu on 2017/3/5.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Hero} from "./hero";
@Component({
  selector: 'hero-list',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" [class.selected]="hero === hero" (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  
  `,
  styleUrls: ['styles/hero-list.component.css']
})
export class HeroListComponent {
  @Input()
  heroes: Hero[];

  @Output()
  selectHeroEmitter: EventEmitter<Hero> = new EventEmitter();

  onSelect(hero: Hero) {
    this.selectHeroEmitter.emit(hero);
  }
}
