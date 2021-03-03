export default class ProfileGroupServices {
    private static instance;
    static getInstance(): ProfileGroupServices;
    getInfoChat: (chatId: string) => any;
    removeUserGr: (userId: string, chatId: string) => any;
}
