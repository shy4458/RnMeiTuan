import React, {Component} from "react";
import {Text, View, StyleSheet, Image, TouchableNativeFeedback, TextInput, Dimensions} from "react-native";
import TheFlow from './TheFlowView'

const {height, width} = Dimensions.get('window');

/**
 * 团购搜索
 */

export default class Search extends Component {
    render() {
        return (
            <View>
                <Header/>
                <Text style={{margin:5,marginTop:5}}>热门搜索</Text>
                <TheFlow/>
            </View>
        )
    }
}


class Header extends Component {

    render() {
        return (
            <View style={styles.headerView}>
                <Image style={{height:30,width:30}}
                source={require('../imag/tuangou/back.png')}></Image>
                <TouchableNativeFeedback onPress={() => this.props.navigate('',)}>
                    <TextInput style={styles.textInPut}
                          multiline={true}>北京烤鸭</TextInput>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.props.navigate('',)}>
                    <Text style={{fontSize:16}}>搜索</Text>
                </TouchableNativeFeedback>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {


    },
    headerView:{
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textInPut: {
        width: width * 0.7125,
        height: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#eeeeee',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 8,
        alignItems: 'center'
    }
})