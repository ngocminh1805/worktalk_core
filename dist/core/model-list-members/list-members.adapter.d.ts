import { User2 } from 'core/common/types/user';
import { ListMembersProps } from './list-members.props';
declare function ListMembersAdapter(props: ListMembersProps): {
    page: number;
    ITEM_PAGE: number;
    dataSearchUser: any[];
    loading: boolean;
    txt: string;
    onRefresh: () => void;
    onEndReached: () => void;
    setTxtSearch: (txt: string) => void;
    searchUser: () => void;
    searchUserSuccess: (res: User2[]) => void;
};
export default ListMembersAdapter;
