/** @format */
import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableNativeFeedback, View} from 'react-native';

const {height, width} = Dimensions.get('window');


type Props = {
    city: "city"
}

export default class Header extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        let {city} = this.props;
        return (
            <View style={styles.view}>
                <TouchableNativeFeedback onPress={() => this.props.navigate('Thislocation', {thisCity: city})}>
                    <Text style={styles.textView}>{city}</Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.props.navigate('Search',)}>
                <Text style={styles.textInPut}
                    // inlineImageLeft='serch'
                           multiline={true}>北京烤鸭</Text>
                </TouchableNativeFeedback>
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
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 8
    }

});
