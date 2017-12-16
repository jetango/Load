//import liraries
import React, { PureComponent } from 'react'
import { View, Text, Dimensions, TextInput, StyleSheet, TouchableOpacity, Image, AsyncStorage} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { NavigationActions } from 'react-navigation'
const STORAGE_USER = '@AsyncStorage:user_info'

var {width, height, scale} = Dimensions.get('window');

class PasswordLogin extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "密码登录",
    });

    state: {
        isBtnEnabled: boolean
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            isBtnEnabled: false,
        };
        { (this: any).nextBtnDidClicked = this.nextBtnDidClicked.bind(this) }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode="cover" style={styles.logoImg} source={require('../../img/Login/icon_login_pwdLogo.png')} />
                <Text style={styles.phoneNum}>18211110000</Text>
                <View style={styles.pwdInputContainer}>
                    <Image resizeMode="center" style={styles.phoneImg} source={require('../../img/Login/icon_login_lock.png')}/>
                    <TextInput
                        style={styles.phoneInput}
                        autoFocus={true}
                        maxLength={16}
                        placeholder="请输入登录密码"
                        secureTextEntry={true}
                        onChangeText={(text) => {this.phoneNumChange(text, this)}}/>
                </View>
                <TouchableOpacity
                    style={[styles.nextButton, this.state.isBtnEnabled ? styles.nextBtnEnable : styles.nextBtnDisenable]}
                    onPress={this.nextBtnDidClicked}>
                    <Text style={styles.nextButtonTitle}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.messageButton}
                    onPress={this.messageLoginBtnDidClicked}>
                    <Text style={styles.messageButtonTitle}>使用短信验证码登录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.moreButton}
                    onPress={this.moreBtnDidClicked}>
                    <Text style={styles.moreButtonTitle}>更多</Text>
                </TouchableOpacity>
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

    messageLoginBtnDidClicked(self) {
        // 跳转短信验证码登录
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
        marginTop: 20
    },
    //
    pwdInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.0 / scale,
        borderColor: '#5e70ff',
        borderRadius: 4,
        height: 40,
        width: 300,
        marginTop: 30,
    },
    logoImg: {
        width: 100,
        height: 112,
        marginTop: 40,
    },
    phoneImg: {
        width: 20,
        height: 40,
        marginLeft: 15,
        marginRight: 15
    },
    phoneInput: {
        fontSize: 16,
        flex: 1
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

export default PasswordLogin;
