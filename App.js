/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Home from './ButtomNavigation/Home';
import Fenl from './ButtomNavigation/Fenl';
import Fax from './ButtomNavigation/Fax';

const Tabnavigation = createBottomTabNavigator(
    {
        Home: Home,
        Fenl: Fenl,
        Fax: Fax,
    },
    {
        /**defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'TuanGouView') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'FuJinView') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                } else if (routeName === 'DingDanView') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            }
        }),*/

        tabBarOptions: {
            activeTintColor: 'tomato', //活动tab颜色
            inactiveTintColor: 'gray',  //非活动tab颜色
            activeBackgroundColor:'#2e2e2e'
        },
    }
);


export default createAppContainer(Tabnavigation)
