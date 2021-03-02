/* 
    Created by longdq
*/

import { LoginMobileResponse } from 'features/login-old/view/components/login-form-wv/login-form-wv.props';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

export interface ProfileProps {
  userInfo: LoginMobileResponse;
  removeUserInfoAction: () => void;
  navigation : NavigationScreenProp<NavigationState, NavigationParams>
}
