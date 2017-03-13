"use strict";
var testing_1 = require("@angular/core/testing");
var heroes_component_1 = require("./heroes.component");
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * Created by yangxu on 2017/3/12.
 */
var FakeHeroService = (function () {
    function FakeHeroService() {
    }
    FakeHeroService.prototype.getHeroes = function () {
        return Promise.resolve([]);
    };
    FakeHeroService.prototype.delete = function (id) {
        return Promise.resolve();
    };
    FakeHeroService.prototype.create = function (name) {
        return Promise.resolve({
            id: 9,
            name: name
        });
    };
    return FakeHeroService;
}());
var RouterStub = (function () {
    function RouterStub() {
    }
    RouterStub.prototype.navigate = function (command) {
        this.command = command;
    };
    return RouterStub;
}());
describe("HeroesComponent", function () {
    var fixture;
    var comp;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                heroes_component_1.HeroesComponent
            ],
            providers: [
                { provide: hero_service_1.HeroService, useClass: FakeHeroService },
                { provide: router_1.Router, useClass: RouterStub }
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(heroes_component_1.HeroesComponent);
        comp = fixture.componentInstance;
    });
    it("should display 'My Heroes' as title in h2", function () {
        var debugElement = fixture.debugElement.query(platform_browser_1.By.css("h2"));
        expect(debugElement.nativeElement.textContent).toBe("My Heroes");
    });
    it("will show hero's name inside selected-hero", function () {
        comp.selectedHero = {
            id: 1,
            name: 'stone'
        };
        fixture.detectChanges();
        var debugElement = fixture.debugElement.query(platform_browser_1.By.css(".selected-hero h2"));
        expect(debugElement.nativeElement.textContent).toContain("STONE");
    });
    it("will not show selected-hero element if there is not any selectedHero", function () {
        fixture.detectChanges();
        var debugElement = fixture.debugElement.query(platform_browser_1.By.css(".selected-hero"));
        expect(debugElement).toBeNull();
    });
    it("will navigate to detail page when clicking gotoDetail button", function () {
        comp.selectedHero = {
            id: 1,
            name: "stone"
        };
        fixture.detectChanges();
        var buttonElement = fixture.debugElement.query(platform_browser_1.By.css(".selected-hero button"));
        expect(buttonElement.nativeElement.textContent).toBe("View Details");
        var router = fixture.debugElement.injector.get(router_1.Router);
        var routerSpy = spyOn(router, "navigate");
        buttonElement.triggerEventHandler("click", null);
        expect(routerSpy).toHaveBeenCalled();
        expect(routerSpy.calls.mostRecent().args[0]).toEqual(["/detail", 1]);
    });
    it("will leave an empty ul with an empty heroes list", function () {
        testing_1.inject([hero_service_1.HeroService], function (heroService) {
            var spy = spyOn(heroService, "getHeroes").and.returnValue([]);
            fixture.detectChanges();
            var heroesDebugElement = fixture.debugElement.query(platform_browser_1.By.css(".heroes"));
            expect(heroesDebugElement.children.length).toBe(0);
        });
    });
    describe("heroes list", function () {
        var heroes = [
            {
                id: 1,
                name: "Stone"
            },
            {
                id: 2,
                name: "YangXu"
            }
        ];
        var injectHeroServiceWithGettingHeroes = function () {
            console.log("return promise");
            return new Promise(function (fullfile, reject) {
                console.log("call inject");
                testing_1.inject([hero_service_1.HeroService], function (heroService) {
                    console.log("inject heroService");
                    spyOn(heroService, "getHeroes").and.returnValue(heroes);
                    console.log("spyOn");
                    fullfile(heroService);
                });
            });
        };
        it("will show heroes with li element for each one", testing_1.async(function () {
            var heroService = fixture.debugElement.injector.get(hero_service_1.HeroService);
            spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                var heroesInComp = comp.heroes;
                expect(heroesInComp.length).toBe(2);
                fixture.detectChanges();
                var debugElement = fixture.debugElement.queryAll(platform_browser_1.By.css(".heroes li"));
                expect(debugElement.length).toBe(2);
            });
        }));
        it("will be 'selected' if it is the same with the selectedHero", testing_1.async(function () {
            var heroService = fixture.debugElement.injector.get(hero_service_1.HeroService);
            spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                comp.selectedHero = heroes[0];
                fixture.detectChanges();
                var debugElement = fixture.debugElement.query(platform_browser_1.By.css(".heroes li"));
                expect(debugElement.classes["selected"]).toBeTruthy();
            });
        }));
        it("will save the selectedHero when click hero in the list", testing_1.async(function () {
            var heroService = fixture.debugElement.injector.get(hero_service_1.HeroService);
            spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                fixture.detectChanges();
                var debugElement = fixture.debugElement.query(platform_browser_1.By.css(".heroes li"));
                debugElement.triggerEventHandler("click", null);
                expect(comp.selectedHero).toEqual({
                    id: 1,
                    name: "Stone"
                });
            });
        }));
        it("will show hero's id and name", testing_1.async(function () {
            var heroService = fixture.debugElement.injector.get(hero_service_1.HeroService);
            spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                fixture.detectChanges();
                var firstDebugElement = fixture.debugElement.query(platform_browser_1.By.css(".heroes li"));
                expect(firstDebugElement.query(platform_browser_1.By.css("span.badge")).nativeElement.textContent).toBe("1");
                expect(firstDebugElement.query(platform_browser_1.By.css("span.hero-name")).nativeElement.textContent).toBe("Stone");
            });
        }));
        it("will delete the hero on clicking the button in the list", testing_1.async(function () {
            var heroService = fixture.debugElement.injector.get(hero_service_1.HeroService);
            spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve(heroes));
            var deleteSpy = spyOn(heroService, "delete").and.returnValue(Promise.resolve());
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                fixture.detectChanges();
                var deleteButton = fixture.debugElement.query(platform_browser_1.By.css(".heroes li button"));
                deleteButton.triggerEventHandler("click", new Event("click"));
                expect(deleteSpy).toHaveBeenCalled();
                console.log(deleteSpy.calls.mostRecent().args);
                expect(deleteSpy.calls.mostRecent().args[0]).toEqual(1);
            });
        }));
    });
    it("add hero with add button", testing_1.async(function () {
        var newHero = {
            id: 9,
            name: "new hero"
        };
        var heroService = fixture.debugElement.injector.get(hero_service_1.HeroService);
        spyOn(heroService, "getHeroes").and.returnValue(Promise.resolve([{
                id: 1,
                name: "Stone"
            }]));
        var createSpy = spyOn(heroService, "create").and.returnValue(Promise.resolve(newHero));
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            comp.selectedHero = comp.heroes[0];
            var newHeroNameInput = fixture.debugElement.query(platform_browser_1.By.css(".new-hero-name"));
            var addButton = fixture.debugElement.query(platform_browser_1.By.css(".add-button"));
            newHeroNameInput.nativeElement.value = newHero.name;
            fixture.detectChanges();
            addButton.triggerEventHandler("click", null);
            expect(createSpy).toHaveBeenCalled();
            expect(createSpy.calls.mostRecent().args[0]).toBe(newHero.name);
        });
    }));
    it("add hero to heroes list after calling add function", testing_1.async(function () {
        var newHero = {
            id: 9,
            name: "new hero"
        };
        comp.heroes = [{
                id: 1,
                name: "Stone"
            }];
        var heroService = fixture.debugElement.injector.get(hero_service_1.HeroService);
        spyOn(heroService, "create").and.returnValue(Promise.resolve(newHero));
        var lengthOfHeroesBeforeAdd = comp.heroes.length;
        comp.add(newHero.name);
        fixture.whenStable().then(function () {
            var lengthOfHeroesAfterAdd = comp.heroes.length;
            expect(lengthOfHeroesAfterAdd).toBe(lengthOfHeroesBeforeAdd + 1);
        });
    }));
});
//# sourceMappingURL=heroes.component.spec.js.map