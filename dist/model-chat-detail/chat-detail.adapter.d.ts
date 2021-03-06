import { IHyperMessage } from 'core/common/types/message';
import ChatDetailContainer from '../../features/chat-detail/view/chat-detail.screen';
export declare class ChatDetailAdapter {
    ChatDetailContainer: ChatDetailContainer;
    tmpMessage: IHyperMessage;
    constructor(container: ChatDetailContainer);
    goBack: () => void;
    sayHi: () => void;
    onDeleteMessage(msg: IHyperMessage): void;
    onDeleteMessageSuccess: (rs: any, msg: any) => void;
    showMessageActions: (context: any, message: any) => void;
    goToVideoCall: () => void;
    requestToUser: (id: string) => void;
    requestToUserSuccess: (res: any) => void;
    createRoom: (id: string, typeMsg: any) => void;
    createRoomSuccess: (res: any, typeMsg: any) => void;
    appendMessage: (msg: any) => void;
    getListMessage: (chatId: string) => void;
    getListMessageSuccess: (res: any[]) => void;
    checkSendMessage: (newMessages?: IHyperMessage[], typeMsg?: any) => void;
    sendMessage: (newMessages: any[] | undefined, chatId: string, typeMsg: any) => void;
    private onCloseReply;
    private sendMessageSuccess;
    sendFile: () => void;
    onAnswer: () => void;
    onEdit: () => void;
    onCopy: () => void;
    onHideFooter: () => void;
    onRemove: () => void;
    closePopup: () => void;
}
