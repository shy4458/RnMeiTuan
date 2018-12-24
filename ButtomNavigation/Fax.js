import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

/**
 * 发现
 *
 * */

export default class Fax extends Component {

    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon}
                           source={require('../js/imag/fax_s.png')}></Image>
                );
            }
            return (
                <Image style={styles.tabBarIcon}
                       source={require('../js/imag/fax_n.png')}></Image>
            );
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#0004ff'}}>
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