import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroListComponent} from "./hero-list.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./services/hero.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryDataService} from "./mock/in-memory-data.service";
import {HeroSearchComponent} from "./components/hero-search.component";


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
      AppComponent,
      HeroDetailComponent,
      HeroListComponent,
      DashboardComponent,
      HeroSearchComponent
    ],
    providers: [
      HeroService
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
