//import liraries
import React, { PureComponent } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'

class MessageCenterCell extends PureComponent {

    render() {
        let {info} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headlineContainer}>
                    <Image resizeMode="center" style={styles.headlineImg} source={require('../../img/Mine/icon_message_center.png')} />
                    <Text style={styles.headlineText}>{info.title}</Text>
                    <Text style={styles.timeText}>{info.time}</Text>
                </View>
                <Text style={styles.detailText} numberOfLines={1}>{info.detailDesc}</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 40
    },
    headlineContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e9e9ef',
        alignItems: 'center',
        height: 50
    },
    headlineImg: {
        width: 20,
        height: 20,
        marginRight: 10
        // backgroundColor: 'red',
    },
    headlineText: {
        flex: 1,
        color: '#797979',
        fontSize: 20
    },
    timeText: {
        color: '#aeaeae',
        fontSize: 10
    },
    detailText: {
        color: '#969696',
        fontSize: 12,
        marginTop: 15
    }
});

export default MessageCenterCell;