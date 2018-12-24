/** @format */
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';


const {height, width} = Dimensions.get('window');
export default class Header extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.textView}>北京</Text>
                <TextInput style={styles.textInPut}
                           inlineImageLeft='serch'
                           multiline={true}
                           placeholder="北京烤鸭"></TextInput>
                <Image
                    source={require('../imag/lingdang_n.png')}
                    style={{width: 30, height: 30}}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    view: {
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#06C1AE',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textView: {
        fontSize: 20,
        color: '#FFFFFF',
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