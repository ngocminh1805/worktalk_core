"use strict";
/*
    Created by longdq
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { showLoading, hideLoading } from 'libraries/loading/loading-modal';
var api_helper_1 = require("core/common/networking/api-helper");
// import {AddMembersContainer} from '../../features/add-members/view/add-members.screen';
var add_members_services_1 = require("./add-members.services");
var react_1 = require("react");
// import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
function AddMembersAdapter(props) {
    // AddMembersContainer: AddMembersContainer;
    // constructor(container: AddMembersContainer) {
    //   this.AddMembersContainer = container;
    // }
    // Variables
    var page = 1;
    var ITEM_PAGE = 15;
    // const navigation: NavigationScreenProp<NavigationState, NavigationParams> = props.navigation;
    // States
    var _a = react_1.useState([]), dataSearchUser = _a[0], setDataSearchUser = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(''), txt = _c[0], setTxt = _c[1];
    var _d = react_1.useState([]), dataUserCheck = _d[0], setDataUserCheck = _d[1];
    var _e = react_1.useState(false), emptyNameGr = _e[0], setEmptyNameGr = _e[1];
    var _f = react_1.useState(''), nameGr = _f[0], setNameGr = _f[1];
    function onRefresh() {
        // this.AddMembersContainer.page = 1;
        // this.AddMembersContainer.setState({
        //   dataSearchUser: [],
        // });
        // this.searchUser();
        page = 1;
        setDataSearchUser([]);
        searchUser();
    }
    function onEndReached() {
        // console.log('test_onEndReached');
        // const { dataSearchUser } = this.AddMembersContainer.state;
        // const { loading } = this.AddMembersContainer.state;
        // let { page, ITEM_PAGE } = this.AddMembersContainer;
        // if (loading || dataSearchUser.length < page * ITEM_PAGE) return;
        // this.AddMembersContainer.page += 1;
        // this.searchUser();
        console.log('test_onEndReached');
        if (loading || dataSearchUser.length < page * ITEM_PAGE)
            return;
        page += 1;
        searchUser();
        //Call url with new page
    }
    function setTxtSearch(txt) {
        // this.AddMembersContainer.setState(
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
        // const text = this.AddMembersContainer.state.txt;
        // const { page, ITEM_PAGE } = this.AddMembersContainer;
        // showLoading();
        // this.AddMembersContainer.setState({
        //   loading: true,
        // });
        setLoading(true);
        api_helper_1.processRequestRespository(add_members_services_1.default.getInstance().searchUser(txt, ITEM_PAGE, page), searchUserSuccess);
    }
    function searchUserSuccess(res) {
        // this.AddMembersContainer.setState({
        //   loading: false,
        // });
        // // hideLoading();
        // this.AddMembersContainer.setState({
        //   dataSearchUser: [...this.AddMembersContainer.state.dataSearchUser, ...res],
        // });
        setLoading(false);
        setDataSearchUser(__spreadArray(__spreadArray([], dataSearchUser), res));
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
        // this.AddMembersContainer.setState({
        //   dataUserCheck: data,
        // });
        setDataUserCheck(data);
    }
    function addToDataCheck(item) {
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
                // this.AddMembersContainer.setState({
                //   dataUserCheck: [item, ...this.AddMembersContainer.state.dataUserCheck],
                // });
                setDataUserCheck(__spreadArray([item], dataUserCheck));
            }
            else {
                return;
            }
        }
        else {
            // this.AddMembersContainer.setState({
            //   dataUserCheck: [item, ...this.AddMembersContainer.state.dataUserCheck],
            // });
            setDataUserCheck(__spreadArray([item], dataUserCheck));
        }
    }
    function removeUserCheck(item) {
        // const data = this.AddMembersContainer.state.dataUserCheck;
        var data = dataUserCheck;
        var id = item && item.item && item.item.id;
        var newData = data.filter(function (e) {
            return e && e.item && e.item.id !== id;
        });
        // this.AddMembersContainer.setState({
        //   dataUserCheck: [...newData],
        // });
        setDataUserCheck(__spreadArray([], newData));
    }
    // function onCreateGr() {
    //   let listIdUser: string[] = [];
    //   // const data = this.AddMembersContainer.state.dataUserCheck;
    //   const data = dataUserCheck;
    //   if (data && data.length > 0) {
    //     data.map((e: itemDataCheck) => {
    //       const id = e && e.item && e.item.id;
    //       listIdUser.push(id);
    //     });
    //     const chatId = navigation.getParam('chatId');
    //     if (!chatId) {
    //       return;
    //     }
    //     const dataPost = {
    //       chatId: chatId,
    //       members: listIdUser,
    //     };
    //     // showLoading();
    //     processRequestRespository(
    //       AddMembersServices.getInstance().addMembers(dataPost),
    //       createGrSuccess
    //     );
    //   }
    // }
    function onChangeText(txt) {
        if (txt) {
            // this.AddMembersContainer.setState({
            //   emptyNameGr: false,
            // });
            setEmptyNameGr(false);
        }
        // this.AddMembersContainer.setState({
        //   nameGr: txt,
        // });
        setNameGr(txt);
    }
    function createGrSuccess(res) {
        // hideLoading();
        if (res) {
            // NavigationService.popMany(2);
            // EventBus.getInstance().post({
            //   type: EventBusName.RELOAD_LIST_CHAT,
            //   payload: 'RELOAD_LIST_CHAT',
            // });
        }
    }
    return {
        page: page,
        ITEM_PAGE: ITEM_PAGE,
        dataSearchUser: dataSearchUser,
        loading: loading,
        txt: txt,
        dataUserCheck: dataUserCheck,
        emptyNameGr: emptyNameGr,
        nameGr: nameGr,
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
        createGrSuccess: createGrSuccess,
    };
}
exports.default = AddMembersAdapter;
