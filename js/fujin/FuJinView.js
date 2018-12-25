import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Header from './Header'
import TopNavigationItem from './TopNavigationItem'
import TopNavigationItem2 from './TopNavigationItem2'
import TopNavigationItem3 from './TopNavigationItem3'
import TopNavigationItem4 from './TopNavigationItem4'
import {createMaterialTopTabNavigator} from 'react-navigation';

/**
 * 分类
 *
 * */

export default class FuJinView extends Component {

    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon}
                           source={require('../imag/fenl_s.png')}></Image>
                );
            }
            return (
                <Image style={styles.tabBarIcon}
                       source={require('../imag/fenl_n.png')}></Image>
            )
        },

        tabBarColor: '#ffb92e',
        headerTitle: '附近',//对页面的配置
        tabBarLabel: '附近',
    };

    render() {
        return (
            <View>
                <Header/>

            </View>
        );
    }
}



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

