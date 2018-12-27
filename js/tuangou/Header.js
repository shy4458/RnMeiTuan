/** @format */
import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableNativeFeedback, View} from 'react-native';
const {height, width} = Dimensions.get('window');


export default class Header extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableNativeFeedback onPress={() => this.props.navigate('Thislocation')}>
                <Text style={styles.textView}>北京</Text>
                </TouchableNativeFeedback>
                <TextInput style={styles.textInPut}
                           // inlineImageLeft='serch'
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
        backgroundColor: '#00f9ff',
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