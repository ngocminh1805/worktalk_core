export default class AddMembersServices {
    private static instance;
    static getInstance(): AddMembersServices;
    searchUser: (text: string, limit: number, page: number) => any;
    addMembers: (data: any) => any;
}
