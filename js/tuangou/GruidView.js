import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, View, Image, Text} from 'react-native';

const {height, width} = Dimensions.get('window');
//轮播图下边的四个框
const hotData = [
    {
        name: '免费拍',
        detailed: '婚照写真',
        color:'#FF9800',
        imag: 'http://images.meishij.net/p/20170330/dacf1e18c99c4fe2f056f0c8f3aacbce_180x180.jpg'
    },
    {
        name: '大片特惠',
        detailed: '速度与激情8',
        color:'#F78B9A',
        imag: 'http://images.meishij.net/p/20110822/6a89f9eeb6eeec4427e5807b4ed0cb02_180x180.jpg'
    },
    {
        name: '特价日',
        detailed: '跟团游清仓',
        color:'#7EC50E',
        imag: 'http://images.meishij.net/p/20170330/cbe31e4ef6176df562054b6b5297ca50_180x180.jpg'
    },
    {
        name: '今日推荐',
        detailed: '品质生活',
        color:'#46C9B9',
        imag: 'http://images.meishij.net/p/20170330/41f12e50219c6afdc4735e336a99f16f_180x180.jpg'
    },
]

export default class GruidView extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        let list = [];
        for (let i = 0; i < 4; i++) {
            list.push(
                <GruidViewItem name={hotData[i].name} detailed={hotData[i].detailed} imag={hotData[i].imag} color={hotData[i].color} key={i}/>
            )
        }
        return (
            <View style={styles.view}>
                <View style={{height: 10, backgroundColor: '#EFEFEF'}}/>
                <View style={styles.itemView}>
                    {list}
                </View>
                <View style={{height: 10, backgroundColor: '#EFEFEF'}}/>
            </View>
        )
    }
}


type Props = {
    name: String,
    detailed: String,
    imag: any,
    color:any,
}

class GruidViewItem extends Component<Props> {

    constructor(props) {
        super(props);

    }

    render() {
        let {name, detailed, imag, color} = this.props
        return (
            <View style={styles.itemTab}>
                <View style={styles.flex}>
                    <Text style={[styles.text,{color:color}]}>{name}</Text>
                    <Text style={styles.text}>{detailed}</Text>
                </View>
                <Image style={styles.imag}
                       roundAsCircle={true}
                       source={{uri: imag}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        width: width,
        height: 220,
        backgroundColor: '#EFEFEF',
        // borderBottomColor: '#000000',
        // borderBottomWidth: StyleSheet.hairlineWidth,
    },
    itemView: {
        width: width,
        height: 200,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemTab: {
        width: width * 0.5-2,
        height: 99,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        margin: 1,
        alignItems: 'center'
    },
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        textAlign: 'center',
    },
    imag: {
        width: width * 0.2-4,
        height: width * 0.2-4,
        overflow:'hidden',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        marginRight: 15,
    },
    text:{
        flex:1,
        alignItems: 'center',
        height:50,
        marginTop: 15,

    }
})