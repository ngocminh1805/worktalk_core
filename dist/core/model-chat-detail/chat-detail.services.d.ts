import { RemoveMessageParams } from './chat-detail.props';
export default class ChatDetailServices {
    private static instance;
    static getInstance(): ChatDetailServices;
    getListMessage: (chatId: string) => any;
    insertMessage: (data: any) => any;
    requestToUser: (id: string) => any;
    createRomChat: (id: string) => any;
    uploadFile: (data: any) => any;
    removeMessage: (data: RemoveMessageParams) => any;
}
