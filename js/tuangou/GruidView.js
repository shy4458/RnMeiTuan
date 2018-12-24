import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, View, Image, Text} from 'react-native';

const {height, width} = Dimensions.get('window');


export default class GruidView extends Component {

    constructor(props) {
        super(props);

    }

    render() {


        return (
            <View style={styles.view}>
                <View style={{height: 10, backgroundColor: '#EFEFEF'}}/>
                <View style={styles.itemView}>


                    <GruidView/>
                    <GruidView/>
                    <GruidView/>
                    <GruidView/>


                </View>
                <View style={{height: 10, backgroundColor: '#EFEFEF'}}/>
            </View>
        )
    }

}

class GruidViewItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.itemTab}>

                <Text>'666'</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    view:{
        width:width,
        height:200,
    },
    itemView: {
        width: width,
        height: 200,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemTab: {
        width: width * 0.5,
        height: 100,
    }
})