import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
    ],
    declarations: [
      AppComponent,
    ],
    providers: [
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
