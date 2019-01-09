import React, {Component} from 'react';
import {Alert, Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import data from './data'

const {height, width} = Dimensions.get('window');


export default class Detialed extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        // const {width} = Dimensions.get('window');
        // const {navigation} = this.props;
        // const index = navigation.getParam('index', 'NO-ID');
        // const name = navigation.getParam('name', 'some default value');
        // const img = navigation.getParam('img', 'IMG');
        return (
            <View>
                <ScrollView>
                    <TranslationDetialed name={data.name} imag={data.imag} endEnter={data.endEnter}
                                         detailed={data.detailed}
                                         score={data.score} comments={data.comments} ranking={data.ranking}
                                         address={data.address} notice={data.notice.title}></TranslationDetialed>
                    <Text style={{backgroundColor:'#DDDDDD',height:8,marginTop:-18}}/>
                </ScrollView>
            </View>
        )
    }
}
//第一部分，图片，名字，位置，评分，
/**"name":"北京欢乐谷（4A）",
 "imag":"http://p0.meituan.net/hotel/0c97b8dd9ed0374d81cda5962f193523171427.jpg@660w_500h_1e_1c",
 "endEnter":"19:30",
 "detailed":"新北京十六景之一,尽享刺激得乐园",
 "score":"5.0",
 "comments":"16.2万+评论>",
 "ranking":"北京情侣约会必去地【第一名】",
 "address":"北京市朝阳区东四环小武基北路四方桥东南角",
 "notice":{
		"title":"景区设备开放重要提醒",
		"content":"666",
	},
 */
type Props = {
    name: String,
    imag: String,
    endEnter: String,
    detailed: String,
    score: String,
    comments: String,
    ranking: String,
    address: String,
    notice: Object
}

class TranslationDetialed extends Component<Props> {

    render() {
        let {name, imag, endEnter, detailed, score, comments, ranking, address, notice} = this.props;
        return (
            <View style={styles.TranslationDetialedV}>
                <Image style={{height: height * 0.2, width: width}}
                       source={{uri: imag}}></Image>
                <View style={styles.DetialedV}>
                    <View style={{
                        flex: 4,
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{marginTop:10}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>{name}</Text>
                            <Text style={{fontSize: 12, color: '#4788BD',marginTop:8}}>{endEnter}</Text>
                            <Text style={{fontSize: 14, color: '#A6A6A7',marginTop:8}}>{detailed}</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#F3A75A',marginTop:8}}>{score + '分'}</Text>
                            <Text style={{fontSize: 12, color: '#F3A75A',marginTop:8}}>{comments}</Text>
                            <Wuxing score={score}/>
                        </View>


                    </View>
                    <Text style={{height: 0.5, backgroundColor: '#DDDDDD'}}/>
                    <View style={{flex: 1.82, backgroundColor: '#FFFFFF',justifyContent:'center'}}>
                        <DetialedDet img={require('../imag/Detialed/bang.png')} title={ranking}
                                     deteil={"NEW"}/>
                    </View>
                    <Text style={{height: 0.5, backgroundColor: '#DDDDDD'}}/>
                    <View style={{flex: 1.82, backgroundColor: '#FFFFFF',justifyContent:'center'}}>
                        <DetialedDet img={require('../imag/Detialed/dingwei.png')} title={address}
                                     deteil={"地图"} />
                    </View>
                    <Text style={{height: 0.5, backgroundColor: '#DDDDDD'}}/>
                    <View style={{flex: 1.82, backgroundColor: '#FFFFFF',justifyContent:'center'}}>
                        <DetialedDet img={require('../imag/Detialed/laba.png')} title={notice}
                                     deteil={""}/>
                    </View>
                </View>
            </View>
        )

    }
}

type Props = {
    score: String,
}

//五角星评分
class Wuxing extends Component<Props> {
    render() {
        let {score} = this.props;
        let xingList = [];
        let bot = Math.floor(score);
        let top = Math.ceil(score);
        for (let i = 1; i < 6; i++) {
            if (i <= bot) {
                xingList.push(
                    <Image style={{height: 12, width: 12, marginLeft: 5}} key={i}
                           source={require('../imag/Detialed/man.png')}/>
                )
            } else if (i == top) {
                xingList.push(
                    <Image style={{height: 12, width: 12, marginLeft: 5}} key={i}
                           source={require('../imag/Detialed/ban.png')}/>
                )
            } else {
                xingList.push(
                    <Image style={{height: 12, width: 12, marginLeft: 5}} key={i}
                           source={require('../imag/Detialed/kong.png')}/>
                )
            }
        }
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 3,
                marginRight: 2
            }}>{xingList}</View>
        )
    }
}

//
type Props = {
    img: String,
    title: String,
    deteil: String,
}

class DetialedDet extends Component<Props> {

    constructor(props) {
        super(props);

    }

    render() {
        let {img, title, deteil} = this.props;
        return (
            <View style={{
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{width: 15, height: 15, marginRight: 10}}
                           source={img}/>
                    <Text style={{fontWeight: "bold"}}>{title}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text>{deteil}</Text>
                    <Image style={{width: 15, height: 15, marginLeft: 10, marginRight: 10}}
                           source={require('../imag/wode/xiangyou.png')}/>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    TranslationDetialedV: {
        height: height * 0.6,
    },
    DetialedV: {
        width: width,
        height: height * 0.4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#ffffff',
        marginTop: -16,
        padding: 10,
        flexDirection: 'column',
    },
});
