//import liraries
import React, { PureComponent } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'


class MessagePwdRegister extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "注册",
    });

    state: {
        isBtnEnabled: boolean
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            isBtnEnabled: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logoImg} />
                <Text style={styles.phoneNum}>18211110000</Text>
                <View style={styles.messageNumContainer}>
                    <Image style={styles.phoneImg}/>
                    <TextInput
                        style={styles.phoneInput}
                        autoFocus={true}
                        maxLength={6}
                        placeholder="请输入验证码"
                        onChangeText={(text) => {this.numChange(text, this)}}/>
                    <TouchableOpacity
                        style={styles.messageNumBtn}
                        onPress={() => this.getMessageNum(this)}>
                        <Text style={styles.messageNumTitle}>获取验证码</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pwdContainer}>
                    <Image style={styles.phoneImg}/>
                    <TextInput
                        style={styles.phoneInput}
                        maxLength={16}
                        placeholder="请设置新的6-16位登录密码"
                        secureTextEntry={true}
                        onChangeText={(text) => {this.numChange(text, this)}}/>
                </View>
                <View style={styles.invitationContainer}>
                    <TouchableOpacity
                        style={styles.invitationButton}
                        onPress={this.invitationBtnDidClicked}>
                        <Text style={styles.invitationCode}>我有邀请码>></Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={this.registerBtnDidClicked}>
                    <Text style={styles.registerButtonTitle}>注册</Text>
                </TouchableOpacity>
                <View style={styles.protocolContainer}>
                    <TouchableOpacity
                        style={styles.checkProtocoBtn}
                        onPress={this.checkBtnDidClicked}>
                        <Image style={styles.checkProtocoImg} />
                    </TouchableOpacity>
                    <Text style={styles.pureProtocol}>注册即同意</Text>
                    <TouchableOpacity
                        style={styles.registerProtocolBtn}
                        onPress={this.registerProtocolBtnDidClicked}>
                        <Text style={styles.registerProtocolTitle}>《注册协议》</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.authProtocolBtn}
                        onPress={this.authProtocolBtnDidClicked}>
                        <Text style={styles.authProtocolTitle}>《使用授权协议》</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    // event
    numChange(text, self) {
        if (text.length > 0) {
            // 一般情况下setState() 总是触发一次重绘，除非在 shouldComponentUpdate() 中实现了条件渲染逻辑
            self.setState({isCloseHidden: false});
            // self.state.isCloseHidden = false;
        } else {
            self.setState({isCloseHidden: true});
        }

        // 注册页面，设置的密码位数是6-16位
        if (text.length >= 6) {
            self.setState({isBtnEnabled: true});
        } else {
            self.setState({isBtnEnabled: false});
        }
    }

    getMessageNum(self) {
        // 获取验证码
    }

    registerBtnDidClicked() {
        if (this.state.isBtnEnabled) {
            // 进入下一个页面 TO_DO
            // this.props.navigation.navigate('GroupPurchase', { info: info })
            this.props.navigation.dispatch(
                NavigationActions.reset({
                    index: 0,
                    key: null,
                    actions: [NavigationActions.navigate({ routeName: 'Tab' })]
                })
            )
        }
    }

    invitationBtnDidClicked(self) {
        // 邀请码
        console.log('invitationBtnDidClicked');
    }

    moreBtnDidClicked() {
        // 更多操作
    }
};

const styles = StyleSheet.create({

    headerTitle: {
        color: 'white',
        fontSize: 16
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    phoneNum: {
        color: 'black',
        fontSize: 20,
        marginTop: 10
    },
    logoImg: {
        backgroundColor: 'red',
        borderRadius: 6,
        width: 50,
        height: 50,
        marginTop: 40,
    },
    phoneImg: {
        width: 20,
        height: 30,
        backgroundColor: 'red',
        position: 'absolute',
        left: 5,
        top: 5
    },
    messageNumContainer: {
        marginTop: 30,
    },
    phoneInput: {
        borderWidth: 0.5,
        borderColor: '#5e70ff',
        borderRadius: 4,
        height: 40,
        fontSize: 16,
        width: 300,
        paddingLeft: 30,
    },
    pwdContainer: {
        marginTop: 15
    },
    messageNumBtn: {
        borderLeftColor: '#e2e2e2',
        borderLeftWidth: 0.5,
        width: 100,
        height: 26,
        position: 'absolute',
        top: 7,
        right: 0,
        // backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageNumTitle: {
        color: '#67adfe',
        fontSize: 16,
        fontWeight: '600'
    },
    //
    invitationContainer: {
        marginTop: 30,
        width: 300
    },
    invitationButton: {
        position: 'absolute',
        left: 15
    },
    invitationCode: {
        color: '#67adfe',
        fontSize: 16,
        fontWeight: '600'
    },
    //
    registerButton: {
        width: 300,
        height: 40,
        borderRadius: 30,
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc'
    },
    registerButtonTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    },
    protocolContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    checkProtocoImg: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        marginLeft: -10
    },
    pureProtocol: {
        fontSize: 12,
        color: '#cdcccd',
        marginLeft: 8
    },
    registerProtocolTitle: {
        fontSize: 12,
        color: '#67adfe',
    },
    authProtocolTitle: {
        fontSize: 12,
        color: '#67adfe',
    },
});

export default MessagePwdRegister;
