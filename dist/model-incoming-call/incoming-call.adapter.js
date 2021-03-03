"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
function IncomingCallAdapter(props) {
    // IncomingCallContainer: IncomingCallContainer;
    // constructor(container: IncomingCallContainer) {
    //   this.IncomingCallContainer = container;
    // }
    // Variables
    // const navigation = props.navigation;
    // const userInfo = navigation.getParam('user');
    // const typeCall = navigation.getParam('type');
    // const chatInfo = navigation.getParam('chatInfo') || {};
    // const timeStart = navigation.getParam('timeStart') || 0;
    //
    // function goBack() {
    //   NavigationService.goBack();
    // }
    // function onCancelCall() {
    //   const params: StatusVideoCallParams = {
    //     chatId: chatInfo?.chatId || chatInfo?._id,
    //     type: KindOfMsg.TYPE_VIDEO_CALL_DENY,
    //     senderId: props.userInfo?.id,
    //     receiverId: chatInfo?.user?.id,
    //     timeStart: timeStart,
    //   };
    //   processRequestRespository(
    //     IncomingCallServices.getInstance().updateStatusVideoCall(params),
    //     () => {
    //       NavigationService.pop();
    //     },
    //     undefined,
    //     false,
    //     false
    //   );
    // }
    // //VideoCall
    // function updateStatusVideoCall() {
    //   const params: StatusVideoCallParams = {
    //     chatId: chatInfo?.chatId || chatInfo?._id,
    //     type: KindOfMsg.TYPE_VIDEO_CALL_ACCEPT,
    //     link: 'https://meet.hyperlogy.com/' + HyperUtils.genRandomID(16),
    //     senderId: props.userInfo?.id,
    //     receiverId: chatInfo?.user?.id,
    //     timeStart: timeStart,
    //   };
    //   processRequestRespository(
    //     IncomingCallServices.getInstance().updateStatusVideoCall(params),
    //     () => updateStatusVideoCallSuccess(params?.link),
    //     undefined,
    //     false,
    //     false
    //   );
    // }
    // function updateStatusVideoCallSuccess(link: string) {
    //   console.log('test_updateStatusVideoCallSuccess');
    //   NavigationService.navigate(VideoCallScreen, {
    //     chatInfo: chatInfo,
    //     link,
    //   });
    // }
    // function onFinishCall() {
    //   showAlert(TYPE.WARN, 'Finish call:', props.userInfo?.id);
    //   console.log('test_onFinishCall: ', props);
    //   const chatId = chatInfo?.chatId || chatInfo?._id || chatInfo?.data?.id;
    //   const params: StatusVideoCallParams = {
    //     chatId: chatId,
    //     type: KindOfMsg.TYPE_VIDEO_CALL_FINISH,
    //     senderId: props.userInfo?.id,
    //     receiverId: chatInfo?.user?.id || chatInfo?.data?.contact?.id,
    //     timeStart: timeStart,
    //   };
    //   processRequestRespository(
    //     IncomingCallServices.getInstance().updateStatusVideoCall(params),
    //     () => {
    //       NavigationService.pop();
    //     },
    //     undefined,
    //     false,
    //     false
    //   );
    // }
    return {
    // userInfo,
    // typeCall,
    // chatInfo,
    // timeStart,
    // goBack,
    // onCancelCall,
    // updateStatusVideoCall,
    // onFinishCall,
    // updateStatusVideoCallSuccess,
    };
}
exports.default = IncomingCallAdapter;
