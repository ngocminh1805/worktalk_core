export default class ListMembersServices {
    private static instance;
    static getInstance(): ListMembersServices;
    searchUser: (text: string, limit: number, page: number) => any;
}
