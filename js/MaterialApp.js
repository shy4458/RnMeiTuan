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
import {Image, StyleSheet} from "react-native";


const MateriaTab = createMaterialBottomTabNavigator(
    {
        团购: {
            screen: TuanGouView,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    focused == true ? <Image style={styles.tabBarIcon}
                                             source={require('./imag/home_s.png')}></Image> :
                        <Image style={styles.tabBarIcon}
                               source={require('./imag/home_n.png')}></Image>
                ),
                tabBarColor: '#00f9ff',
                headerTitle: '团购',//对页面的配置
                tabBarLabel: '团购',
            }),
        },
        附近: {
            screen: FuJinView,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    focused == true ? <Image style={styles.tabBarIcon}
                                             source={require('./imag/fenl_s.png')}></Image> :
                        <Image style={styles.tabBarIcon}
                               source={require('./imag/fenl_n.png')}></Image>
                ),
                tabBarColor: '#ffb92e',
                headerTitle: '附近',//对页面的配置
                tabBarLabel: '附近',
            }),

        },
        订单: {
            screen: DingDanView,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    focused == true ? <Image style={styles.tabBarIcon}
                                             source={require('./imag/fax_s.png')}></Image> :
                        <Image style={styles.tabBarIcon}
                               source={require('./imag/fax_n.png')}></Image>
                ),
                tabBarColor: '#2fff81',
                headerTitle: '订单',//对页面的配置
                tabBarLabel: '订单',
            }),
        },
        我的: {screen: My,
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    focused == true ? <Image style={styles.tabBarIcon}
                                             source={require('./imag/my_s.png')}></Image> :
                        <Image style={styles.tabBarIcon}
                               source={require('./imag/my_n.png')}></Image>
                ),
                tabBarColor:'#8a55ff',
                headerTitle: '我的',//对页面的配置
                tabBarLabel: '我的',
            }),},
    }, {
        initialRouteName: '附近',
        activeColor: '#000000',
        inactiveColor: '#000000',
        barStyle: {backgroundColor: '#ffffff'},
    });
const titleArr = ['团购', '附近', '订单', '我的'];
const AppNavigator = createStackNavigator({

        MateriaTab: {
            screen: MateriaTab,
            navigationOptions: ({navigation}) => ({
                title: titleArr[navigation.state.index],
                header: null, //当前也不显示导航头
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});
export default createAppContainer(AppNavigator)
