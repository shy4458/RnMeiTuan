/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createAppContainer, createStackNavigator} from "react-navigation";

import FuJinView from './fujin/FuJinView';
import DingDanView from './dingdan/DingDanView';
import My from './wode/WoDeView';
import TuanGouView from './tuangou/TuanGouView';
import Detialed from './Detialed'


const MateriaTab = createMaterialBottomTabNavigator(
    {
        首页: {
            screen: TuanGouView,
        },
        分类: {screen: FuJinView},
        发现: {screen: DingDanView},
        我的: {screen: My},
    }, {
        activeColor: '#000000',
        inactiveColor: '#000000',
        barStyle: {backgroundColor: '#ffffff'},
    });
const titleArr = ['首页', '分类', '发现', '我的'];
const AppNavigator = createStackNavigator({

        MateriaTab: {
            screen: MateriaTab,
            navigationOptions: ({navigation})=> ({
                title: titleArr[navigation.state.index],
                header:null, //当前也不显示导航头
            }),
        },
        Detialed: {
            screen: Detialed,
        },
    },
    {
        initialRouteName: "MateriaTab",
        headerLayoutPreset: 'center',
    }
);

export default createAppContainer(AppNavigator)
