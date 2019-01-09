import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import Header from './Header'

/**
 * 我的
 *
 * */


export default class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <ScrollView>
                <View style={styles.view}>
                    <Header/>
                    <View style={{height: 10, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'我的钱包'} img={require('../imag/wode/qianbao.png')} deteil={'办信用卡'}/>
                    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'余额'} img={require('../imag/wode/yue.png')} deteil={'10006.5'}/>
                    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'抵用卷'} img={require('../imag/wode/youhuijuan.png')} deteil={'64个'}/>
                    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'会员卡'} img={require('../imag/wode/vip.png')} deteil={'2张'}/>

                    <View style={{height: 10, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'好有去哪'} img={require('../imag/wode/haoyou.png')} deteil={''}/>
                    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'我的评价'} img={require('../imag/wode/pingjia.png')} deteil={''}/>
                    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'我的收藏'} img={require('../imag/wode/shouchang.png')} deteil={''}/>
                    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'会员中心'} img={require('../imag/wode/huiyuanzhongxin.png')} deteil={'￥15'}/>
                    <View style={{height: 0.5, backgroundColor: '#e0e0e0'}}/>
                    <WodeItem title={'积分商城'} img={require('../imag/wode/jifen.png')} deteil={'好礼已上线'}/>
                    <View style={{height: 20, backgroundColor: '#e0e0e0'}}/>
                </View>
            </ScrollView>
        );
    }

}


type Props = {
    img: String,
    title: String,
    deteil: String,
}

class WodeItem extends Component<Props> {

    constructor(props) {
        super(props);

    }

    render() {
        let {img, title, deteil} = this.props;
        return (
            <View style={styles.itemView}>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{width: 25, height: 25, marginLeft: 10, marginRight: 10}}
                           source={img}/>
                    <Text style={{fontWeight: "bold"}}>{title}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text>{deteil}</Text>
                    <Image style={{width: 20, height: 20, marginLeft: 10, marginRight: 10}}
                           source={require('../imag/wode/xiangyou.png')}/>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#e0e0e0'
    },
    itemView: {
        backgroundColor: '#FFFFFF',
        height: 51,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    }
})