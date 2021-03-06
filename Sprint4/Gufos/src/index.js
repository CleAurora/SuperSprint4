import { createAppContainer } from 'react-navigation';

import { createBottomTabNavigator } from "react-navigation-tabs";

import MainScreem from './pages/main';
import ProfileScreen from './pages/profile';

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreem
    },
    Profile: {
        screen: ProfileScreen
    },
});

export default createAppContainer(MainNavigator)