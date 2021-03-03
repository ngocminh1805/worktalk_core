"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
var api_helper_1 = require("core/common/networking/api-helper");
var loading_modal_1 = require("libraries/loading/loading-modal");
// import ListMembersContainer from '../../features/list-members/view/list-members.screen';
var list_members_services_1 = require("./list-members.services");
var react_1 = require("react");
function ListMembersAdapter(props) {
    // ListMembersContainer: ListMembersContainer;
    // constructor(container: ListMembersContainer) {
    //   this.ListMembersContainer = container;
    // }
    // Variables
    var userInfo = props.userInfo;
    var page = 1;
    var ITEM_PAGE = 15;
    // States
    var _a = react_1.useState([]), dataSearchUser = _a[0], setDataSearchUser = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(''), txt = _c[0], setTxt = _c[1];
    // logic
    // function goToProfile() {
    //   NavigationService.navigate(ProfileScreen, {
    //     user: userInfo.user,
    //   });
    // }
    // function goToSearch() {
    //   NavigationService.navigate(SearchScreen);
    // }
    // function goToNewMess() {
    //   NavigationService.navigate(NewMessageScreen);
    // }
    function onRefresh() {
        page = 1;
        setDataSearchUser([]);
        searchUser();
        console.log('List Member refresh :', page, '-------------', dataSearchUser);
    }
    function onEndReached() {
        console.log('test_onEndReached');
        // const { dataSearchUser } = this.ListMembersContainer.state;
        // const { loading } = this.ListMembersContainer.state;
        // let { page, ITEM_PAGE } = this.ListMembersContainer;
        // if (loading || dataSearchUser.length < page * ITEM_PAGE) return;
        page++;
        console.log('Test onEndReached :', page, '-----', dataSearchUser);
        searchUser();
        //Call url with new pages
    }
    function setTxtSearch(txt) {
        // this.ListMembersContainer.setState(
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
        // const text = this.ListMembersContainer.state.txt;
        // const text = txt;
        // const { page, ITEM_PAGE } = this.ListMembersContainer;
        loading_modal_1.showLoading();
        // this.ListMembersContainer.setState({
        //   loading: true,
        // });
        setLoading(true);
        api_helper_1.processRequestRespository(list_members_services_1.default.getInstance().searchUser(txt, ITEM_PAGE, page), searchUserSuccess);
    }
    function searchUserSuccess(res) {
        // this.ListMembersContainer.setState({
        //   loading: false,
        // });
        setLoading(false);
        loading_modal_1.hideLoading();
        // this.ListMembersContainer.setState({
        //   dataSearchUser: [...this.ListMembersContainer.state.dataSearchUser, ...res],
        // });
        setDataSearchUser(dataSearchUser.concat(res));
    }
    // function goToChatDetail(item: User2) {
    //   NavigationService.navigate(ChatDetailScreen, {
    //     chatInfo: { data: item, type: TypeParam.FROM_USER },
    //   });
    // }
    return {
        page: page,
        ITEM_PAGE: ITEM_PAGE,
        dataSearchUser: dataSearchUser,
        loading: loading,
        txt: txt,
        // goToProfile,
        // goToSearch,
        // goToNewMess,
        onRefresh: onRefresh,
        onEndReached: onEndReached,
        setTxtSearch: setTxtSearch,
        searchUser: searchUser,
        searchUserSuccess: searchUserSuccess,
    };
}
exports.default = ListMembersAdapter;
