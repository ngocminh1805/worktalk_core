"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileOthersServices = /** @class */ (function () {
    function ProfileOthersServices() {
    }
    ProfileOthersServices.getInstance = function () {
        if (!ProfileOthersServices.instance) {
            ProfileOthersServices.instance = new ProfileOthersServices();
        }
        return ProfileOthersServices.instance;
    };
    return ProfileOthersServices;
}());
exports.default = ProfileOthersServices;
