//import liraries
import React, { PureComponent } from 'react'
import { FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import LoanListCell from './LoanListCell'
import LoanListData from '../../mockData/LoanListData'

class MessageCenter extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity style={styles.rightMoreBtn}>
                <Text style={styles.rightMoreTitle}>更多借款</Text>
            </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: color.theme},
        title: "借款记录",
    });

    state: {
        info: Object,
        dataList: Array<Object>
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            info: {},
            dataList: LoanListData.dataList
        };
    }

    _goDetail(info) {
        this.props.navigation.navigate('LoanDetail', {title: '借款详情', info})
    }

    render() {
        return (
            <ScrollView style={styles.container1}>
                <FlatList
                    style={styles.listContainer}
                    data={this.state.dataList}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this._renderItem}
                />
                <View style={styles.btnBox}>
                    <TouchableOpacity style={[styles.moreLoanBtn]} onPress={this.moreLoanBtnClicked}>
                        <Text style={styles.moreLoanTitle}>更多借款，请点击查看>></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    // 向子组件传递数据，state中一个属性info，然后到子组件中通过this.props获取
    _renderItem = ({item}) => {
        return (
            <LoanListCell info={item} onPress={this._goDetail.bind(this)}></LoanListCell>
        )
    }

    // event
    moreLoanBtnClicked(e) {

    }
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: color.background
    },
    rightMoreBtn: {
        marginRight: 10
    },
    rightMoreTitle: {
        color: 'white',
        fontSize: 13,
        fontWeight: '500'
    },
    container: {
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        backgroundColor: 'white'
    },
    moreLoanBtn: {
        marginTop: 40,
        width: 160
    },
    moreLoanTitle: {
        fontSize: 13,
        color: '#67adfe',
        fontWeight: '500'
    },
    btnBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MessageCenter;
