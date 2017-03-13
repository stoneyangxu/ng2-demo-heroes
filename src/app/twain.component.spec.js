"use strict";
var testing_1 = require("@angular/core/testing");
var twain_component_1 = require("./twain.component");
var twain_service_1 = require("./twain.service");
var platform_browser_1 = require("@angular/platform-browser");
/**
 * Created by yangxu on 2017/3/8.
 */
describe("TwainComponent", function () {
    var comp;
    var fixture;
    var debugElement;
    var el;
    var twainService;
    var spy;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                twain_component_1.TwainComponent
            ],
            providers: [
                twain_service_1.TwainService
            ]
        });
        fixture = testing_1.TestBed.createComponent(twain_component_1.TwainComponent);
        comp = fixture.componentInstance;
        twainService = fixture.debugElement.injector.get(twain_service_1.TwainService);
        debugElement = fixture.debugElement.query(platform_browser_1.By.css(".twain"));
        el = debugElement.nativeElement;
        spy = spyOn(twainService, "getQuote").and.returnValue(Promise.resolve("stone"));
    });
    it("should not show anything before OnInit is called", function () {
        expect(el.textContent).toBe("", "nothing displayed");
        expect(spy.calls.any()).toBe(false, "not yet called");
    });
    it("should still not show stone after component initialized", function () {
        fixture.detectChanges();
        expect(el.textContent).toBe("...");
        expect(spy.calls.any()).toBe(true, "has been called");
    });
    it("should show stone after promise (async)", testing_1.async(function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            fixture.detectChanges();
            expect(el.textContent).toBe("stone");
        });
    }));
    it("should show stone after promise (fakeAsync)", testing_1.fakeAsync(function () {
        fixture.detectChanges();
        testing_1.tick();
        fixture.detectChanges();
        expect(el.textContent).toBe("stone");
    }));
});
//# sourceMappingURL=twain.component.spec.js.map