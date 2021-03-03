"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var api_helper_1 = require("core/common/networking/api-helper");
var url_paths_1 = require("core/common/networking/url-paths");
var ProfileGroupServices = /** @class */ (function () {
    function ProfileGroupServices() {
        this.getInfoChat = function (chatId) {
            return api_helper_1.post(url_paths_1.URL_PATHS.CHAT_INFO, { chatId: chatId }, true);
        };
        this.removeUserGr = function (userId, chatId) {
            return api_helper_1.post(url_paths_1.URL_PATHS.REMOVE_GROUP, { userId: userId, chatId: chatId }, true);
        };
    }
    ProfileGroupServices.getInstance = function () {
        if (!ProfileGroupServices.instance) {
            " ";
            ProfileGroupServices.instance = new ProfileGroupServices();
        }
        return ProfileGroupServices.instance;
    };
    return ProfileGroupServices;
}());
exports.default = ProfileGroupServices;
