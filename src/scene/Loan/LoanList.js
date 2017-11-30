//import liraries
import React, { PureComponent } from 'react'
import { FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
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

    render() {
        return (
            <View style={styles.container}>
                <FlatList  
                    style={styles.listContainer}
                    data={this.state.dataList}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this._renderItem} />
                <TouchableOpacity style={styles.moreLoanBtn} onPress={this.moreLoanBtnClicked}>
                    <Text style={styles.moreLoanTitle}>更多借款，请点击查看>></Text>
                </TouchableOpacity>
            </View>
        )
    }

    // 向子组件传递数据，state中一个属性info，然后到子组件中通过this.props获取
    _renderItem = ({item}) => {
        return (
            <LoanListCell info={item}></LoanListCell>
        )
    }

    // event
    moreLoanBtnClicked(e) {
        
    }
};

const styles = StyleSheet.create({
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
    }
});

export default MessageCenter;