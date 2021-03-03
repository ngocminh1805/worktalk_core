"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var api_helper_1 = require("core/common/networking/api-helper");
var url_paths_1 = require("core/common/networking/url-paths");
var NewMessageServices = /** @class */ (function () {
    function NewMessageServices() {
        this.searchUser = function (text, limit, page) {
            return api_helper_1.fetch(url_paths_1.URL_PATHS.SYNC_USER_IHCM, { value: text, pageSize: limit, page: page }, true);
        };
    }
    NewMessageServices.getInstance = function () {
        if (!NewMessageServices.instance) {
            NewMessageServices.instance = new NewMessageServices();
        }
        return NewMessageServices.instance;
    };
    return NewMessageServices;
}());
exports.default = NewMessageServices;
