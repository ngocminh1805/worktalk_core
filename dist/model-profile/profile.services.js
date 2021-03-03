"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileServices = /** @class */ (function () {
    function ProfileServices() {
    }
    ProfileServices.getInstance = function () {
        if (!ProfileServices.instance) {
            ProfileServices.instance = new ProfileServices();
        }
        return ProfileServices.instance;
    };
    return ProfileServices;
}());
exports.default = ProfileServices;
