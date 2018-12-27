import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, RefreshControl, FlatList, TouchableNativeFeedback} from 'react-native';
import Header from "./Header";
import FlatListHeader from "../tuangou/FlatListHeader";

/**
 * 发现
 *
 * */
const vData =[
    {name:'待付款',imag:require('../imag/dingdan/daifukuan.png')},
    {name:'待使用',imag:require('../imag/dingdan/daishiyong.png')},
    {name:'待评价',imag:require('../imag/dingdan/pingjia.png')},
    {name:'退款/售后',imag:require('../imag/dingdan/tuikuan.png')},
]
export default class DingDanView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowActivityIndicator: true,

            food: null,
            refreshing:false,
        }

    }


    componentDidMount() {
        this.fetchData();
    }

    render() {

        return (
            <View style={styles.container}>
                <Header/>
                <View style={{height: 1, backgroundColor: '#000000'}}></View>
                <FlatList
                    keyExtractor={(item, index) => (item.id)}
                    data={this.state.food}
                    renderItem={({item, index}) => this.renderItem(item, index)}
                    ItemSeparatorComponent={ItemDivideComponent}
                    ListHeaderComponent={CaidanViewHeader}
                    refreshControl={<RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />}
                />

            </View>
        );
    }
    renderItem(item, index) {
        return (
            <TouchableNativeFeedback onPress={this.onPressButton.bind(this, item, index)}>
                <View style={styles.itemView}>
                    <Image source={{uri: item.posters.original}}
                           style={{width: 90, height: 90, marginLeft: 15}}></Image>
                    <View style={styles.itemView2}>

                        <Text style={styles.flex}> 电影编号：{item.id} </Text>
                        <Text style={styles.flex}> 名称：{item.title} </Text>

                        <Text style={styles.flex}> 年份：{item.year} </Text>
                        <Text style={styles.flex}> 时长：{item.runtime} </Text>

                    </View>

                </View>
            </TouchableNativeFeedback>
        );
    }

    onPressButton(item, index) {
        this.props.navigation.navigate('Detialed', {
            index: index,
            name: item.title,
            img:item.posters.origina,
        })
    }

    fetchData() {
        fetch("https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json")
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    isShowActivityIndicator: false,
                    food: responseData.movies,
                    refreshing: false,
                });
            });
    }

}

class CaidanViewHeader extends Component{
    render(){
        let textOrImag = [];
        for (let i = 0; i < 4; i++) {

            textOrImag.push(
                <View style={styles.caidanItem} key={i}>

                    <Image style={styles.caidanimag}
                           source={vData[i].imag}/>
                    <Text>{vData[i].name}</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>


                <View style={styles.dingdan}>
                    <Text style={styles.dingdanText}>我的订单</Text>
                    <Text style={styles.dingdanText}>全部订单 ></Text>
                </View>
                <View style={{height: 0.5, backgroundColor: '#a7a7a7'}}></View>

                <View style={styles.caidanV}>{textOrImag}</View>
                <View style={{height: 10, backgroundColor: '#e0e0e0'}}></View>

                <View style={styles.dingdan}>
                    <Text style={styles.dingdanText}>我的收藏</Text>
                    <Text style={styles.dingdanText}>查看全部 ></Text>
                </View>
                <View style={{height: 0.5, backgroundColor: '#a5a5a5'}}></View>

            </View>
        );
    }

}

class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: '#a5a5a5',marginRight: 10,marginLeft: 10}}/>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    },
    dingdan: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dingdanText: {
        marginLeft: 15,
        marginRight: 15,
    },
    caidanV: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    caidanItem:{
        height:75,
        marginTop: 10,
    },
    caidanimag:{
        height:40,
        width: 40,

    },
    itemView: {
        alignItems:'center',
        flexDirection: 'row',
        height: 105,
    },

});