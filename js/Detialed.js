import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

export default class Detialed extends Component {

    static navigationOptions = {
        title: '详细信息',
    };

    constructor(props) {
        super(props);

    }

    render() {
        const {width} = Dimensions.get('window');
        const {navigation} = this.props;
        const index = navigation.getParam('index', 'NO-ID');
        const name = navigation.getParam('name', 'some default value');
        const img = navigation.getParam('img', 'IMG');
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image style={{width: width, height: width,}}
                       source={{uri: img}}/>

                <View style={{justifyContent: 'center'}}>
                    <Text style={styles.textV}>{name}</Text>
                    <Text style={styles.textV}>商品Id：{index}</Text>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textV:{
        fontSize:20,
        marginTop:40,
        fontWeight: 'bold',
    }
});
