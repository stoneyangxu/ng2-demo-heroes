"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const forms_1 = require("@angular/forms");
const hero_detail_component_1 = require("./hero-detail.component");
const hero_list_component_1 = require("./hero-list.component");
const dashboard_component_1 = require("./dashboard.component");
const hero_service_1 = require("./services/hero.service");
const app_routing_module_1 = require("./app-routing.module");
const http_1 = require("@angular/http");
const angular2_in_memory_web_api_1 = require("angular2-in-memory-web-api");
const in_memory_data_service_1 = require("./mock/in-memory-data.service");
const hero_search_component_1 = require("./components/hero-search.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_list_component_1.HeroListComponent,
            dashboard_component_1.DashboardComponent,
            hero_search_component_1.HeroSearchComponent
        ],
        providers: [
            hero_service_1.HeroService
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map