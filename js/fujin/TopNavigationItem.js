import React, {Component} from 'react';
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    FlatList,
    Image,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View
} from 'react-native';
import FlatListHeader from "../tuangou/FlatListHeader";

const {height, width} = Dimensions.get('window');
type Props = {
    tabListData: Array;
}

export default class TopNavigationItem extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            bState: 0, //0是未点击，1是点击了
            food: null,
            isShowActivityIndicator: true,
            refreshing: false,
        }
    }

    componentDidMount() {
        this.fetchData();
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

    _onPressButton(i) {
        fetch("https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json")
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    isShowActivityIndicator: false,
                    food: responseData.movies.reverse(),
                    refreshing: false,
                    bState: i
                });
            });

    }

    render() {
        //头部数据
        let {tabListData} = this.props;
        let tabTexts = [];
        for (let i = 0; i < tabListData.length; i++) {
            tabTexts.push(
                //点击改变当前text的背景色
                //知道点击的是第几个就在状态中存索引，重新绘制添加text到数组，当状态等等于索引的时候添加另一个text
                i == this.state.bState ?
                    <TouchableNativeFeedback
                        key={i}
                        onPress={() => this._onPressButton(i)}>
                        <Text style={[styles.text, {backgroundColor: '#000000', color: '#FFFFFF',}]}
                              key={i}>{tabListData[i]}</Text>
                    </TouchableNativeFeedback> :
                    <TouchableNativeFeedback key={i}
                                             onPress={() => this._onPressButton(i)}>
                        <Text style={styles.text} key={i}>{tabListData[i]}</Text>
                    </TouchableNativeFeedback>
            )
        }
        if (this.state.isShowActivityIndicator) {
            return (
                <ActivityIndicator animating={this.state.isShowActivityIndicator}
                                   size={'large'}
                                   style={styles.container}
                />
            );
        } else {
            return (
                <View style={styles.view}>

                    <FlatList
                        keyExtractor={(item, index) => (item.id)}
                        data={this.state.food}
                        renderItem={({item, index}) => this.renderItem(item, index)}
                        ItemSeparatorComponent={ItemDivideComponent}
                        ListHeaderComponent={<View style={[styles.view,{marginBottom: 5,marginTop: 5}]}>{tabTexts}</View>}
                        refreshControl={<RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />}
                    />
                </View>
            )
        }
    }

    renderItem(item, index) {
        return (
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
        );
    }
}

class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: '#a5a5a5', marginRight: 10, marginLeft: 10}}/>
        );
    }
};
const styles = StyleSheet.create({
    view: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#F3F3F3',

    },
    text: {
        width: width * 0.2,
        height: 30,
        color: '#000000',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#49d8ff',
        marginLeft: (width - (width * 0.8)) / 8,
        marginRight: (width - (width * 0.8)) / 8,
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
        lineHeight: 30,
    },
    itemView: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 105,
        backgroundColor:'#FFFFFF'
    },
    itemView2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,

    },
    flex: {
        flex: 1,
    },

})