"use strict";
var testing_1 = require("@angular/core/testing");
var banner_component_1 = require("./banner.component");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * Created by yangxu on 2017/3/12.
 */
describe("BannerComponent", function () {
    var fixture;
    var comp;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                banner_component_1.BannerComponent
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(banner_component_1.BannerComponent);
        comp = fixture.componentInstance;
    });
    it("should display title in h1 element", function () {
        comp.title = "Title that should display";
        fixture.detectChanges();
        var element = fixture.debugElement.query(platform_browser_1.By.css("h1")).nativeElement;
        expect(element.textContent).toBe("Title that should display");
    });
});
//# sourceMappingURL=banner.component.spec.js.map