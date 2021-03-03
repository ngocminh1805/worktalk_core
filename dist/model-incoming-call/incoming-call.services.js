"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Created by longdq
*/
var api_helper_1 = require("core/common/networking/api-helper");
var url_paths_1 = require("core/common/networking/url-paths");
var IncomingCallServices = /** @class */ (function () {
    function IncomingCallServices() {
        // Video Call
        this.updateStatusVideoCall = function (data) {
            return api_helper_1.post(url_paths_1.URL_PATHS.UPDATE_STATUS_VIDEO_CALL, data, true);
        };
    }
    IncomingCallServices.getInstance = function () {
        if (!IncomingCallServices.instance) {
            IncomingCallServices.instance = new IncomingCallServices();
        }
        return IncomingCallServices.instance;
    };
    return IncomingCallServices;
}());
exports.default = IncomingCallServices;
