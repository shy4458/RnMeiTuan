import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

/**
 * 分类
 *
 * */

export default class Fenl extends Component {

    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon}
                           source={require('../js/imag/fenl_s.png')}></Image>
                );
            }
            return (
                <Image style={styles.tabBarIcon}
                       source={require('../js/imag/fenl_n.png')}></Image>
            )
        }
    };
    constructor(props){
        super(props);
        this.state={
            ss:0
        }
    }
    componentWillMount() {
        console.log("logFenl+componentWillMount")
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#0cff00'}}>
            </View>
        );
    }
    componentDidMount() {
        console.log("logFenl+componentDidMount")
    }

    componentWillReceiveProps(nextProps) {
        console.log("logFenl+componentWillReceiveProps")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("logFenl+shouldComponentUpdate")
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("logFenl+componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("logFenl+componentDidUpdate")

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
