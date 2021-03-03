import { User2 } from '../../../../../core/common/types/user';
export interface LoginFormWvProps {
    loginMobile: (data: LoginMobileRequest) => void;
}
export interface LoginMobileRequest {
    email: string;
    password: string;
}
export interface LoginMobileRequestCas {
    username: string;
    password: string;
}
export interface LoginMobileResponse {
    user: User2;
    token: string;
}
export interface SyncUserIHCMeRequest {
    user: User2;
}
export interface UpdateDeviceRequest {
    user: User2;
}
