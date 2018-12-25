/** @format */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export default class Header extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.imag}
                source={require('../imag/fujin/dingwei_n.png')}/>
                <Text style={styles.textView}>北京</Text>
                <TextInput style={styles.textInPut}
                           // inlineImageLeft='serch'
                           multiline={true}
                           placeholder="北京烤鸭"></TextInput>

            </View>
        )
    }

}
const styles = StyleSheet.create({
    view: {
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#ffb92e',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textView: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    textInPut: {
        width: width * 0.7,
        height: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#FFFFFF',
    },
    imag:{
        width:20,
        height:20,
    }
});