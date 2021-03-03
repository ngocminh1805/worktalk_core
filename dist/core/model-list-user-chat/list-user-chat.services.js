"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var api_helper_1 = require("core/common/networking/api-helper");
var url_paths_1 = require("../common/networking/url-paths");
var ListUserChatServices = /** @class */ (function () {
    function ListUserChatServices() {
        this.getListUser = function () {
            return api_helper_1.post(url_paths_1.URL_PATHS.LIST_USER, {}, true);
        };
        this.getRoomChat = function (userId, limit, page) {
            return api_helper_1.fetch(url_paths_1.URL_PATHS.LIST_ROOM_CHAT, { userId: userId, pageSize: limit, page: page }, true);
        };
    }
    ListUserChatServices.getInstance = function () {
        if (!ListUserChatServices.instance) {
            ListUserChatServices.instance = new ListUserChatServices();
        }
        return ListUserChatServices.instance;
    };
    return ListUserChatServices;
}());
exports.default = ListUserChatServices;
