import { User2 } from 'core/common/types/user';
import { NewMessageProps } from './new-message.props';
declare function NewMessageAdapter(props: NewMessageProps): {
    page: number;
    ITEM_PAGE: number;
    dataSearchUser: any;
    loading: any;
    txt: any;
    onRefresh: () => void;
    searchUserSuccess: (res: User2[]) => void;
    setTxtSearch: (txt: string) => void;
    onEndReached: () => void;
    searchUser: () => void;
};
export default NewMessageAdapter;
