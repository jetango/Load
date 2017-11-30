//import liraries
import React, { PureComponent } from 'react'
import { FlatList, Dimensions, Picker, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'



let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

let pickerViewOptions = [{
    id: "1",
    name: "中国工商银行",
    value: "1"
}, {
    id: "2",
    name: "招商银行",
    value: "2"
}, {
    id: "3",
    name: "中信银行",
    value: "3"
}, {
    id: "4",
    name: "中国银行",
    value: "4"
}, {
    id: "5",
    name: "中国农业银行",
    value: "5"
}];

class BindBankCard extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "绑定银行卡",
    });

    state: {
        authName: String,
        bankName: String,
        bankCode: String,
        phoneNum: String,
        messageNum: String
    }

    constructor(props: Object) {
        super(props);
        this.state = {
            submitData: {
                authName: "郭河绪",
                bankName: "请选择银行",
                bankCode: "",
                phoneNum: "",
                messageNum: ""  
            },
            pickerViewShow: false,
            pickerViewSelectedValue: '2'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headContainer}><Text style={styles.headTip}>请填写银行卡信息</Text></View>
                {/* 姓名 */}
                <View style={styles.rowcontainer}>
                    <Text style={styles.titleText}>持卡人</Text>
                    <Text style={styles.middelContentText}>{this.state.submitData.authName}</Text>
                    <Image style={styles.rightIcon} />
                </View>
                {/* 所属银行 */}
                <View style={styles.rowcontainer}>
                    <Text style={styles.titleText}>选择银行</Text>
                    <TouchableOpacity 
                        style={styles.middelContentSelect} 
                        onPress={() => {this._selectBankName(this)}}>
                        <Text style={{fontSize: 16}}>{this.state.submitData.bankName}</Text>
                    </TouchableOpacity>
                    <Image style={styles.rightIcon} />
                </View>
                {/* 银行卡号 */}
                <View style={styles.rowcontainer}>
                    <Text style={styles.titleText}>银行卡号</Text>
                    <TextInput 
                        style={styles.inputContent}
                        keyboardType="numeric"
                        ref="bankInput"
                        placeholder="请输入银行卡号"/>
                </View>
                {/* 手机号 */}
                <View style={styles.rowcontainer}>
                    <Text style={styles.titleText}>手机号</Text>
                    <TextInput 
                        style={styles.inputContent}
                        keyboardType="numeric"
                        maxLength = {11}
                        ref="bankInput"
                        placeholder="请输入银行预留手机号"/>
                </View>
                {/* 验证码 */}
                <View style={styles.rowcontainer}>
                    <Text style={styles.titleText}>验证码</Text>
                    <TextInput 
                        style={styles.inputContent}
                        keyboardType="numeric"
                        ref="messageInput"
                        placeholder="请输入验证码"/>
                    <TouchableOpacity style={styles.msgContentBtn}>
                        <Text style={styles.msgContentTitle}>点击获取</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.bindBankBtn}>
                    <Text style={styles.bindBankTitle}>确定绑卡</Text>
                </TouchableOpacity>
                <View style={styles.encryptContainer}>
                    <Image style={styles.encryptLogo} />
                    <Text style={styles.encryptText}>银行级数据加密防护</Text>
                </View>
                {/* <TouchableOpacity style={styles.moreLoanBtn} onPress={this._moreLoanBtnClicked}>
                    <Text style={styles.moreLoanTitle}>更多借款，请点击查看>></Text>
                </TouchableOpacity> */}
                {this._renderPickerView()}
            </View>
        )
    }

    _renderPickerView() {
        if (this.state.pickerViewShow) {
            return (
                <View style={styles.pickerContainer}>
                    <Picker
                        style={styles.pickerView}
                        selectedValue={this.state.pickerViewSelectedValue}
                        onValueChange={(itemValue, itemPosition) => {this._bankNameChanged(itemValue, itemPosition, this)}}>
                        {this._renderPickerViewItem()}
                    </Picker>
                </View>
                
            )
        } 
        return null;
    }

    _renderPickerViewItem() {
        return pickerViewOptions.map((option) => <Picker.Item label={option.name} value={option.value} key={option.id} />) 
    }

    // event
    _moreLoanBtnClicked(e) {
        
    }

    // picker bank name change
    _bankNameChanged(itemValue, itemPosition, self) {
        var selectedObj = pickerViewOptions[itemPosition];
        self.state.submitData.bankName = selectedObj.name;
        self.setState({
            pickerViewSelectedValue: itemValue
        });
        self._selectBankName(self);
    }

    _selectBankName(self) {
        // 通过设置state来更改UI组件的是否展示
        self.setState({pickerViewShow: !self.state.pickerViewShow});
    }
};

const styles = StyleSheet.create({
    rightMoreBtn: {
        marginRight: 10
    },
    rightMoreTitle: {
        color: 'white',
        fontSize: 13,
        fontWeight: '500'
    },
    headerTitle: {
        color: 'white',
        fontSize: 16
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        height: ScreenHeight
    },
    headContainer: {
        width: ScreenWidth,
        height: 30,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headTip: {
        color: '#b3b3b3',
        fontSize: 12,
        marginLeft: 15
    },
    listContainer: {
        width: ScreenWidth,
        backgroundColor: 'white'
    },
    moreLoanBtn: {
        marginTop: 40,
        width: 160
    },
    moreLoanTitle: {
        fontSize: 13,
        color: '#67adfe',
        fontWeight: '500'
    },

    // row style
    rowcontainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e6e6e6',
        height: 45
    },
    titleText: {
        width: 80,
        fontSize: 16,
        marginLeft: 15
    },
    middelContent: {
        flex: 1,
    },
    middelContentText: {
        fontSize: 16,
        flex: 1
    },
    middelContentSelect: {
        flex: 1,
    },
    inputContent: {
        fontSize: 16,
        flex: 1
    },
    rightIcon: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        marginRight: 15
    },
    msgContentBtn: {
        marginRight :15,
        width: 90,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 0.5,
        borderLeftColor: '#e6e6e6'
    },
    msgContentTitle: {
        fontSize: 16,
        color: '#67adfe',
        fontWeight: '500'
    },
    // bind bank btn
    bindBankBtn: {
        backgroundColor: '#5a6fff',
        width: 300,
        height: 40,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    bindBankTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600' 
    },
    // encrypt 
    encryptContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    encryptLogo: {
        backgroundColor: 'red',
        width: 15, 
        height: 15,
        marginRight: 8
    },
    encryptText: {
        fontSize: 12,
        color: '#57bc57',
        fontWeight: '500'
    },
    // picker view
    pickerContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: ScreenWidth,
        height: ScreenHeight - 64, // ????? 不同屏幕，navigationBar+statusbar高度不同，尤其是安卓
        position: 'absolute',
        left: 0,
        top: 0,
    },
    pickerView: {
        width: ScreenWidth,
        backgroundColor: 'white',
        position: 'absolute',
        left: 0,
        bottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#e6e6e6',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e6e6e6',
    }
});

export default BindBankCard;