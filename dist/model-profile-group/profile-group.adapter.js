"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/*
    Created by longdq
*/
var api_helper_1 = require("core/common/networking/api-helper");
var profile_group_services_1 = require("./profile-group.services");
function ProfileGroupAdapter(props) {
    var _a = react_1.useState(), chatInfo = _a[0], setChatInfo = _a[1];
    var _b = react_1.useState({
        users: [],
        avatar_url: '',
    }), dataInfoGr = _b[0], setDataInfoGr = _b[1];
    var _c = react_1.useState(0), index = _c[0], setIndex = _c[1];
    var _d = react_1.useState([
        { key: '1', title: 'First' },
        { key: '2', title: 'Second' },
    ]), routes = _d[0], setRoutes = _d[1];
    var goToChatDetail = function () { };
    var getInfo = function () {
        var chatId = chatInfo && (chatInfo === null || chatInfo === void 0 ? void 0 : chatInfo.id);
        api_helper_1.processRequestRespository(profile_group_services_1.default.getInstance().getInfoChat(chatId), getInfoSuccess);
    };
    var getInfoSuccess = function (res) {
        if (res) {
            setDataInfoGr(res);
        }
    };
    var removeUserGr = function (item) {
        var chatId = chatInfo && (chatInfo === null || chatInfo === void 0 ? void 0 : chatInfo.id);
        var userId = item && item.id;
        if (chatId && userId) {
            api_helper_1.processRequestRespository(profile_group_services_1.default.getInstance().removeUserGr(userId, chatId), removeUserSuccess);
        }
    };
    var removeUserSuccess = function (res) {
        res && getInfo;
    };
    return {
        chatInfo: chatInfo,
        index: index,
        dataInfoGr: dataInfoGr,
        routes: routes,
        getInfo: getInfo, goToChatDetail: goToChatDetail, removeUserGr: removeUserGr, setIndex: setIndex
    };
}
exports.default = ProfileGroupAdapter;
