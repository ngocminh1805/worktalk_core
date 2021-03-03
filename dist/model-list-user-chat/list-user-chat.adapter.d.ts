import { ListUserChatProps } from './list-user-chat.props';
declare function ListUserChatAdapter(props: ListUserChatProps): {
    isLoading: any;
    page: number;
    ITEM_PAGE: number;
    setIsLoading: any;
    dataListUser: any;
    dataListChat: any;
    onRefresh: () => void;
    onEndReached: () => void;
};
export default ListUserChatAdapter;
