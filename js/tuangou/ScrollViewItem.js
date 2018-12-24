import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, View} from "react-native";
import {Text} from "react-native-paper";

const {height, width} = Dimensions.get('window');

type Props = {
    name: String,
    img: String,
}

export default class ScrollViewItem extends Component<Props> {

    constructor(props) {
        super(props);

    }

    render() {
        let {name, img} = this.props
        return (
            <View style={styles.itemView}>
                <Image style={styles.itemImage}
                       source={img}
                />
                <Text>{name}</Text>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    itemView: {
        width: width * 0.2,
        height: width * 0.2,
        backgroundColor: '#FFFFFF',
        justifyContent:'center',
        alignItems: 'center',
    },
    itemImage: {
        width: 30,
        height: 30,
    }
})