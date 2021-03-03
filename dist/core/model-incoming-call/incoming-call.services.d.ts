export default class IncomingCallServices {
    private static instance;
    static getInstance(): IncomingCallServices;
    updateStatusVideoCall: (data: any) => any;
}
