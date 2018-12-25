import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import ScrollViewItem from './ScrollViewItem'
import PageContro from './PageContro'
import GruidView from './GruidView'

const {height, width} = Dimensions.get('window');
const headerItemData = [
    {name: '美食', imag: require('../imag/tuangou/meishi.png')},
    {name: '电影', imag: require('../imag/tuangou/dianying.png')},
    {name: '酒店', imag: require('../imag/tuangou/jiudian.png')},
    {name: 'KTV', imag: require('../imag/tuangou/KTV.png')},
    {name: '优惠', imag: require('../imag/tuangou/youhui.png')},
    {name: '周边游', imag: require('../imag/tuangou/zhoubianyou.png')},
    {name: '生活服务', imag: require('../imag/tuangou/shenghuofuwu.png')},
    {name: '休闲娱乐', imag: require('../imag/tuangou/yule.png')},
    {name: '丽人美发', imag: require('../imag/tuangou/meifa.png')},
    {name: '购物', imag: require('../imag/tuangou/gouwu.png')},
    {name: '小龙虾', imag: require('../imag/tuangou/xiaolongxia.png')},
    {name: '骑车', imag: require('../imag/tuangou/qiche.png')},
    {name: '玩', imag: require('../imag/tuangou/kaixin.png')},
    {name: '滑雪', imag: require('../imag/tuangou/huaxue.png')},
    // {name: '', imag: require('')},
    // {name: '', imag: require('')},
    // {name: '', imag: require('')},
];
export default class FlatListHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isPage: 0,
        }

    }

    render() {
        let menuViews1 = []
        let menuViews2 = []
        for (let i = 0; i < 10; i++) {
            menuViews1.push(
                <ScrollViewItem name={headerItemData[i].name} img={headerItemData[i].imag} key={i}/>
            )
        }
        for (let i = 10; i < headerItemData.length; i++) {
            menuViews2.push(
                <ScrollViewItem name={headerItemData[i].name} img={headerItemData[i].imag} key={i}/>
            )
        }
        return (
            <View>
                <ScrollView
                    style={styles.header}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onScroll={(e) => this.onScroll(e)}>
                        <View style={{width: width, flexDirection: 'row', flexWrap: 'wrap'}}>{menuViews1}</View>
                        <View style={{width: width, flexDirection: 'row'}}>{menuViews2}</View>
                </ScrollView>
                <PageContro contro={this.state.isPage}/>

                <GruidView></GruidView>

            </View>
        )
    }

    onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x / width)
        if (this.state.isPage != currentPage) {
            this.setState({
                isPage: currentPage
            })
        }
    }
}
const styles = StyleSheet.create({
    header: {
        height: 160,
    }
})
