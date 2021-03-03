/// <reference types="react" />
import { User2 } from 'core/common/types/user';
import { itemDataCheck } from '../common/types/item-data';
import { CreateGroupProps } from './create-group.props';
declare function CreateGroupAdapter(props: CreateGroupProps): {
    page: number;
    ITEM_PAGE: number;
    dataSearchUser: any[];
    loading: boolean;
    txt: string;
    dataUserCheck: itemDataCheck[];
    emptyNameGr: boolean;
    setEmptyNameGr: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    nameGr: string;
    setNameGr: import("react").Dispatch<import("react").SetStateAction<string>>;
    onRefresh: () => void;
    onEndReached: () => void;
    setTxtSearch: (txt: string) => void;
    searchUserSuccess: (res: User2[]) => void;
    searchUser: () => void;
    setSateDataCheck: (data: itemDataCheck[]) => void;
    addToDataCheck: (item: itemDataCheck) => void;
    removeUserCheck: (item: itemDataCheck) => void;
    onChangeText: (txt: string) => void;
};
export default CreateGroupAdapter;
