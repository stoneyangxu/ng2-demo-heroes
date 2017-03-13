"use strict";
/**
 * Created by yangxu on 2017/3/8.
 */
var TwainService = (function () {
    function TwainService() {
    }
    TwainService.prototype.getQuote = function () {
        return Promise.resolve("stone");
    };
    return TwainService;
}());
exports.TwainService = TwainService;
//# sourceMappingURL=twain.service.js.map