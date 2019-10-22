import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './screens';

const Router = createSwitchNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export default createAppContainer(Router);
