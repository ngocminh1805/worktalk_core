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
var loading_modal_1 = require("libraries/loading/loading-modal");
// import CreateGroupContainer from '../../features/create-group/view/create-group.screen';
var create_group_services_1 = require("./create-group.services");
var react_1 = require("react");
function CreateGroupAdapter(props) {
    // CreateGroupContainer: CreateGroupContainer;
    // constructor(container: CreateGroupContainer) {
    //   this.CreateGroupContainer = container;
    // }
    // Variables
    var page = 1;
    var ITEM_PAGE = 15;
    // States
    var _a = react_1.useState([]), dataSearchUser = _a[0], setDataSearchUser = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(''), txt = _c[0], setTxt = _c[1];
    var _d = react_1.useState([]), dataUserCheck = _d[0], setDataUserCheck = _d[1];
    var _e = react_1.useState(false), emptyNameGr = _e[0], setEmptyNameGr = _e[1];
    var _f = react_1.useState(''), nameGr = _f[0], setNameGr = _f[1];
    // logic
    function onRefresh() {
        page = 1;
        // this.CreateGroupContainer.setState({
        //   dataSearchUser: [],
        // });
        // this.searchUser();
        setDataSearchUser([]);
        searchUser();
    }
    function onEndReached() {
        // console.log('test_onEndReached');
        // const { dataSearchUser } = this.CreateGroupContainer.state;
        // const { loading } = this.CreateGroupContainer.state;
        // let { page, ITEM_PAGE } = this.CreateGroupContainer;
        // if (loading || dataSearchUser.length < page * ITEM_PAGE) return;
        // this.CreateGroupContainer.page += 1;
        // this.searchUser();
        if (loading || dataSearchUser.length < page * ITEM_PAGE)
            return;
        page += 1;
        searchUser();
        //Call url with new page
    }
    function setTxtSearch(txt) {
        // this.CreateGroupContainer.setState(
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
    function searchUser() {
        // const text = this.CreateGroupContainer.state.txt;
        // const { page, ITEM_PAGE } = this.CreateGroupContainer;
        loading_modal_1.showLoading();
        // this.CreateGroupContainer.setState({
        //   loading: true,
        // });
        setLoading(true);
        api_helper_1.processRequestRespository(create_group_services_1.default.getInstance().searchUser(txt, ITEM_PAGE, page), searchUserSuccess);
    }
    function searchUserSuccess(res) {
        // this.CreateGroupContainer.setState({
        //   loading: false,
        // });
        setLoading(false);
        loading_modal_1.hideLoading();
        // this.CreateGroupContainer.setState({
        //   dataSearchUser: [...this.CreateGroupContainer.state.dataSearchUser, ...res],
        // });
        setDataSearchUser(__spreadArrays(dataSearchUser, res));
    }
    // searchUser = (text: string) => {
    //   showLoading();
    //   processRequestRespository(
    //     CreateGroupServices.getInstance().searchUser(text),
    //     this.searchUserSuccess
    //   );
    // };
    // searchUserSuccess = (res: User[]) => {
    //   hideLoading();
    //   this.CreateGroupContainer.setState({
    //     dataSearchUser: res,
    //   });
    // };
    function setSateDataCheck(data) {
        // this.CreateGroupContainer.setState({
        //   dataUserCheck: data,
        // });
        setDataUserCheck(data);
    }
    function addToDataCheck(item) {
        // let data = this.CreateGroupContainer.state.dataUserCheck;
        var data = dataUserCheck;
        var isAdd = true;
        if (data && data.length > 0) {
            var id_1 = item && item.item && item.item.id;
            data.map(function (element) {
                if (element && element.item && element.item.id === id_1) {
                    isAdd = false;
                }
            });
            if (isAdd == true) {
                // this.CreateGroupContainer.setState({
                //   dataUserCheck: [item, ...this.CreateGroupContainer.state.dataUserCheck],
                // });
                setDataUserCheck(__spreadArrays([item], dataUserCheck));
            }
            else {
                return;
            }
        }
        else {
            // this.CreateGroupContainer.setState({
            //   dataUserCheck: [item, ...this.CreateGroupContainer.state.dataUserCheck],
            // });
            setDataUserCheck(__spreadArrays([item], dataUserCheck));
        }
    }
    function removeUserCheck(item) {
        // const data = this.CreateGroupContainer.state.dataUserCheck;
        var data = dataUserCheck;
        var id = item && item.item && item.item.id;
        var newData = data.filter(function (e) {
            return e && e.item && e.item.id !== id;
        });
        // this.CreateGroupContainer.setState({
        //   dataUserCheck: [...newData],
        // });
        setDataUserCheck(__spreadArrays(newData));
    }
    // function onCreateGr() {
    //   let listIdUser: string[] = [];
    //   // const data = this.CreateGroupContainer.state.dataUserCheck;
    //   const data = dataUserCheck;
    //   if (data && data.length > 0) {
    //     data.map((e: itemDataCheck) => {
    //       const id = e && e.item && e.item.id;
    //       listIdUser.push(id);
    //     });
    //     // const nameGr = this.CreateGroupContainer.state.nameGr;
    //     if (!nameGr) {
    //       // this.CreateGroupContainer.setState({
    //       //   emptyNameGr: true,
    //       // });
    //       setEmptyNameGr(true);
    //       return;
    //     }
    //     const dataPost = {
    //       title: nameGr,
    //       members: listIdUser,
    //     };
    //     showLoading();
    //     processRequestRespository(
    //       CreateGroupServices.getInstance().onCreateGr(dataPost),
    //       createGrSuccess
    //     );
    //   }
    // }
    function onChangeText(txt) {
        if (txt) {
            // this.CreateGroupContainer.setState({
            //   emptyNameGr: false,
            // });
            setEmptyNameGr(false);
        }
        // this.CreateGroupContainer.setState({
        //   nameGr: txt,
        // });
        setNameGr(txt);
    }
    // function createGrSuccess(res: any) {
    //   hideLoading();
    //   if (res) {
    //     NavigationService.popMany(2);
    //     EventBus.getInstance().post({
    //       type: EventBusName.RELOAD_LIST_CHAT,
    //       payload: 'RELOAD_LIST_CHAT',
    //     });
    //   }
    // }
    return {
        page: page,
        ITEM_PAGE: ITEM_PAGE,
        dataSearchUser: dataSearchUser,
        loading: loading,
        txt: txt,
        dataUserCheck: dataUserCheck,
        emptyNameGr: emptyNameGr, setEmptyNameGr: setEmptyNameGr,
        nameGr: nameGr, setNameGr: setNameGr,
        onRefresh: onRefresh,
        onEndReached: onEndReached,
        setTxtSearch: setTxtSearch,
        searchUserSuccess: searchUserSuccess,
        searchUser: searchUser,
        setSateDataCheck: setSateDataCheck,
        addToDataCheck: addToDataCheck,
        removeUserCheck: removeUserCheck,
        // onCreateGr,
        onChangeText: onChangeText,
    };
}
exports.default = CreateGroupAdapter;
