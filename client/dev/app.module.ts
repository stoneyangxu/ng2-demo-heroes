import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroListComponent} from "./hero-list.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./services/hero.service";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
    ],
    declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroListComponent,
      DashboardComponent
    ],
    providers: [
      HeroService
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
