"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var api_helper_1 = require("core/common/networking/api-helper");
var url_paths_1 = require("core/common/networking/url-paths");
var ListMembersServices = /** @class */ (function () {
    function ListMembersServices() {
        this.searchUser = function (text, limit, page) {
            return api_helper_1.fetch(url_paths_1.URL_PATHS.SYNC_USER_IHCM, { value: text, pageSize: limit, page: page }, true);
        };
    }
    ListMembersServices.getInstance = function () {
        if (!ListMembersServices.instance) {
            ListMembersServices.instance = new ListMembersServices();
        }
        return ListMembersServices.instance;
    };
    return ListMembersServices;
}());
exports.default = ListMembersServices;
