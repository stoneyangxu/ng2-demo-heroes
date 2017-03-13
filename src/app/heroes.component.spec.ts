import {TestBed, ComponentFixture, async, inject} from "@angular/core/testing";
import {HeroesComponent} from "./heroes.component";
import {Router} from "@angular/router";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
import {By} from "@angular/platform-browser";
import {create} from "domain";
/**
 * Created by yangxu on 2017/3/12.
 */

class FakeHeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve([]);
  }

  delete(id: number): Promise<void> {
    return Promise.resolve();
  }

  create(name: string): Promise<Hero> {
    return Promise.resolve({
      id: 9,
      name: name
    });
  }
}

class RouterStub {

  command: any[];

  navigate(command: any[]): void {
    this.command = command;
  }
}

describe("HeroesComponent", () => {


  let fixture: ComponentFixture<HeroesComponent>;
  let comp: HeroesComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent
      ],
      providers: [
        {provide: HeroService, useClass: FakeHeroService},
        {provide: Router, useClass: RouterStub}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    comp = fixture.componentInstance;
  });

  it("should display 'My Heroes' as title in h2", () => {
    let debugElement = fixture.debugElement.query(By.css("h2"));
    expect(debugElement.nativeElement.textContent).toBe("My Heroes");
  });

  it("will show hero's name inside selected-hero", () => {
    comp.selectedHero = {
      id: 1,
      name: 'stone'
    };
    fixture.detectChanges();

    let debugElement = fixture.debugElement.query(By.css(".selected-hero h2"));
    expect(debugElement.nativeElement.textContent).toContain("STONE");
  });

  it("will not show selected-hero element if there is not any selectedHero", () => {
    fixture.detectChanges();
    let debugElement = fixture.debugElement.query(By.css(".selected-hero"));

    expect(debugElement).toBeNull();
  });

  it("will navigate to detail page when clicking gotoDetail button", () => {
    comp.selectedHero = {
      id: 1,
      name: "stone"
    };

    fixture.detectChanges();

    let buttonElement = fixture.debugElement.query(By.css(".selected-hero button"));
    expect(buttonElement.nativeElement.textContent).toBe("View Details");

    let router = fixture.debugElement.injector.get(Router);
    let routerSpy = spyOn(router, "navigate");

    buttonElement.triggerEventHandler("click", null);
    expect(routerSpy).toHaveBeenCalled();
    expect(routerSpy.calls.mostRecent().args[0]).toEqual(["/detail", 1]);
  });

  it("will leave an empty ul with an empty heroes list", () => {
    inject([HeroService], (heroService: HeroService) => {
      let spy = spyOn(heroService, "getHeroes").and.returnValue([]);

      fixture.detectChanges();

      let heroesDebugElement = fixture.debugElement.query(By.css(".heroes"));
      expect(heroesDebugElement.children.length).toBe(0);
    });
  });

  describe("heroes list", () => {

    let heroes = [
      {
        id: 1,
        name: "Stone"
      },
      {
        id: 2,
        name: "YangXu"
      }
    ];

    let injectHeroServiceWithGettingHeroes = function (): Promise<HeroService> {

      console.log("return promise");

      return new Promise((fullfile, reject) => {
        console.log("call inject");
        inject([HeroService], (heroService: HeroService) => {
          console.log("inject heroService");
          spyOn(heroService, "getHeroes").and.returnValue(heroes);
          console.log("spyOn");
          fullfile(heroService);
        });

      });
    };

    it("will show heroes with li element for each one", async(() => {

      let heroService = fixture.debugElement.injector.get(HeroService);
      spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        let heroesInComp = comp.heroes;
        expect(heroesInComp.length).toBe(2);

        fixture.detectChanges();

        let debugElement = fixture.debugElement.queryAll(By.css(".heroes li"));
        expect(debugElement.length).toBe(2);
      });
    }));

    it("will be 'selected' if it is the same with the selectedHero", async(() => {

      let heroService = fixture.debugElement.injector.get(HeroService);
      spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));

      fixture.detectChanges();

      fixture.whenStable().then(() => {

        comp.selectedHero = heroes[0];

        fixture.detectChanges();

        let debugElement = fixture.debugElement.query(By.css(".heroes li"));
        expect(debugElement.classes["selected"]).toBeTruthy();
      });
    }));

    it("will save the selectedHero when click hero in the list", async(() => {

      let heroService = fixture.debugElement.injector.get(HeroService);
      spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));

      fixture.detectChanges();

      fixture.whenStable().then(() => {

        fixture.detectChanges();

        let debugElement = fixture.debugElement.query(By.css(".heroes li"));

        debugElement.triggerEventHandler("click", null);

        expect(comp.selectedHero).toEqual({
          id: 1,
          name: "Stone"
        });
      });
    }));

    it("will show hero's id and name", async(() => {
      let heroService = fixture.debugElement.injector.get(HeroService);
      spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));

      fixture.detectChanges();

      fixture.whenStable().then(() => {

        fixture.detectChanges();

        let firstDebugElement = fixture.debugElement.query(By.css(".heroes li"));

        expect(firstDebugElement.query(By.css("span.badge")).nativeElement.textContent).toBe("1");
        expect(firstDebugElement.query(By.css("span.hero-name")).nativeElement.textContent).toBe("Stone");

      });

    }));

    it("will delete the hero on clicking the button in the list", async(() => {
      let heroService = fixture.debugElement.injector.get(HeroService);
      spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));

      let deleteSpy = spyOn(heroService, "delete").and.returnValue(Promise.resolve());


      fixture.detectChanges();

      fixture.whenStable().then(() => {

        fixture.detectChanges();

        let deleteButton = fixture.debugElement.query(By.css(".heroes li button"));

        deleteButton.triggerEventHandler("click", new Event("click"));

        expect(deleteSpy).toHaveBeenCalled();

        console.log(deleteSpy.calls.mostRecent().args);

        expect(deleteSpy.calls.mostRecent().args[0]).toEqual(1);
      });

    }));

  });

  it("add hero with add button", async(() => {

    let newHero = {
      id: 9,
      name: "new hero"
    };


    let heroService = fixture.debugElement.injector.get(HeroService);
    spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve([{
      id: 1,
      name: "Stone"
    }]));

    let createSpy = spyOn(heroService, "create").and.returnValue(Promise.resolve(newHero));

    fixture.detectChanges();
    fixture.whenStable().then(() => {

      comp.selectedHero = comp.heroes[0];

      let newHeroNameInput = fixture.debugElement.query(By.css(".new-hero-name"));
      let addButton = fixture.debugElement.query(By.css(".add-button"));

      newHeroNameInput.nativeElement.value = newHero.name;

      fixture.detectChanges();

      addButton.triggerEventHandler("click", null);

      expect(createSpy).toHaveBeenCalled();
      expect(createSpy.calls.mostRecent().args[0]).toBe(newHero.name);
    });

  }));

  it("add hero to heroes list after calling add function", async(() => {
    let newHero = {
      id: 9,
      name: "new hero"
    };

    comp.heroes = [{
      id: 1,
      name: "Stone"
    }];


    let heroService = fixture.debugElement.injector.get(HeroService);

    spyOn(heroService, "create").and.returnValue(Promise.resolve(newHero));

    let lengthOfHeroesBeforeAdd = comp.heroes.length;

    comp.add(newHero.name);

    fixture.whenStable().then(() => {
      let lengthOfHeroesAfterAdd = comp.heroes.length;

      expect(lengthOfHeroesAfterAdd).toBe(lengthOfHeroesBeforeAdd + 1);
    });

  }));
});


