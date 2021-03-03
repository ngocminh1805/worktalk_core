export default class ListUserChatServices {
    private static instance;
    static getInstance(): ListUserChatServices;
    getListUser: () => any;
    getRoomChat: (userId: number, limit: number, page: number) => any;
}
