import {TestBed, ComponentFixture, async, fakeAsync, tick} from "@angular/core/testing";
import {TwainComponent} from "./twain.component";
import {TwainService} from "./twain.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import Spy = jasmine.Spy;
/**
 * Created by yangxu on 2017/3/8.
 */
describe("TwainComponent", () => {

  let comp: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;

  let twainService: TwainService;
  let spy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TwainComponent
      ],
      providers: [
        TwainService
      ]
    });

    fixture = TestBed.createComponent(TwainComponent);
    comp = fixture.componentInstance;
    twainService = fixture.debugElement.injector.get(TwainService);
    debugElement = fixture.debugElement.query(By.css(".twain"));
    el = debugElement.nativeElement;

    spy = spyOn(twainService, "getQuote").and.returnValue(Promise.resolve("stone"));
  });

  it("should not show anything before OnInit is called", () => {
    expect(el.textContent).toBe("", "nothing displayed");
    expect(spy.calls.any()).toBe(false, "not yet called");
  });

  it ("should still not show stone after component initialized", () => {
    fixture.detectChanges();
    expect(el.textContent).toBe("...");
    expect(spy.calls.any()).toBe(true, "has been called");
  });

  it("should show stone after promise (async)", async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.textContent).toBe("stone");
    });
  }));

  it ("should show stone after promise (fakeAsync)", fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(el.textContent).toBe("stone");
  }));
});
