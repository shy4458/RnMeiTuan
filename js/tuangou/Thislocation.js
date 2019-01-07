import React, {Component} from "react";
import {
    Dimensions,
    DeviceEventEmitter,
    SectionList,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View, Alert, FlatListProps as getItemLayout
} from "react-native";

import cityData from "../city.json";

const {height, width} = Dimensions.get('window');
const RecentlyArr = [];  //最近选择，最多有三个元素，后选择的在最前


let thisCity;
export default class Thislocation extends Component<Props> {
    static navigationOptions = {
        title: "我的位置"
    };

    constructor(props) {
        super(props);
        let {navigation} = this.props;
        thisCity = navigation.getParam("thisCity", "NO-ID");
        this.state = {
            thisCity: thisCity,
            RecentlyCity: thisCity
        }
        RecentlyArr.unshift(
            <Text key={thisCity} style={{
                width: width / 3 - 10,
                height: 50,
                backgroundColor: '#FFFFFF',
                textAlign: 'center',
                fontSize: 18,
                paddingTop: 10,
            }}>{this.state.RecentlyCity}</Text>
        )
    }

    touchEnd(e, index) {
        this.refs.SectionList.scrollToLocation(
            {
                sectionIndex: index,
                itemIndex: 0,
                viewOffset: 25,

            },
        )
    }

    componentDidMount() {
        let self = this
        this.listener = DeviceEventEmitter.addListener('hotTitle', function (hotTitle) {
            self.setState({
                thisCity: hotTitle,
            })
        });
    }

    componentWillUnmount() {
        let self = this
        this.listener = DeviceEventEmitter.emit('backCity', {thisCity: self.state.thisCity});
        // this.listener.remove();
    }

    render() {

        let textList = [];
        for (let i = 0; i < cityData.length; i++) {
            textList.push(
                <TouchableOpacity key={i} onPressIn={({nativeEvent: e}) => this.touchEnd(e, i)}>
                    <Text style={{fontSize: 16}}>{cityData[i].title}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.view}>
                <View style={styles.view2}>
                    <Header thisCity={this.state.thisCity} ref={'hotHeader'}/>
                    <SectionList
                        renderItem={({item, index, section}) => (
                            <TouchableNativeFeedback onPress={() => {
                                Alert.alert('确定选择' + item + '吗？',
                                    '点击OK后会切换到' + item + '的商店',
                                    [{
                                        text: 'OK', onPress: () =>
                                            this.setState({
                                                thisCity: item,
                                                RecentlyArr: item
                                            })
                                    }],

                                    {cancelable: false})
                            }}>
                                <View style={styles.TouchableNativeFeedback}>
                                    <Text style={{fontSize: 22}} key={index}>{item}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        )}
                        renderSectionHeader={({section: {title}}) => (
                            <View style={styles.listTitle}>
                                <Text style={{fontSize: 20}}>{"      " + title}</Text>
                            </View>
                        )}
                        sections={cityData}
                        keyExtractor={(item, index) => item + index}
                        ItemSeparatorComponent={ItemDivideComponent}
                        ref={'SectionList'}
                        ListHeaderComponent={SectionListHeadre}
                        getItemLayout={(data,index)=>({
                            length: 40, offset: 40 * index +180, index
                            //方法说明:
                            //当调用this.refs.SectionList.scrollToLocation这个方法的时候,列表的所有数据并没有渲染完成，这个时候跳到指定位置时，程序就无法确定。
                            //所有用此方法来规定位置以及数据，length：列表行高，offset是第几行，index：跳转到哪个index就是这个index
                        })}
                    />
                </View>
                <TouchableOpacity style={styles.TouchableOpacity}
                                  number={1}
                >{textList}</TouchableOpacity>
            </View>
        );
    }
}
//列表头部
//最近选择的和热门城市
class SectionListHeadre extends Component {
    render() {
        let hotCityArr = ["北京", "上海", "深圳", "广州", "南京", "成都", "苏州", "杭州", "武汉"];
        let textArr = [];
        for (let i = 0; i < 9; i++) {
            textArr.push(
                <TouchableNativeFeedback key={i} onPress={() => {

                    Alert.alert('确定选择' + hotCityArr[i] + '吗？',
                        '点击OK后会切换到' + hotCityArr[i] + '的商店',
                        [
                            // 可以有三个按钮
                            // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                            // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {
                                text: 'OK', onPress: () =>
                                    DeviceEventEmitter.emit("hotTitle", hotCityArr[i].toString())
                            },
                        ],
                        {cancelable: false})

                }}>
                    <Text key={i} style={{
                        width: width / 3 - 10,
                        height: 50,
                        backgroundColor: '#FFFFFF',
                        textAlign: 'center',
                        fontSize: 18,
                        paddingTop: 10,

                    }}>{hotCityArr[i]}</Text>
                </TouchableNativeFeedback>
            )
        }


        return (
            <View style={styles.listHeader}>
                {/*<Text style={{fontSize: 20}}> 最近选择 </Text>*/}
                {/*<View style={{flexDirection: 'row', flexWrap: 'wrap', textAlign: 'center',backgroundColor:'#EEEEEE'}}>*/}
                {/*{RecentlyArr}*/}
                {/*</View>*/}
                <Text style={{fontSize: 20}}> 热门城市 </Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', textAlign: 'center', backgroundColor: '#EEEEEE'}}>
                    {textArr}
                </View>
            </View>
        )
    }
}

//列表每一组
type Props = {
    thisCity: thisCity
}

class Header extends Component<Props> {

    render() {

        let {thisCity} = this.props;
        return (
            <View style={{height: 40, justifyContent: "center"}}>
                <Text
                    style={{
                        justifyContent: "center",
                        marginLeft: 20,
                        fontSize: 22
                    }}
                >
                    {"当前位置：" + thisCity}
                </Text>
            </View>
        );
    }
}

class ItemDivideComponent extends Component {
    render() {
        return (
            <View
                style={{
                    height: 0.5,
                    backgroundColor: "#a5a5a5",
                    marginRight: 10,
                    marginLeft: 20
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        flexDirection: "row"
    },
    view2: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    TouchableOpacity: {
        width: 30,
        alignItems: "center",
        justifyContent: "space-between",
    },
    listTitle: {
        height: 25,
        backgroundColor: "#EEEEEE",
        justifyContent: "center"
    },
    TouchableNativeFeedback: {
        height: 40,
        justifyContent: "center",
        marginLeft: 20
    },
    listHeader: {
        height: 180,
        backgroundColor: '#EEEEEE',

    }
});
