/* 
    Created by longdq 
*/

import { processRequestRespository } from '../common/networking/api-helper';
import EventBus, { EventBusName } from '../common/event-bus';
// import { hideLoading, showLoading } from 'libraries/loading/loading-modal';
// import NavigationService from 'routers/navigation-service';
import { User, User2 } from '../common/types/user';
// import { itemDataCheck } from '../../features/create-group/view/components/search-list-user/item-list-user/item-list-user.component';
// import CreateGroupContainer from '../../features/create-group/view/create-group.screen';
import CreateGroupServices from './create-group.services';
import { CreateGroupProps } from './create-group.props';
import { useState } from 'react';

interface itemDataCheck {
  item: User2;
  check: boolean;
}

function CreateGroupAdapter(props: CreateGroupProps) {
  // CreateGroupContainer: CreateGroupContainer;
  // constructor(container: CreateGroupContainer) {
  //   this.CreateGroupContainer = container;
  // }

  // Variables
  var page: number = 1;
  const ITEM_PAGE = 15;

  // States

  const [dataSearchUser, setDataSearchUser] = useState<User2[]>([]);
  const [loading, setLoading] = useState(false);
  const [txt, setTxt] = useState('');
  const [dataUserCheck, setDataUserCheck] = useState<itemDataCheck[]>([]);
  const [emptyNameGr, setEmptyNameGr] = useState(false);
  const [nameGr, setNameGr] = useState('');

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
    if (loading || dataSearchUser.length < page * ITEM_PAGE) return;
    page += 1;
    searchUser();
    //Call url with new page
  }

  function setTxtSearch(txt: string) {
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
    // showLoading();
    // this.CreateGroupContainer.setState({
    //   loading: true,
    // });
    setLoading(true);
    processRequestRespository(
      CreateGroupServices.getInstance().searchUser(txt, ITEM_PAGE, page),
      searchUserSuccess
    );
  }
  function searchUserSuccess(res: User2[]) {
    // this.CreateGroupContainer.setState({
    //   loading: false,
    // });
    setLoading(false);
    // hideLoading();
    // this.CreateGroupContainer.setState({
    //   dataSearchUser: [...this.CreateGroupContainer.state.dataSearchUser, ...res],
    // });
    setDataSearchUser([...dataSearchUser, ...res]);
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

  function setSateDataCheck(data: itemDataCheck[]) {
    // this.CreateGroupContainer.setState({
    //   dataUserCheck: data,
    // });
    setDataUserCheck(data);
  }

  function addToDataCheck(item: itemDataCheck) {
    // let data = this.CreateGroupContainer.state.dataUserCheck;
    let data = dataUserCheck;
    let isAdd = true;
    if (data && data.length > 0) {
      const id = item && item.item && item.item.id;
      data.map((element: itemDataCheck) => {
        if (element && element.item && element.item.id === id) {
          isAdd = false;
        }
      });
      if (isAdd == true) {
        // this.CreateGroupContainer.setState({
        //   dataUserCheck: [item, ...this.CreateGroupContainer.state.dataUserCheck],
        // });
        setDataUserCheck([item, ...dataUserCheck]);
      } else {
        return;
      }
    } else {
      // this.CreateGroupContainer.setState({
      //   dataUserCheck: [item, ...this.CreateGroupContainer.state.dataUserCheck],
      // });
      setDataUserCheck([item, ...dataUserCheck]);
    }
  }

  function removeUserCheck(item: itemDataCheck) {
    // const data = this.CreateGroupContainer.state.dataUserCheck;
    const data = dataUserCheck;
    const id = item && item.item && item.item.id;
    let newData = data.filter((e: itemDataCheck) => {
      return e && e.item && e.item.id !== id;
    });
    // this.CreateGroupContainer.setState({
    //   dataUserCheck: [...newData],
    // });
    setDataUserCheck([...newData]);
  }

  function onCreateGr() {
    let listIdUser: string[] = [];
    // const data = this.CreateGroupContainer.state.dataUserCheck;
    const data = dataUserCheck;
    if (data && data.length > 0) {
      data.map((e: itemDataCheck) => {
        const id = e && e.item && e.item.id;
        listIdUser.push(id);
      });
      // const nameGr = this.CreateGroupContainer.state.nameGr;
      if (!nameGr) {
        // this.CreateGroupContainer.setState({
        //   emptyNameGr: true,
        // });
        setEmptyNameGr(true);
        return;
      }
      const dataPost = {
        title: nameGr,
        members: listIdUser,
      };
      // showLoading();
      processRequestRespository(
        CreateGroupServices.getInstance().onCreateGr(dataPost),
        // createGrSuccess
      );
    }
  }

  function onChangeText(txt: string) {
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

  return{
    page,
    ITEM_PAGE,
    dataSearchUser,
    loading,
    txt,
    dataUserCheck,
    emptyNameGr,
    nameGr,
    onRefresh,
    onEndReached,
    setTxtSearch,
    searchUserSuccess,
    searchUser,
    setSateDataCheck,
    addToDataCheck,
    removeUserCheck,
    onCreateGr,
    onChangeText,
    // createGrSuccess,
  }
}

export default CreateGroupAdapter;
