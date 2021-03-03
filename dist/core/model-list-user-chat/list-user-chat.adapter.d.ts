/// <reference types="react" />
import { ListChatModel, ListUserChatProps } from './list-user-chat.props';
declare function ListUserChatAdapter(props: ListUserChatProps): {
    isLoading: boolean;
    page: number;
    ITEM_PAGE: number;
    setIsLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    dataListUser: any[] | undefined;
    dataListChat: ListChatModel[];
    onRefresh: () => void;
    onEndReached: () => void;
};
export default ListUserChatAdapter;
