//import liraries
import React, { PureComponent } from 'react'
import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import api from '../../networkapi'

var {width, height, scale} = Dimensions.get('window');

var timeCount = 60;
var timer;

class MessagePwdRegister extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "注册",
    });

    state: {
        isSendMsgBtnEnabled: boolean,
        isBtnEnabled: boolean,
        phoneNum: String,
        msgText: String,
        selectedProtocol: boolean,
        submitMsg: String,
        submitPwd: String,
        isRegisterBtnEnable: boolean
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            isSendMsgBtnEnabled: true,
            isBtnEnabled: false,
            phoneNum: this.props.navigation.state.params.phoneNum,
            msgText: '获取验证码',
            selectedProtocol: true,
            submitMsg: '',
            submitPwd: '',
            isRegisterBtnEnable: false
        };
        // { (this: any).checkBtnDidClicked = this.checkBtnDidClicked.bind(this) }
    }

    componentWillUnmount() {
        timeCount = 60;
        clearInterval(timer);
    }

    async requestSendMsg() {
        try {
            let response = await fetch(api.sendMsg, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  mobile: this.state.phoneNum,
                  s: '签名',
                })})
            let json = await response.json()
            callback(json.data);

        } catch (error) {
            alert(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode="cover" style={styles.logoImg} source={require('../../img/Login/icon_login_pwdLogo.png')} />
                <Text style={styles.phoneNum}>{this.state.phoneNum}</Text>
                <View style={[styles.messageNumContainer, styles.inputContainer]}>
                    <Image resizeMode="center" style={styles.phoneImg} source={require('../../img/Login/icon_login_checkmsg.png')} />
                    <TextInput
                        style={styles.phoneInput}
                        autoFocus={true}
                        maxLength={6}
                        value={this.state.submitMsg}
                        placeholder="请输入验证码"
                        onChangeText={(text) => {this.numMsgChange(text, this)}}/>
                    <TouchableOpacity
                        style={styles.messageNumBtn}
                        onPress={() => this.getMessageNum(this)}>
                        <Text style={[styles.messageNumTitle, this.state.isSendMsgBtnEnabled ? styles.messageTitleEnable : styles.messageTitleDisenable]}>{this.state.msgText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.pwdContainer, styles.inputContainer]}>
                    <Image resizeMode="center" style={styles.phoneImg} source={require('../../img/Login/icon_login_lock.png')} />
                    <TextInput
                        style={styles.phoneInput}
                        maxLength={16}
                        value={this.state.submitPwd}
                        placeholder="请设置新的6-16位登录密码"
                        secureTextEntry={true}
                        onChangeText={(text) => {this.numPwdChange(text, this)}}/>
                </View>
                <View style={styles.invitationContainer}>
                    <TouchableOpacity
                        style={styles.invitationButton}
                        onPress={this.invitationBtnDidClicked}>
                        <Text style={styles.invitationCode}>我有邀请码>></Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.registerButton, this.state.isRegisterBtnEnable ? styles.registerButtonEnable : styles.registerButtonDisenable]}
                    onPress={this.registerBtnDidClicked}>
                    <Text style={styles.registerButtonTitle}>注册</Text>
                </TouchableOpacity>
                <View style={styles.protocolContainer}>
                    <TouchableOpacity
                        style={styles.checkProtocoBtn}
                        onPress={() => this.checkBtnDidClicked(this)}>
                        <Image resizeMode="center" style={styles.checkProtocoImg} source={this.state.selectedProtocol ? require('../../img/Public/icon_check_selected.png') : require('../../img/Public/icon_check_unselected.png')} />
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

    numMsgChange(text, self) {
        // TextInput 可以设置value=this.state.xxx，如果想要能正常输入数据，可以在方法onChangeText中设置this.setState({xxx: text})
        self.setState({
            submitMsg: text
        });
        self.changeRegisterBtnStatus(self);
    }

    numPwdChange(text, self) {
        self.setState({
            submitPwd: text
        });
        self.changeRegisterBtnStatus(self);
    }

    checkBtnDidClicked(self) {
        console.log('before selectedProtocol $$ ' + self.state.selectedProtocol);
        // react native setState之后的state值不能立即使用，setState之后，需要走完RN生命周期，也就是走到render时，state的值才会变成setState的值。
        // 要立即使用state的值，需要直接更改，也即this.state.something = 'now';
        self.state.selectedProtocol = !self.state.selectedProtocol;
        // self.setState({selectedProtocol: self.state.selectedProtocol});
        self.changeRegisterBtnStatus(self);
    }

    changeRegisterBtnStatus(self) {
        console.log('selectedProtocol = ' + this.state.selectedProtocol);
        if (self.state.submitMsg.length >= 5 && 
            self.state.submitPwd.length >= 5 && 
            self.state.selectedProtocol) {
            self.setState({
                isRegisterBtnEnable: true
            });
        } else {
            self.setState({
                isRegisterBtnEnable: false
            });
        }
    }

    getMessageNum(self) {
        // 获取验证码
        if (self.state.isSendMsgBtnEnabled) {
            timer = setInterval(() => {
                if (timeCount > 0) {
                    timeCount--;
                    self.setState({
                        msgText: timeCount + 's'
                    })
                } else {
                    timeCount = 60;
                    self.setState({
                        msgText: '发送验证码'
                    })
                    clearInterval(timer);
                    self.setState({
                        isSendMsgBtnEnabled: true
                    })
                }
                
            }, 1000);
            self.setState({
                isSendMsgBtnEnabled: false
            })
            // 发送验证码请求
            // self.requestSendMsg(function() {
            //     // 发送验证码请求结果处理
            // })
        }
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
        width: 50,
        height: 56,
        marginTop: 40,
    },
    phoneImg: {
        width: 20,
        height: 30,
        marginLeft: 15, 
        marginRight: 15
    },
    messageNumContainer: {
        marginTop: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.0 / scale,
        borderColor: '#5e70ff',
        borderRadius: 4,
        height: 40,
        width: 300,
    },
    phoneInput: {
        fontSize: 16,
        flex: 1
    },
    pwdContainer: {
        marginTop: 15
    },
    messageNumBtn: {
        borderLeftColor: '#e2e2e2',
        borderLeftWidth: 0.5,
        width: 100,
        height: 26,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageNumTitle: {
        fontSize: 16,
        fontWeight: '600'
    },
    messageTitleEnable: {
        color: '#67adfe',
    },
    messageTitleDisenable: {
        color: '#eeeeee',
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
    },
    registerButtonEnable: {
        backgroundColor: '#586dfd'
    },
    registerButtonDisenable: {
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
