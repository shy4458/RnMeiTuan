import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class TopNavigationItem extends Component{

    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon}
                           source={require('../imag/home_s.png')}></Image>
                );
            }
            return (
                <Image style={styles.tabBarIcon}
                       source={require('../imag/home_n.png')}></Image>
            )
        },

        tabBarColor:'#00f9ff',
        headerTitle: '团购',//对页面的配置
        tabBarLabel: '团购',
    };

    render(){
        return(
            <View></View>
        )
    }
}