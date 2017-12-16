import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions, Slider, AsyncStorage, PixelRatio} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class Operator extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "手机运营商认证",
    });

    constructor(props: Object) {
        super(props);
        { (this: any).completeAuth = this.completeAuth.bind(this) }
    }

    completeAuth() {
        this.props.navigation.navigate('CompletedOperator');
    }

    render() {
        return (
            <ScrollView  style={styles.container}>
                <View style={styles.inputContainer}>
                    <Separator />
                    <TextInput
                        style={[styles.phoneInput, styles.commonInput]}
                        placeholder="请输入手机号"
                        maxLength={11}
                    />
                    <Separator />
                    <TextInput
                        style={[styles.pwdInput, styles.commonInput]}
                        placeholder="请输入服务密码"
                        maxLength={6}
                    />
                    <Separator />
                </View>
                <View style={styles.promptContainer}>
                    <Paragraph style={[styles.tipTitle]}>温馨提示</Paragraph>
                    <Paragraph style={[styles.tipTitle]}>1、请输入正确的运营商（移动、联通、电信）服务密码，如若忘记可通过拨打运营商服务电话或者登录网上营业厅找回密码；</Paragraph>
                    <Paragraph style={[styles.tipTitle]}>2、运营商认证需要2～3分钟，请耐心等待；</Paragraph>
                </View>
                <TouchableOpacity
                    style={styles.authenticationBtn}
                    onPress={() => this.completeAuth()}>
                    <Text style={styles.authenticationTitle}>认证中</Text>
                </TouchableOpacity>
                <View style={styles.encryptContainer}>
                    <Image resizeMode="cover" style={styles.encryptImg} source={require('../../img/Public/icon_bank_encryption_green.png')} />
                    <Text style={styles.encryptTitle}>银行级数据加密保护</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: color.background,
    },
    inputContainer: {
        marginTop: 10,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    commonInput: {
        height: 50,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 16
    },
    promptContainer: {
        flexDirection: 'column',
        width: ScreenWidth - 30,
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20
    },
    tipTitle: {
        fontSize: 14,
        color: '#a9a9a9'
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
        marginTop: 50,
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
        width: 13, 
        height: 16,
        // backgroundColor: 'red',
        marginRight: 10
    },
    encryptTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#56bc58',
    }
})

export default Operator;
