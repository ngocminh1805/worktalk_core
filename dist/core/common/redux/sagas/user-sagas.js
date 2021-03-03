"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginMobileSaga = void 0;
var login_old_services_1 = require("features/login-old/model-login-old/login-old.services");
var async_storage_helpers_1 = require("helpers/async-storage-helpers");
var loading_modal_1 = require("libraries/loading/loading-modal");
var effects_1 = require("redux-saga/effects");
var actions_1 = require("core/common/redux/actions");
var navigation_service_1 = require("routers/navigation-service");
var screen_name_1 = require("routers/screen-name");
var hyper_utils_1 = require("../../hyper-utils");
var status_1 = require("../../networking/status");
function loginMobileSaga(action) {
    var params, res, loginResponse, _a, deviceInfo;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                params = action === null || action === void 0 ? void 0 : action.data;
                if (!params) return [3 /*break*/, 10];
                loading_modal_1.showLoading();
                console.log('test_loginMobile: ', params);
                return [4 /*yield*/, effects_1.call(login_old_services_1.default.getInstance().sycnUserIHCM, params)];
            case 1:
                res = _c.sent();
                console.log('test_res: ', res);
                if (!res) return [3 /*break*/, 9];
                loginResponse = { user: res === null || res === void 0 ? void 0 : res.data, token: params === null || params === void 0 ? void 0 : params.token };
                _a = res === null || res === void 0 ? void 0 : res.status;
                switch (_a) {
                    case status_1.SUCCESS: return [3 /*break*/, 2];
                    case status_1.CREATED: return [3 /*break*/, 7];
                }
                return [3 /*break*/, 9];
            case 2:
                // AsyncStorageHelpers.save(StorageKey.USER_INFO, JSON.stringify(res.data));
                // AsyncStorageHelpers.save(StorageKey.USER_INFO, JSON.stringify(res.data));
                console.log('test_loginResponse:', loginResponse, '- res?.status');
                return [4 /*yield*/, effects_1.put({ type: actions_1.UPDATE_USER, payload: loginResponse })];
            case 3:
                _c.sent();
                //Save user info
                async_storage_helpers_1.default.save(async_storage_helpers_1.StorageKey.USER_INFO, JSON.stringify(loginResponse));
                return [4 /*yield*/, effects_1.call(getDeviceInfo)];
            case 4:
                deviceInfo = _c.sent();
                deviceInfo.userId = ((_b = loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.user) === null || _b === void 0 ? void 0 : _b.id) || '';
                deviceInfo.token = (loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.token) || '';
                if (!hyper_utils_1.HyperUtils.isNotEmpty(deviceInfo)) return [3 /*break*/, 6];
                return [4 /*yield*/, effects_1.call(login_old_services_1.default.getInstance().updateDevices, deviceInfo)];
            case 5:
                _c.sent();
                loading_modal_1.hideLoading();
                navigation_service_1.default.reset(screen_name_1.BottomTab);
                _c.label = 6;
            case 6: return [3 /*break*/, 9];
            case 7:
                // const loginResponse: LoginMobileResponse = { user: res.data, token: params.token };
                console.log('test_loginResponse:', loginResponse);
                return [4 /*yield*/, effects_1.put({ type: actions_1.UPDATE_USER, payload: loginResponse })];
            case 8:
                _c.sent();
                //Save user info
                async_storage_helpers_1.default.save(async_storage_helpers_1.StorageKey.USER_INFO, JSON.stringify(loginResponse));
                navigation_service_1.default.reset(screen_name_1.BottomTab);
                return [3 /*break*/, 9];
            case 9:
                loading_modal_1.hideLoading();
                _c.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}
exports.loginMobileSaga = loginMobileSaga;
function getDeviceInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var deviceInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, async_storage_helpers_1.default.get(async_storage_helpers_1.StorageKey.DEVICE_INFO)];
                case 1:
                    deviceInfo = (_a.sent());
                    return [2 /*return*/, JSON.parse(deviceInfo)];
            }
        });
    });
}
function loginMobile() { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }
