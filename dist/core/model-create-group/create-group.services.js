"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var api_helper_1 = require("core/common/networking/api-helper");
var url_paths_1 = require("core/common/networking/url-paths");
var CreateGroupServices = /** @class */ (function () {
    function CreateGroupServices() {
        this.searchUser = function (text, limit, page) {
            return api_helper_1.fetch(url_paths_1.URL_PATHS.SYNC_USER_IHCM, { value: text, pageSize: limit, page: page }, true);
        };
        this.onCreateGr = function (data) {
            return api_helper_1.post(url_paths_1.URL_PATHS.CREATE_GROUP, data, true);
        };
    }
    CreateGroupServices.getInstance = function () {
        if (!CreateGroupServices.instance) {
            CreateGroupServices.instance = new CreateGroupServices();
        }
        return CreateGroupServices.instance;
    };
    return CreateGroupServices;
}());
exports.default = CreateGroupServices;
