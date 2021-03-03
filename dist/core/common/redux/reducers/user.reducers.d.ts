import { LoginMobileResponse } from '../../types/login';
interface UserState {
    userInfo: LoginMobileResponse;
}
interface UserAction {
    type: string;
    payload: LoginMobileResponse;
}
export declare const userReducers: (state: UserState | undefined, action: UserAction) => UserState;
export {};
