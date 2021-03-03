"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_CONFIGS = void 0;
var react_native_config_1 = require("react-native-config");
var IS_WEB = process.env.REACT_APP_IP_ADDRESS_API !== undefined;
var PROTOCOL = 'http://';
var HOST_API = IS_WEB ? process.env.REACT_APP_IP_ADDRESS_API : react_native_config_1.default.REACT_APP_IP_ADDRESS_API;
var PORT_API = IS_WEB ? process.env.REACT_APP_IP_ADDRESS_PORT : react_native_config_1.default.REACT_APP_IP_ADDRESS_PORT;
var PUSH_STREAM_PORT = IS_WEB
    ? process.env.REACT_APP_PUSH_STREAM_PORT
    : react_native_config_1.default.REACT_APP_PUSH_STREAM_PORT;
var HOST_FILE = 'http://172.20.80.19:9002';
var PATH_FILE = '/api/file/GetFileStreamById?guid=';
var APP_CONFIGS = {
    ITEM_PER_PAGE: 10,
    CHAT_ITEM_PER_PAGE: 20,
    URL_API: "" + PROTOCOL + HOST_API + ":" + PORT_API,
    URL_PUSH_STREAM: HOST_API + ":" + PUSH_STREAM_PORT,
};
exports.APP_CONFIGS = APP_CONFIGS;
