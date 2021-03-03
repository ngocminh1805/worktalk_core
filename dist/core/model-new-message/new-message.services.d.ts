export default class NewMessageServices {
    private static instance;
    static getInstance(): NewMessageServices;
    searchUser: (text: string, limit: number, page: number) => any;
}
