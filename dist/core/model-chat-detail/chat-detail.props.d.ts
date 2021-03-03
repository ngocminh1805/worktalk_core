import { LoginMobileResponse } from '../../features/login-old/view/components/login-form-wv/login-form-wv.props';
export interface ChatDetailProps {
    userInfo: LoginMobileResponse;
}
export declare enum TypeParam {
    FORM_MESSAGE = "FORM_MESSAGE",
    FROM_USER = "FROM_USER"
}
export interface ChatInfoParams {
    data: any;
    type: TypeParam;
}
export interface RemoveMessageParams {
    msgId: string;
    senderId: string;
    chatId: string;
}
