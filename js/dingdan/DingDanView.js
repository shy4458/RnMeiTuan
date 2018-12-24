import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

/**
 * 发现
 *
 * */

export default class DingDanView extends Component {

    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon}
                           source={require('../imag/fax_s.png')}></Image>
                );
            }
            return (
                <Image style={styles.tabBarIcon}
                       source={require('../imag/fax_n.png')}></Image>
            );
        },

        tabBarColor:'#2fff81',
        headerTitle: '发现',//对页面的配置
        tabBarLabel: '发现',
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ffffff'}}>
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