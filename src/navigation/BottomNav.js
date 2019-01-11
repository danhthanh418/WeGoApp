import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Tour from '../components/Tour';
import CamNang from '../components/CamNang';
import GioiThieu from '../components/GioiThieu';
import ChiTietTour from '../components/ChiTietTour';


const TabNavigator = createBottomTabNavigator ({
  Tour: Tour,
  CamNang:CamNang,
  GioiThieu: GioiThieu,
//   ChiTiet:ChiTietTour
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Tour') {
                iconName = `paper-plane`;
            } else if (routeName === 'CamNang') {
                iconName = `attachment`;
            } else {
                iconName = `info-with-circle`
            }
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Entypo name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
    },
}
);

const BottomNav = createAppContainer (TabNavigator);
export default BottomNav