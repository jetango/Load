//import liraries
import React, { PureComponent } from 'react'
import { FlatList, Dimensions, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'


var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var pwdInputWidth = 300;
var pwdInputLength = 6;
var dotViewWidth = 6;
var itemWidth = pwdInputWidth / pwdInputLength;


class SettingTradePwd extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "设置交易密码",
    });

    state: {
        inputPwdStr: String,
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            inputPwdStr: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.settingPwdTitle}>请设置六位交易密码</Text>
                <View style={styles.pwdContainer}>
                    <TextInput 
                        value={this.state.inputPwdStr}
                        caretHidden={true}
                        style={styles.pwdInput}
                        keyboardType="numeric"
                        onChangeText={(text) => this._changeInputText(text, this)} />
                    {this._renderViewLines()}
                    {this._renderViewDots()}
                </View>
            </View>
        )
    }

    _renderViewLines() {
        var arr = [1, 2, 3, 4, 5];
        return (arr.map((idx) => <View key={idx} style={[styles.separateView, {left: (itemWidth * idx)}]}></View>));
    }

    _renderViewDots() {
        console.log('this.state.inputPwdStr = ' + this.state.inputPwdStr)
        var arr = new Array();
        for (var i = 0; i < this.state.inputPwdStr.length; i++) {
            arr.push(i);
        }
        return (arr.map(
            (item, index) => <View key={index} style={[styles.dotView, {left: ((itemWidth - dotViewWidth) / 2 + index * itemWidth)}]}></View>))
    }

    _changeInputText(text, self) {
        if (text.length > 6) return;
        // this.setState会导致整个UI都变化，而不只是该inputPwdStr属性相关的UI变更
        this.setState({
            inputPwdStr: text
        })
        console.log('text == ' + text);
        
    }
};

const styles = StyleSheet.create({
    headerTitle: {
        color: 'white',
        fontSize: 16
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: 'white'
    },
    settingPwdTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 60,
        marginBottom: 40
    },
    pwdInput: {
        height: 50,
        width: pwdInputWidth,
        borderColor: '#e6e6e6',
        borderWidth: 0.5,
        borderRadius: 4,
        color: 'white'
    },
    separateView: {
        position: 'absolute',
        top: 0,
        width: 0.5,
        height: 50,
        backgroundColor: '#e6e6e6'
    },
    dotView: {
        position: 'absolute',
        backgroundColor: 'black',
        width: dotViewWidth,
        height: dotViewWidth,
        borderRadius: 3,
        top: (50 - dotViewWidth) / 2
    }
});

export default SettingTradePwd;