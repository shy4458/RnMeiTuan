import React, {Component} from 'react';
import {View} from 'react-native';

export default class Thislocation extends Component {

    static navigationOptions = {
        title: '我的位置',
    };

    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{flex: 1,backgroundColor:'#123123'}}></View>
        )
    }
}