"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var api_helper_1 = require("core/common/networking/api-helper");
var url_paths_1 = require("core/common/networking/url-paths");
var AddMembersServices = /** @class */ (function () {
    function AddMembersServices() {
        this.searchUser = function (text, limit, page) {
            return api_helper_1.fetch(url_paths_1.URL_PATHS.SYNC_USER_IHCM, { value: text, pageSize: limit, page: page }, true);
        };
        this.addMembers = function (data) {
            return api_helper_1.post(url_paths_1.URL_PATHS.ADD_MEMBERS, data, true);
        };
    }
    AddMembersServices.getInstance = function () {
        if (!AddMembersServices.instance) {
            AddMembersServices.instance = new AddMembersServices();
        }
        return AddMembersServices.instance;
    };
    return AddMembersServices;
}());
exports.default = AddMembersServices;
