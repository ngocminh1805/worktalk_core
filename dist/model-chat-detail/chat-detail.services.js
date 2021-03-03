"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    Created by longdq
*/
var api_helper_1 = require("core/common/networking/api-helper");
var url_paths_1 = require("core/common/networking/url-paths");
var ChatDetailServices = /** @class */ (function () {
    function ChatDetailServices() {
        this.getListMessage = function (chatId) {
            return api_helper_1.post(url_paths_1.URL_PATHS.LIST_MESSAGE, {
                chatId: chatId,
                position: 0,
            }, true);
        };
        this.insertMessage = function (data) {
            return api_helper_1.post(url_paths_1.URL_PATHS.INSERT_MESSAGE, data, true);
        };
        this.requestToUser = function (id) {
            return api_helper_1.post(url_paths_1.URL_PATHS.REQUEST_TO_USER, { userId: id }, true);
        };
        this.createRomChat = function (id) {
            return api_helper_1.post(url_paths_1.URL_PATHS.CREATE_ROM_CHAT, { userId: id }, true);
        };
        this.uploadFile = function (data) {
            return api_helper_1.postFile(url_paths_1.URL_PATHS.UPLOAD_FILE, data, true);
        };
        this.removeMessage = function (data) {
            return api_helper_1.deletes("" + url_paths_1.URL_PATHS.MESSAGE, data, true);
        };
    }
    ChatDetailServices.getInstance = function () {
        if (!ChatDetailServices.instance) {
            ChatDetailServices.instance = new ChatDetailServices();
        }
        return ChatDetailServices.instance;
    };
    return ChatDetailServices;
}());
exports.default = ChatDetailServices;
