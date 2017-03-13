import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import {HeroDetailComponent} from "./hero-detail.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {UserService} from "./model/user.service";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
/**
 * Created by yangxu on 2017/3/12.
 */
describe("HeroDetailComponent", () => {

  let fixture: ComponentFixture<HeroDetailComponent>;
  let comp: HeroDetailComponent;

  // let heroes: Hero[] = [];

  // let stubUserService: HeroService = {
  //   getHeroes(): Promise<Hero[]> {
  //     return Promise.resolve(heroes);
  //   },
  //
  //   getHero(id: number): Promise<Hero> {
  //     return Promise.resolve(new Hero());
  //   },
  //
  //   delete(id: number): Promise<void> {
  //     return Promise.resolve();
  //   },
  //
  //   create(name: string): Promise<Hero> {
  //     return Promise.resolve(new Hero());
  //   },
  //
  //   update(hero: Hero): Promise<Hero> {
  //     return Promise.resolve(new Hero());
  //   }
  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        HeroDetailComponent
      ],
      providers: [
        {provider: UserService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    comp = fixture.componentInstance;
  });

  // it("does not show anything if hero not exist", () => {
  //   fixture.detectChanges();
  //
  //   let debugElement = fixture.debugElement.query(By.css("div"));
  //
  //   console.log(debugElement);
  // });
});
