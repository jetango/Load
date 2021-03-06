//import liraries
import React, { PureComponent } from 'react'
import { View, Dimensions, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import api from '../../networkapi'

var {width, height, scale} = Dimensions.get('window');

class PhoneInputLogin extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "急速现金侠",
    });

    state: {
        isCloseHidden: boolean,
        isBtnEnabled: boolean,
        phoneNum: String,
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            isCloseHidden: true,
            isBtnEnabled: false,
            phoneNum: ''
            // phoneValue: ''
        };
        // 不能使用如下方式，因为此时的this.state没被初始化
        // this.state.isCloseHidden = false;
        // this.state.isBtnEnabled = false;

        { (this: any).nextBtnDidClicked = this.nextBtnDidClicked.bind(this) }
    }

    async requestCheckReg(callback) {
        try {
            let response = await fetch(api.checkReg, {
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

    isPhoneFormat(phone) {
        if(phone.length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|)+\d{8})$/.test(phone) ) {
            return true;
        } else{
            return false;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image  resizeMode="cover" style={styles.logoImg} source={require('../../img/Login/icon_login_logo.png')} />
                <View style={styles.phoneContainer}>
                    <Image resizeMode="cover" style={styles.phoneImg} source={require('../../img/Login/icon_login_phone.png')} />
                    <TextInput
                        style={styles.phoneInput}
                        autoFocus={true}
                        maxLength={11}
                        placeholder="请输入注册/登录手机号"
                        value={this.state.phoneNum}
                        onChangeText={(text) => {this.phoneNumChange(text, this)}}/>
                    <TouchableOpacity
                        style={[styles.closeImg, this.state.isCloseHidden ? styles.closeImgHidden : styles.closeImgShow]}
                        onPress={() => this.deletePhoneNum(this)}>
                        <Image resizeMode="center"  style={{width: 20, height: 20}}  source={require('../../img/Public/icon_close.png')}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.nextButton, this.state.isBtnEnabled ? styles.nextBtnEnable : styles.nextBtnDisenable]}
                    onPress={this.nextBtnDidClicked}>
                    <Text style={styles.nextButtonTitle}>下一步</Text>
                </TouchableOpacity>
            </View>
        )
    }

    // event
    phoneNumChange(text, self) {
        this.setState({
            phoneNum: text
        })
        if (text.length > 0) {
            // 一般情况下setState() 总是触发一次重绘，除非在 shouldComponentUpdate() 中实现了条件渲染逻辑
            self.setState({isCloseHidden: false});
            // self.state.isCloseHidden = false;
        } else {
            self.setState({isCloseHidden: true});
        }

        if (text.length == 11) {
            self.setState({isBtnEnabled: true});
        } else {
            self.setState({isBtnEnabled: false});
        }
    }

    nextBtnDidClicked() {
        if (this.state.isBtnEnabled) {
            if (!this.isPhoneFormat(this.state.phoneNum)) {
                alert('请正确填写手机号');
                return;
            }
            //  API 请求，等待接口调试

            // this.requestCheckReg(function(respData) {
            //     var isReg = true;
            //     if (isReg == 0) {
            //         this.props.navigation.navigate('PasswordLogin', {phoneNum: this.state.phoneNum})
            //     } else {
            //         this.props.navigation.navigate('MessagePwdRegister', {phoneNum: this.state.phoneNum})
            //     }
            // });
            // 进入下一个页面 TO_DO
            // 请求API，获取数据，判断是否已经注册过，注册就跳转到登陆，否则注册页面

            let test = Math.round(Math.random() * 10) % 2
            if (test == 0) {
                // PasswordLogin
                this.props.navigation.navigate('PasswordLogin', {phoneNum: this.state.phoneNum})
            } else {
                this.props.navigation.navigate('MessagePwdRegister', {phoneNum: this.state.phoneNum})
            }

            // if (this.props.navigation.state.params.jumpStyle == "1") { // 登录
            //     this.props.navigation.navigate('PasswordLogin');
            // } else if (this.props.navigation.state.params.jumpStyle == "2") { // 注册
            //     this.props.navigation.navigate('MessagePwdRegister');
            // }
            // this.props.navigation.navigate('GroupPurchase', { info: info })
        }
    }

    deletePhoneNum(self) {
        // 删除输入的手机号 TO_DO
        self.setState({
            phoneNum: '',
            isBtnEnabled: false,
            isCloseHidden: true
        })
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
    logoImg: {
        borderRadius: 6,
        width: 100,
        height: 100,
        marginTop: 50,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.0 / scale,
        borderColor: '#5e70ff',
        borderRadius: 4,
        marginTop: 50,
        height: 40,
        width: 300,
    },
    phoneImg: {
        width: 20,
        height: 30,
        marginLeft: 10,
        marginRight: 10
    },
    phoneInput: {
        height: 40,
        fontSize: 16,
        flex: 1,
    },
    closeImg: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    closeImgShow: {
        display: 'flex'
    },
    closeImgHidden: {
        display: 'none'
    },
    //
    nextButton: {
        width: 300,
        height: 40,
        borderRadius: 30,
        marginTop: 30,
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
    }
});

export default PhoneInputLogin;
