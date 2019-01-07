import {Component} from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import React from "react";


export default class TheFlowView extends Component {

    render() {
        let FlowItemList = [];
        for (let i = 0; i < data.length; i++) {
            FlowItemList.push(
                <FlowItem key={i} type={data[i].type} text={data[i].text}/>
            )
        }
        return (
            <View style={{flexWrap: 'wrap', flexDirection: 'row',}}>
                {FlowItemList}
            </View>
        )
    }

}

type Props = {
    type: type,
    text: text,
}

class FlowItem extends Component<Props> {
    render() {
        let {type, text} = this.props
        return (
            <View style={styles.itemView}>

                {type ? <Image style={{height: 20, width: 20,marginLeft:5}}
                               source={require('../imag/tuangou/motuoche.png')}/> : <View></View>}
                <Text style={{marginLeft:5,marginRight:5}}>{text}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    itemView: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 40,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        margin: 4,
        alignItems: 'center',

    }
})


const data = [
    {type: true, text: "世纪华联超市"},
    {type: false, text: "爱射箭俱乐部"},
    {type: true, text: "张亮麻辣烫"},
    {type: true, text: "付师傅过桥米线"},
    {type: false, text: "静之湖滑雪场"},
    {type: false, text: "自助火锅"},
    {type: true, text: "新隆嘉超市 府学路店"},
]