"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var twain_service_1 = require("./twain.service");
/**
 * Created by yangxu on 2017/3/8.
 */
var TwainComponent = (function () {
    function TwainComponent(twainService) {
        this.twainService = twainService;
        this.quote = '...';
    }
    TwainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.twainService.getQuote().then(function (quote) { return _this.quote = quote; });
    };
    TwainComponent = __decorate([
        core_1.Component({
            selector: 'twain-quote',
            template: '<p class="twain"><i>{{quote}}</i></p>'
        }), 
        __metadata('design:paramtypes', [twain_service_1.TwainService])
    ], TwainComponent);
    return TwainComponent;
}());
exports.TwainComponent = TwainComponent;
//# sourceMappingURL=twain.component.js.map