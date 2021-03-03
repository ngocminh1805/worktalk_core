"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setI18nConfig = exports.translate = void 0;
var react_native_1 = require("react-native");
var RNLocalize = require("react-native-localize");
var i18n_js_1 = require("i18n-js");
var lodash_memoize_1 = require("lodash.memoize");
var translationGetters = {
    en: function () { return require('./translations/en.json'); },
    // vi: () => require('./translations/en.json'),
};
exports.translate = lodash_memoize_1.default(function (key, config) {
    return i18n_js_1.default.t(key, config);
}, function (key, config) { return (config ? key + JSON.stringify(config) : key); });
var setI18nConfig = function () {
    var _a;
    // fallback if no available language fits
    var fallback = { languageTag: 'en', isRTL: false };
    var _b = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback, languageTag = _b.languageTag, isRTL = _b.isRTL;
    // clear translation cache
    exports.translate.cache.clear();
    // update layout direction
    react_native_1.I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n_js_1.default.translations = (_a = {},
        _a[languageTag] = translationGetters[languageTag](),
        _a);
    i18n_js_1.default.locale = languageTag;
};
exports.setI18nConfig = setI18nConfig;
