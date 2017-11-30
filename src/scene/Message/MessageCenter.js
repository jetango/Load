//import liraries
import React, { PureComponent } from 'react'
import { FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'

import MessageCenterCell from './MessageCenterCell'
import MessageMockData from '../../mockData/MessageCenterData'

class MessageCenter extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "消息中心",
    });

    state: {
        info: Object,
        dataList: Array<Object>
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            info: {},
            dataList: MessageMockData.dataList
        };
    }

    render() {
        return (
            <FlatList  
                style={styles.container}
                data={this.state.dataList}
                keyExtractor={(item, index) => item.id}
                renderItem={this._renderItem} /> 
        )
    }

    // 向子组件传递数据，state中一个属性info，然后到子组件中通过this.props获取
    _renderItem = ({item}) => {
        return (
            <MessageCenterCell info={item}></MessageCenterCell>
        )
    }
};

const styles = StyleSheet.create({
    headerTitle: {
        color: 'white',
        fontSize: 16
    },
    container: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,

    }
});

export default MessageCenter;