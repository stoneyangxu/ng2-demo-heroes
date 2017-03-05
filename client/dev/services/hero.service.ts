/**
 * Created by yangxu on 2017/3/5.
 */
import {Injectable} from "@angular/core";
import {Hero} from "../hero";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";


@Injectable()
export class HeroService {

  private heroesUrl: string = "api/heroes";

  constructor(private http: Http) {

  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id))
  }
}
