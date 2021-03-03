/// <reference types="react" />
import { ProfileGroupProps } from './profile-group.props';
declare function ProfileGroupAdapter(props: ProfileGroupProps): {
    chatInfo: any;
    index: number;
    dataInfoGr: any;
    routes: Object;
    getInfo: () => void;
    goToChatDetail: () => void;
    removeUserGr: (item: any) => void;
    setIndex: import("react").Dispatch<import("react").SetStateAction<number>>;
};
export default ProfileGroupAdapter;
