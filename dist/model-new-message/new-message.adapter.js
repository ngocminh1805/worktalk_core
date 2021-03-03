"use strict";
/*
    Created by longdq
*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_helper_1 = require("core/common/networking/api-helper");
var react_1 = require("react");
var new_message_services_1 = require("./new-message.services");
function NewMessageAdapter(props) {
    // NewMessageContainer: NewMessageContainer;
    // constructor(container: NewMessageContainer) {
    //   this.NewMessageContainer = container;
    // }
    // Variables
    var page = 1;
    var ITEM_PAGE = 15;
    // States
    var _a = react_1.useState([]), dataSearchUser = _a[0], setDataSearchUser = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(''), txt = _c[0], setTxt = _c[1];
    // logic
    function onRefresh() {
        // this.NewMessageContainer.page = 1;
        // this.NewMessageContainer.setState({
        //   dataSearchUser: [],
        // });
        // this.searchUser();
        (page = 1), setDataSearchUser([]);
    }
    function onEndReached() {
        console.log('test_onEndReached');
        // const { dataSearchUser } = this.NewMessageContainer.state;
        // const { loading } = this.NewMessageContainer.state;
        // let { page, ITEM_PAGE } = this.NewMessageContainer;
        // if (loading || dataSearchUser.length < page * ITEM_PAGE) return;
        // this.NewMessageContainer.page += 1;
        // this.searchUser();
        if (loading || dataSearchUser.length < page * ITEM_PAGE)
            return;
        page += 1;
        searchUser();
        //Call url with new page
    }
    function searchUser() {
        // const text = this.NewMessageContainer.state.txt;
        var text = txt;
        // const { page, ITEM_PAGE } = this.NewMessageContainer;
        // showLoading();
        // this.NewMessageContainer.setState({
        //   loading: true,
        // });
        setLoading(true);
        api_helper_1.processRequestRespository(new_message_services_1.default.getInstance().searchUser(text, ITEM_PAGE, page), 
        // this.searchUserSuccess
        searchUserSuccess);
    }
    function setTxtSearch(txt) {
        // this.NewMessageContainer.setState(
        //   {
        //     txt: txt,
        //     dataSearchUser: [],
        //   },
        //   () => {
        //     this.searchUser();
        //   }
        // );
        setTxt(txt);
        setDataSearchUser([]);
        searchUser();
    }
    // searchUser = (text: string) => {
    //   showLoading();
    //   console.log(text, 'text search ......');
    //   processRequestRespository(
    //     NewMessageServices.getInstance().searchUser(text),
    //     this.searchUserSuccess
    //   );
    // };
    function searchUserSuccess(res) {
        // this.NewMessageContainer.setState({
        //   loading: false,
        // });
        setLoading(false);
        // hideLoading();
        // this.NewMessageContainer.setState({
        //   dataSearchUser: [...this.NewMessageContainer.state.dataSearchUser, ...res],
        // });
        setDataSearchUser(__spreadArrays(dataSearchUser, res));
    }
    return {
        page: page,
        ITEM_PAGE: ITEM_PAGE,
        dataSearchUser: dataSearchUser,
        loading: loading,
        txt: txt,
        onRefresh: onRefresh,
        searchUserSuccess: searchUserSuccess,
        setTxtSearch: setTxtSearch,
        onEndReached: onEndReached,
        searchUser: searchUser,
    };
}
exports.default = NewMessageAdapter;
