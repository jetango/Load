//import liraries
import React, { PureComponent } from 'react'
import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, Image, AsyncStorage} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { NavigationActions } from 'react-navigation'
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'


const STORAGE_USER = '@AsyncStorage:user_info'
const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 2

var {width, height, scale} = Dimensions.get('window');

var timeCount = 60;
var timer;

class MessageLogin extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "短信登录",
    });

    state: {
        isSendMsgBtnEnabled: boolean,
        isLoginBtnEnable: boolean,
        phoneNum: String,
        msgText: String,
        submitMsg: String,
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            isSendMsgBtnEnabled: true,
            isLoginBtnEnable: false,
            phoneNum: this.props.navigation.state.params.phoneNum,
            msgText: '获取验证码',
            submitMsg: '',
        };
        { (this: any).nextBtnDidClicked = this.nextBtnDidClicked.bind(this) }
        { (this: any).moreBtnDidClicked = this.moreBtnDidClicked.bind(this) }
        this.handlePress = this.handlePress.bind(this)
        { (this: any).messageLoginBtnDidClicked = this.messageLoginBtnDidClicked.bind(this) }
    }

    componentWillUnmount() {
        timeCount = 60;
        clearInterval(timer);
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
                <TouchableOpacity
                    style={[styles.nextButton, this.state.isLoginBtnEnable ? styles.nextBtnEnable : styles.nextBtnDisenable]}
                    onPress={this.nextBtnDidClicked}>
                    <Text style={styles.nextButtonTitle}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.messageButton}
                    onPress={this.messageLoginBtnDidClicked}>
                    <Text style={styles.messageButtonTitle}>使用密码登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.moreButton}
                    onPress={this.moreBtnDidClicked}>
                    <Text style={styles.moreButtonTitle}>更多</Text>
                </TouchableOpacity>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    cancelButtonIndex={CANCEL_INDEX}
                    onPress={this.handlePress}
                    options={['取消', '切换账号', '找回密码', '前往注册']}/>
            </View>
        )
    }

    // event
    phoneNumChange(text, self) {
        if (text.length > 0) {
            // 一般情况下setState() 总是触发一次重绘，除非在 shouldComponentUpdate() 中实现了条件渲染逻辑
            // this.setState会导致整个UI都变化，而不只是该inputPwdStr属性相关的UI变更
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

    async nextBtnDidClicked() {
        if (this.state.isBtnEnabled) {
            // TODO login API
            await this._setUserInfo(JSON.stringify({phone: 123123123}))

            this.props.navigation.dispatch(
                NavigationActions.reset({
                    index: 0,
                    key: null,
                    actions: [NavigationActions.navigate({ routeName: 'Tab' })]
                })
            )
            // 进入下一个页面 TO_DO
            // this.props.navigation.navigate('GroupPurchase', { info: info })
        }
    }

    async _setUserInfo(info) {
        try {
            await AsyncStorage.removeItem(STORAGE_USER)
            return await AsyncStorage.setItem(STORAGE_USER, info)
        } catch(error) {

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

    numMsgChange(text, self) {
        // TextInput 可以设置value=this.state.xxx，如果想要能正常输入数据，可以在方法onChangeText中设置this.setState({xxx: text})
        self.setState({submitMsg: text});
        if (text.length == 6) {
            self.setState({isLoginBtnEnable: true});
        } else {
            self.setState({isLoginBtnEnable: false});
        }
    }

    messageLoginBtnDidClicked() {
        // 跳转密码登录
        console.log('self.props = ' + this.props);
        this.props.navigation.navigate('PasswordLogin', {phoneNum: this.state.phoneNum});
    }

    moreBtnDidClicked() {
        // 更多操作
        this.ActionSheet.show();
    }
    handlePress(idx) {
        switch(idx) {
            case 1: {
                // 切换账号
                this.props.navigation.goBack();
            }
            break;
            case 2: {

            }
            break;
            case 3: {
                // 前往注册
                this.props.navigation.navigate('MessagePwdRegister', {phoneNum: this.state.phoneNum});
            }
            break;
        }
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
        marginTop: 20
    },
    //
    logoImg: {
        width: 100,
        height: 112,
        marginTop: 40,
    },
    phoneInput: {
        fontSize: 16,
        flex: 1
    },
    //
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
    nextButton: {
        width: 300,
        height: 40,
        borderRadius: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextBtnEnable: {
        backgroundColor: '#5e70ff',
    },
    nextBtnDisenable: {
        backgroundColor: '#cccccc',
    },
    nextButtonTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    },
    //
    messageButton: {
        marginTop: 40
    },
    messageButtonTitle: {
        color: '#67adfe',
        fontSize: 16,
        fontWeight: '600'
    },
    //
    moreButton: {
        position: 'absolute',
        bottom: 50
    },
    moreButtonTitle: {
        color: '#67adfe',
        fontSize: 16,
        fontWeight: '600'
    },
});

export default MessageLogin;
