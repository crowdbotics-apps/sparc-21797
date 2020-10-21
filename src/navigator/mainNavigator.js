import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList153938Navigator from '../features/NotificationList153938/navigator';
import Settings153937Navigator from '../features/Settings153937/navigator';
import Settings153929Navigator from '../features/Settings153929/navigator';
import UserProfile153927Navigator from '../features/UserProfile153927/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList153938: { screen: NotificationList153938Navigator },
Settings153937: { screen: Settings153937Navigator },
Settings153929: { screen: Settings153929Navigator },
UserProfile153927: { screen: UserProfile153927Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
