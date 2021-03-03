export default class CreateGroupServices {
    private static instance;
    static getInstance(): CreateGroupServices;
    searchUser: (text: string, limit: number, page: number) => any;
    onCreateGr: (data: any) => any;
}
