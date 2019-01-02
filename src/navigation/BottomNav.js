import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Home from '../components/Home';
import Settings from '../components/Settings';
import Search from '../components/Search';
import Detail from '../components/Detail';

const TabNavigator = createBottomTabNavigator ({
  Home: Home,
  Search:Search,
  Detail:Detail,
  Settings: Settings,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-home`;
            } else if (routeName === 'Settings') {
                iconName = `ios-settings`;
            } else if (routeName === 'Search') {
                iconName = `ios-search`;
            } else {
                iconName = `ios-information-circle`
            }
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
}
);

const BottomNav = createAppContainer (TabNavigator);
export default BottomNav