"use strict";
/*
    Created by longdq
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatDetailAdapter = void 0;
var api_helper_1 = require("core/common/networking/api-helper");
var react_native_gifted_chat_1 = require("react-native-gifted-chat");
var navigation_service_1 = require("routers/navigation-service");
var screen_name_1 = require("routers/screen-name");
var message_1 = require("core/common/types/message");
var languages_1 = require("../../res/languages");
var chat_detail_services_1 = require("./chat-detail.services");
var react_native_1 = require("react-native");
var ChatDetailAdapter = /** @class */ (function () {
    function ChatDetailAdapter(container) {
        var _this = this;
        this.tmpMessage = null;
        this.goBack = function () {
            navigation_service_1.default.goBack();
        };
        //say Hi!
        this.sayHi = function () {
            var newMess = {
                _id: null,
                text: 'Hi!',
                createdAt: null,
                user: null,
                image: null,
                video: null,
                audio: null,
                system: null,
                sent: null,
                received: null,
                pending: null,
                quickReplies: null,
                type: null,
                path: null,
                reply: null,
                fileExtension: null,
                attachment: null,
                deleted: null,
            };
            _this.checkSendMessage([newMess], null);
        };
        this.onDeleteMessageSuccess = function (rs, msg) {
            console.log('test_onDeleteMessageSuccess: ', rs, '__', msg);
            _this.ChatDetailContainer.setState(function (previousState) { return ({
                dataListMessage: previousState.dataListMessage.filter(function (message) { return message._id !== msg._id; }),
            }); });
        };
        this.showMessageActions = function (context, message) {
            var _a, _b, _c, _d;
            console.log('test_showActionMessage:', message);
            var myId = (_b = (_a = _this.ChatDetailContainer.props.userInfo) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.id;
            var msgId = (message === null || message === void 0 ? void 0 : message.user.id) || (message === null || message === void 0 ? void 0 : message.user._id);
            var isMe = myId === msgId;
            (_d = (_c = _this.ChatDetailContainer.refChatActionsComponent) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.openModal(isMe);
            _this.tmpMessage = message;
        };
        this.goToVideoCall = function () {
            var _a, _b;
            navigation_service_1.default.navigate(screen_name_1.IncomingCallScreen, {
                type: message_1.KindOfMsg.TYPE_VIDEO_CALL_OUTGOING,
                user: (_b = (_a = _this.ChatDetailContainer.chatInfo) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.contact,
                chatInfo: _this.ChatDetailContainer.chatInfo,
            });
            var msg = [{ text: message_1.KindOfMsg.TYPE_VIDEO_CALL_INCOMING }];
            _this.checkSendMessage(msg, message_1.KindOfMsg.TYPE_VIDEO_CALL_INCOMING);
        };
        this.requestToUser = function (id) {
            api_helper_1.processRequestRespository(chat_detail_services_1.default.getInstance().requestToUser(id), _this.requestToUserSuccess);
        };
        this.requestToUserSuccess = function (res) {
            if (res && res.chatId) {
                _this.getListMessage(res.chatId);
                _this.ChatDetailContainer.roomId = res.chatId;
            }
            else {
                _this.ChatDetailContainer.isCreateRoom = true;
            }
        };
        this.createRoom = function (id, typeMsg) {
            api_helper_1.processRequestRespository(chat_detail_services_1.default.getInstance().createRomChat(id), function (res) {
                return _this.createRoomSuccess(res, typeMsg);
            });
        };
        this.createRoomSuccess = function (res, typeMsg) {
            if (res && res.chatId) {
                // this.getListMessage(res.chatId);
                _this.ChatDetailContainer.roomId = res.chatId;
                _this.ChatDetailContainer.isCreateRoom = false;
                _this.sendMessage(_this.ChatDetailContainer.firstMessage, res.chatId, typeMsg);
            }
        };
        this.appendMessage = function (msg) {
            console.log('test_incoming_call_append_msg: ', msg, '__', _this.ChatDetailContainer.props.userInfo.user.id);
            switch (msg.type) {
                case message_1.KindOfMsg.TYPE_VIDEO_CALL_INCOMING:
                    break;
                default:
                    _this.ChatDetailContainer.setState(function (previousState) { return ({
                        // @ts-ignore
                        dataListMessage: react_native_gifted_chat_1.GiftedChat.append(previousState.dataListMessage, msg),
                    }); });
                    break;
            }
        };
        this.getListMessage = function (chatId) {
            api_helper_1.processRequestRespository(chat_detail_services_1.default.getInstance().getListMessage(chatId), _this.getListMessageSuccess);
        };
        this.getListMessageSuccess = function (res) {
            var userInfo = _this.ChatDetailContainer.props.userInfo;
            var arrMess = [];
            if (res.length > 0) {
                res.forEach(function (element) {
                    var _a, _b, _c, _d, _e, _f;
                    var mes = {};
                    var user = {};
                    user._id = (_a = element === null || element === void 0 ? void 0 : element.user) === null || _a === void 0 ? void 0 : _a.id;
                    user.username = (_b = element === null || element === void 0 ? void 0 : element.user) === null || _b === void 0 ? void 0 : _b.username;
                    user.avatar = 'https://placeimg.com/960/540/any';
                    mes._id = element === null || element === void 0 ? void 0 : element.id;
                    mes.createdAt = element === null || element === void 0 ? void 0 : element.createdAt;
                    mes.type = element === null || element === void 0 ? void 0 : element.type;
                    mes.path = element === null || element === void 0 ? void 0 : element.path;
                    mes.fileExtension = element === null || element === void 0 ? void 0 : element.fileExtension;
                    mes.reply = element === null || element === void 0 ? void 0 : element.replyMess;
                    mes.user = user;
                    mes.attachment = element === null || element === void 0 ? void 0 : element.attachment;
                    switch (mes.type) {
                        case message_1.KindOfMsg.TYPE_IMAGE:
                            mes.image = "http://172.16.40.43:9000/preview/+" + (element === null || element === void 0 ? void 0 : element.path);
                            mes.text = '';
                            break;
                        case message_1.KindOfMsg.TYPE_VIDEO_CALL_INCOMING:
                            console.log('test_incoming_call: ', element, '__', (_d = (_c = _this.ChatDetailContainer.props.userInfo) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.id);
                            mes.text =
                                element.user.id === ((_f = (_e = _this.ChatDetailContainer.props.userInfo) === null || _e === void 0 ? void 0 : _e.user) === null || _f === void 0 ? void 0 : _f.id)
                                    ? languages_1.translate('videoCall.titleOutGoingCall')
                                    : languages_1.translate('videoCall.titleIncomingCall');
                            break;
                        default:
                            mes.text = element === null || element === void 0 ? void 0 : element.message;
                            break;
                    }
                    //Check header, footer
                    // let sameUserInPrevMessage = false;
                    // let sameDate = false;
                    // if (previousMessage) {
                    //   const d1 = currentMessage?.createdAt?.split('T')[0];
                    //   const d2 = previousMessage?.createdAt?.split('T')[0];
                    //   sameDate = d1 === d2;
                    //   previousMessage?.user?._id === currentMessage?.user?._id
                    //     ? (sameUserInPrevMessage = true)
                    //     : (sameUserInPrevMessage = false);
                    // }
                    console.log('test_mes_text: ', mes.text);
                    arrMess.push(mes);
                });
            }
            if (arrMess && arrMess.length < 1) {
                _this.ChatDetailContainer.setState({
                    showHi: true,
                });
            }
            _this.ChatDetailContainer.setState({
                dataListMessage: arrMess,
            });
        };
        this.checkSendMessage = function (newMessages, typeMsg) {
            if (newMessages === void 0) { newMessages = []; }
            if (typeMsg === void 0) { typeMsg = message_1.KindOfMsg.TYPE_TEXT; }
            var chatId = '';
            var chatInfo = _this.ChatDetailContainer.chatInfo;
            if (chatInfo && chatInfo.type === 'FORM_MESSAGE') {
                chatId = chatInfo.data && chatInfo.data.id;
                _this.sendMessage(newMessages, chatId, typeMsg);
            }
            if (chatInfo && chatInfo.type === 'FROM_USER') {
                var isCreateRoom = _this.ChatDetailContainer.isCreateRoom;
                if (!isCreateRoom) {
                    chatId = _this.ChatDetailContainer.roomId;
                    _this.sendMessage(newMessages, chatId, typeMsg);
                }
                if (isCreateRoom) {
                    var id = _this.ChatDetailContainer.chatInfo.data && _this.ChatDetailContainer.chatInfo.data.id;
                    _this.ChatDetailContainer.firstMessage = newMessages;
                    _this.createRoom(id, typeMsg);
                }
            }
        };
        this.sendMessage = function (newMessages, chatId, typeMsg) {
            if (newMessages === void 0) { newMessages = []; }
            var sendReplyId = '';
            // if (replyData && replyData.isReply) {
            //   sendReplyId = replyData.itemMessage && replyData.itemMessage._id;
            // }
            if (chatId) {
                // TODO
                // sendReplyId = this.ChatDetailContainer.state.currentMessage?._id || '';
                // const postData = {
                //   chatId: ,
                //   message: newMessages[0].text,
                //   replyId: sendReplyId,
                //   type: typeMsg,
                // };
                var postData = {
                    chatRoomId: chatId,
                    message: newMessages[0].text,
                    messageStatus: '1',
                    messageType: '1',
                    user: { userName: 'Test 1', status: '1' },
                    userId: '7JBbXOtJhieqbSpq0k00103E',
                };
                console.log('test_param: ', postData);
                console.log('test_param: ', _this.ChatDetailContainer.state.currentMessage);
                api_helper_1.processRequestRespository(chat_detail_services_1.default.getInstance().insertMessage(postData), function () { return _this.sendMessageSuccess(newMessages[0]); }, undefined, false, false);
                _this.onCloseReply();
            }
        };
        this.onCloseReply = function () {
            // const reply = {
            //   itemMessage: undefined,
            //   isReply: false,
            // };
            // dispatch(changeReplyMessage(reply));
        };
        this.sendMessageSuccess = function (msg) {
            var currentMessage = _this.ChatDetailContainer.state.currentMessage;
            currentMessage && _this.closePopup();
            // this.appendMessage(msg);
        };
        // Send Files
        this.sendFile = function () { };
        // Answer, edit, copy, remove
        this.onAnswer = function () {
            _this.closePopup();
            _this.ChatDetailContainer.setState({
                currentMessage: _this.tmpMessage,
            });
        };
        this.onEdit = function () {
            _this.closePopup();
        };
        this.onCopy = function () {
            var _a;
            react_native_1.Clipboard.setString((_a = _this.tmpMessage) === null || _a === void 0 ? void 0 : _a.text);
            _this.closePopup();
        };
        this.onHideFooter = function () {
            _this.closePopup();
        };
        this.onRemove = function () {
            console.log('test_onRemove');
            _this.closePopup();
            _this.onDeleteMessage(_this.tmpMessage);
        };
        this.closePopup = function () {
            var _a, _b;
            (_b = (_a = _this.ChatDetailContainer.refChatActionsComponent.current) === null || _a === void 0 ? void 0 : _a.refModalChatActions.current) === null || _b === void 0 ? void 0 : _b.close();
            _this.ChatDetailContainer.setState({
                currentMessage: null,
            });
        };
        this.ChatDetailContainer = container;
    }
    // Messages
    ChatDetailAdapter.prototype.onDeleteMessage = function (msg) {
        var _this = this;
        var _a;
        console.log('test_delete_msg: ', msg);
        var params = {
            msgId: msg === null || msg === void 0 ? void 0 : msg._id,
            senderId: (_a = msg.user) === null || _a === void 0 ? void 0 : _a._id,
            chatId: this.ChatDetailContainer.roomId,
        };
        api_helper_1.processRequestRespository(chat_detail_services_1.default.getInstance().removeMessage(params), function (rs) {
            return _this.onDeleteMessageSuccess(rs, msg);
        });
    };
    return ChatDetailAdapter;
}());
exports.ChatDetailAdapter = ChatDetailAdapter;
