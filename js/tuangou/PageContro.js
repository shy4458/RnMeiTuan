import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, View, Image} from 'react-native';

type Props = {
    contro:String,
}

export default class PageContro extends Component<Props>{

    constructor(props){
        super(props);

    }

    render(){
        let {contro} =this.props
        return(
            <View style={styles.view}>
                <Image style={styles.img}
                    source={contro == 0 ? require('../imag/tuangou/dian_s.png') : require('../imag/tuangou/dian_n.png')}/>
                <Image style={styles.img}
                       source={contro == 0 ? require('../imag/tuangou/dian_n.png') : require('../imag/tuangou/dian_s.png')}/>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    view:{
        height:15,
        backgroundColor:'#ffffff',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
    },
    img:{
        width:20,
        height: 20,
    }
})