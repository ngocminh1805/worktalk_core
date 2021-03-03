"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserInfoAction = exports.saveUserInfoAction = exports.loginMobileAction = void 0;
var index_1 = require("./index");
var loginMobileAction = function (data) {
    return {
        type: index_1.LOGIN_MOBILE,
        data: data,
    };
};
exports.loginMobileAction = loginMobileAction;
var saveUserInfoAction = function (data) {
    return {
        type: index_1.UPDATE_USER,
        data: data,
    };
};
exports.saveUserInfoAction = saveUserInfoAction;
var removeUserInfoAction = function () {
    return {
        type: index_1.REMOVE_USER,
    };
};
exports.removeUserInfoAction = removeUserInfoAction;
