import {BannerComponent} from "./banner.component";
import {ComponentFixture, TestBed, ComponentFixtureAutoDetect, async} from "@angular/core/testing";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
/**
 * Created by yangxu on 2017/3/7.
 */
describe("BannerComponent", () => {

  let comp: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(BannerComponent);

      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css("h1"));
      el = de.nativeElement;
    });
  }));

  it("should display original title", () => {
    fixture.detectChanges();
    expect(el.textContent).toBe(comp.title);
  });

  it("should display a different test title", () => {
    comp.title = "Test Title";
    fixture.detectChanges();
    expect(el.textContent).toBe("Test Title");
  })
});
