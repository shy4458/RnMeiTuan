import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Header extends Component {

    render() {
        return (

            <View style={styles.view}>

                <View style={styles.viewTop}>
                    <Image
                        style={styles.image}
                        source={require('../imag/wode/seting.png')}/>
                    <Image
                        style={styles.image2}
                        source={require('../imag/wode/lingdang.png')}/>
                </View>

                <View style={{flexDirection: 'row',}}>

                    <Image style={styles.image3}
                           source={require('../imag/wode/touxiang.png')}/>

                    <View style={{justifyContent:'space-evenly',marginLeft: 20}}>

                        <View style={{flexDirection: 'row'}}>

                            <Text style={{color:'#FFFFFF'}}>兔兔</Text>
                            <Image style={{height: 15, width: 15,}}
                                   source={require('../imag/wode/zuanshi.png')}/>
                        </View>
                        <Text style={{color:'#FFFFFF'}}>个人信息 ></Text>

                    </View>

                </View>


            </View>

        );
    }

}

const styles = StyleSheet.create({

    view: {
        backgroundColor: '#8a55ff',
        height: 150,
    },
    viewTop: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'flex-end',
    },

    viewButtom: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    image: {
        height: 40,
        width: 40,
    },
    image2: {
        height: 30,
        width: 30,
        marginTop: 5,
        marginRight: 10,
    },
    image3: {
        height: 60,
        width: 60,
        margin: 10,
        marginLeft: 20
    }


})