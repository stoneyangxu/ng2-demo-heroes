"use strict";
var testing_1 = require("@angular/core/testing");
var hero_detail_component_1 = require("./hero-detail.component");
var forms_1 = require("@angular/forms");
var user_service_1 = require("./model/user.service");
/**
 * Created by yangxu on 2017/3/12.
 */
describe("HeroDetailComponent", function () {
    var fixture;
    var comp;
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
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                forms_1.FormsModule
            ],
            declarations: [
                hero_detail_component_1.HeroDetailComponent
            ],
            providers: [
                { provider: user_service_1.UserService }
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hero_detail_component_1.HeroDetailComponent);
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
//# sourceMappingURL=hero-detail.component.spec.js.map