import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import fenl from './Fenl';

/**
 * 首页
 *
 * */

export default class Home extends Component {


    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../js/imag/home_s.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../js/imag/home_n.png')}/>
            );
        },
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
        return (
            <View style={styles.container}>
                <Button
                    title={'刷新'}
                    onPress={() => {
                        this.setState({
                            ss: 2
                        })
                    }}></Button>

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
