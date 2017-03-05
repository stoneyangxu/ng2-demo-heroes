/**
 * Created by yangxu on 2017/3/5.
 */
import {Injectable} from '@angular/core';
import {HEROES} from "../mock/mock-heroes";
import {Hero} from "../hero";

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
