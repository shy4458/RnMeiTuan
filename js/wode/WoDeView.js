import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import fenl from '../fujin/FuJinView';

/**
 * 首页
 *
 * */

export default class Home extends Component {


    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../imag/my_s.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../imag/my_n.png')}/>
            );
        },

        tabBarColor:'#8a55ff',
        headerTitle: '我的',//对页面的配置
        tabBarLabel: '我的',
    }

    constructor(props) {
        super(props);
        console.log("logHome+constructor")
        this.state = {
            ss: 1
        }
    }

    componentWillMount() {
        console.log("logHome+componentWillMount")
    }

    render() {
        console.log("logHome+render")
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>

            </View>
        );
    }

    componentDidMount() {
        console.log("logHome+componentDidMount")
    }

    componentWillReceiveProps(nextProps) {
        console.log("logHome+componentWillReceiveProps")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("logHome+shouldComponentUpdate")
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("logHome+componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("logHome+componentDidUpdate")

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
