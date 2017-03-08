import {TestBed, ComponentFixture} from "@angular/core/testing";
import {WelcomeComponent} from "./welcome.component";
import {UserService} from "./model/user.service";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
/**
 * Created by yangxu on 2017/3/8.
 */
describe("WelcomeComponent", () => {

  let userServiceStub = {
    isLoggedIn: true,
    user: {
      name: "Stone"
    }
  };

  let comp: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent
      ],
      providers: [
        {provide: UserService, useValue: userServiceStub}
      ]
    });

    fixture = TestBed.createComponent(WelcomeComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css(".welcome"));
    el = de.nativeElement;

    userService = TestBed.get(UserService);
  });

  it("should welcome Stone", () => {
    fixture.detectChanges();
    expect(el.textContent).toContain("Stone");
  });

  it("should require for login with stub service", () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    expect(el.textContent).toContain("Please log in")
  });

});
