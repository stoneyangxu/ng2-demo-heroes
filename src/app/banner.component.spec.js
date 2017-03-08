"use strict";
var banner_component_1 = require("./banner.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * Created by yangxu on 2017/3/7.
 */
describe("BannerComponent", function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [banner_component_1.BannerComponent],
        }).compileComponents().then(function () {
            fixture = testing_1.TestBed.createComponent(banner_component_1.BannerComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(platform_browser_1.By.css("h1"));
            el = de.nativeElement;
        });
    }));
    it("should display original title", function () {
        fixture.detectChanges();
        expect(el.textContent).toBe(comp.title);
    });
    it("should display a different test title", function () {
        comp.title = "Test Title";
        fixture.detectChanges();
        expect(el.textContent).toBe("Test Title");
    });
});
//# sourceMappingURL=banner.component.spec.js.map