"use strict";
var testing_1 = require("@angular/core/testing");
var welcome_component_1 = require("./welcome.component");
var user_service_1 = require("./model/user.service");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * Created by yangxu on 2017/3/8.
 */
describe("WelcomeComponent", function () {
    var userServiceStub = {
        isLoggedIn: true,
        user: {
            name: "Stone"
        }
    };
    var comp;
    var fixture;
    var de;
    var el;
    var userService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                welcome_component_1.WelcomeComponent
            ],
            providers: [
                { provide: user_service_1.UserService, useValue: userServiceStub }
            ]
        });
        fixture = testing_1.TestBed.createComponent(welcome_component_1.WelcomeComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css(".welcome"));
        el = de.nativeElement;
        userService = testing_1.TestBed.get(user_service_1.UserService);
    });
    it("should welcome Stone", function () {
        fixture.detectChanges();
        expect(el.textContent).toContain("Stone");
    });
    it("should require for login with stub service", function () {
        userService.isLoggedIn = false;
        fixture.detectChanges();
        expect(el.textContent).toContain("Please log in");
    });
});
//# sourceMappingURL=welcome.component.spec.js.map