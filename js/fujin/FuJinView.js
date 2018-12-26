import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './Header'
import TopNavigationItem from './TopNavigationItem'
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import ScrollableTabView, {ScrollableTabBar,} from 'react-native-scrollable-tab-view';

/**
 * 附近
 *
 * */

const data = [
    {title:'享美食',tab:['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜']},
    {title:'住酒店',tab: ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠']},
    {title:'爱玩乐',tab:['热门', 'KTV', '足疗按摩', '洗浴汗蒸',  '电影院', '美发', '美甲']},
    {title:'全部',tab:['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜','热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠','热门', 'KTV', '足疗按摩', '洗浴汗蒸',  '电影院', '美发', '美甲']},
]

export default class FuJinView extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount() {

    }

    render() {

            return (
                <View style={styles.container}>
                    <Header/>
                    <View style={{height: 1,backgroundColor:'#000000'}}/>
                    <ScrollableTabView style={styles.ScrollableTabView}
                                       tabBarBackgroundColor={'#ffb92e'}
                                       tabBarActiveTextColor={'#000000'}
                                       tabBarUnderlineStyle={styles.tabBarUnderline}
                                       tabBarTextStyle={styles.tabBarTextStyle}
                                       tabBarInactiveTextColor={'#FFFFFF'}
                                       initialPage={0}
                                       locked={false}
                                       renderTabBar={() => <ScrollableTabBar/>}>
                        <View tabLabel={data[0].title} style={styles.container}><TopNavigationItem tabListData={data[0].tab}/></View>
                        <View tabLabel={data[1].title} style={styles.container}><TopNavigationItem tabListData={data[1].tab}/></View>
                        <View tabLabel={data[2].title} style={styles.container}><TopNavigationItem tabListData={data[2].tab}/></View>
                        <View tabLabel={data[3].title} style={styles.container}><TopNavigationItem tabListData={data[3].tab}/></View>
                    </ScrollableTabView>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {

        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#000000',
        height:3,
    },
    ScrollableTabView:{
        backgroundColor:'#FFFFFF',

    },
    tabBarTextStyle:{
        fontSize: 15
    }

})


const TabNavigator = createMaterialTopTabNavigator(
    {
        美食:{
            screen:TopNavigationItem,
            navigationOptions: {
                tabBarLabel: '美食',
                tabBarTitle:'美食',
            }
        },
        酒店:{
            screen:TopNavigationItem,
            navigationOptions: {
                tabBarLabel: '酒店',
                tabBarTitle:'酒店',
            }

        },
        玩乐:{
            screen:TopNavigationItem,
            navigationOptions: {
                tabBarLabel: '玩乐',
                tabBarTitle:'玩乐',
            }
        },
        全部:{
            screen:TopNavigationItem,
            navigationOptions: {
                tabBarLabel: '全部',
                tabBarTitle:'全部',
            }
        },
    },
    {
        initialRouteName: '美食',
        // swipeEnabled: false, // 是否允许滑动切换tabs 默认是true
        animationEnabled: false, // 点击tab label切换tab时是否开启动画 默认为true
        // order: ['Settings', 'Home'],
        tabBarPosition: 'top', // tab bar显示的位置，默认是 'top'
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: '#f2f2f2',
                borderTopWidth: 0.5,
                borderTopColor: 'grey',
            },
            indicatorStyle: {
                // height: 0, // 不显示indicator
            },
            headerTitle:(
                <Header/>
            )
            // showIcon: true, // 是否显示图标, 默认为false
            // showLabel: false, // 是否显示label
        },

    }
    );
const Tab = createAppContainer(TabNavigator);




