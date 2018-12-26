/** @format */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';


const {height, width} = Dimensions.get('window');
export default class Header extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.textView}>订单</Text>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    view: {
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textView: {

        fontSize: 20,
        color: '#000000',
    },
    textInPut: {
        width: width * 0.6,
        height: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#FFFFFF'
    }

});