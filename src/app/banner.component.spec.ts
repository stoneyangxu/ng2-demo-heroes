import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {BannerComponent} from "./banner.component";
import {By} from "@angular/platform-browser";
/**
 * Created by yangxu on 2017/3/12.
 */
describe("BannerComponent", () => {

  let fixture: ComponentFixture<BannerComponent>;
  let comp: BannerComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BannerComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    comp = fixture.componentInstance;
  });

  it("should display title in h1 element", () => {
    comp.title = "Title that should display";
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css("h1")).nativeElement;
    expect(element.textContent).toBe("Title that should display");
  });
});
