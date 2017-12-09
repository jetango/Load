import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions, Slider, AsyncStorage, PixelRatio} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class CompletedOperator extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "手机运营商认证",
    });

    constructor(props: Object) {
        super(props);
        
    }

    render() {
        return (
            <ScrollView  style={styles.container}>
                <View style={styles.tipContainer}>
                    <Image style={styles.completedImg} />
                    <Text style={styles.completedTip}>恭喜您，运营商已完成认证</Text>
                </View>
                <TouchableOpacity style={styles.authenticationBtn} >
                    <Text style={styles.authenticationTitle}>已认证</Text>
                </TouchableOpacity>
                <View style={styles.encryptContainer}>
                    <Image style={styles.encryptImg} />
                    <Text style={styles.encryptTitle}>银行级数据加密保护</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
    },
    tipContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    completedImg: {
        width: 120,
        height: 100,
        backgroundColor: 'red'
    },
    completedTip: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30
    },
    authenticationBtn: {
        backgroundColor: '#5a6dff',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 30,
        marginTop: 100,
        marginBottom: 50
    },
    authenticationTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff'
    },
    encryptContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    encryptImg: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        marginRight: 10
    },
    encryptTitle: {
        fontSize: 12,
        color: '#56bc58',
    }
})

export default CompletedOperator;
