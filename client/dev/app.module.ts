import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroListComponent} from "./hero-list.component";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
    ],
    declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroListComponent
    ],
    providers: [
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
