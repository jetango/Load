import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions, Slider, AsyncStorage, PixelRatio} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'
import Picker from 'react-native-picker'

let contactList = ['父母', '兄弟', '姐妹', '配偶']

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class Contact extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "紧急联系人",
    });

    constructor(props: Object) {
        super(props)
        this.state = {
            dictPeople: '',
            otherPeople: ''
        }
    }

    _initContactPicker(type) {
        var self = this
        Picker.init({
            pickerData: contactList,
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '',
            pickerConfirmBtnColor: [0, 0, 0, 1],
            pickerCancelBtnColor: [0, 0, 0, 1],
            pickerToolBarBg: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            selectedValue: [contactList[0]],
            onPickerConfirm: data => {
                if (type == 1) {
                    self.setState({
                        dictPeople: data[0]
                    })
                } else {
                    self.setState({
                        otherPeople: data[0]
                    });
                }
            }
        });
        Picker.show()
    }

    render() {
        let {dictPeople, otherPeople} = this.state
        return (
            <ScrollView  style={styles.container}>
                <View style={styles.tipContainer}>
                    <Paragraph style={[styles.encryptTitle, styles.leftPosition]}>为获得更高额度，需获取通讯录权限</Paragraph>
                </View>
                <Separator />
                <View style={styles.commonCellStyle}>
                    <Heading1 style={[styles.heading, styles.leftPosition]}>直系亲属联系人</Heading1>
                </View>
                <Separator />
                <TouchableOpacity onPress={this._initContactPicker.bind(this, 1)}>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>与本人关系</Heading1>
                        <View style={[styles.rightPosition, styles.secondCommonStyle]}>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>
                                {dictPeople ? dictPeople : '请选择'}
                            </Heading1>
                            <Image style={[styles.rightArrow]} source={require('../../img/Public/cell_arrow.png')}/>
                        </View>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>紧急联系人</Heading1>
                        <View style={[styles.rightPosition, styles.secondCommonStyle]}>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>15#####2342</Heading1>
                            <Image style={[styles.rightArrow]} source={require('../../img/Public/cell_arrow.png')}/>
                        </View>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <Separator  />
                <View style={[styles.commonCellStyle, styles.partition]}>
                    <Heading1 style={[styles.heading, styles.leftPosition]}>其他联系人</Heading1>
                </View>
                <Separator />
                <TouchableOpacity onPress={this._initContactPicker.bind(this, 2)}>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>与本人关系</Heading1>
                        <View style={[styles.rightPosition, styles.secondCommonStyle]}>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>
                                {otherPeople ? otherPeople : '请选择'}
                            </Heading1>
                            <Image style={[styles.rightArrow]} source={require('../../img/Public/cell_arrow.png')}/>
                        </View>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>紧急联系人</Heading1>
                        <View style={[styles.rightPosition, styles.secondCommonStyle]}>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>123***999</Heading1>
                            <Image style={[styles.rightArrow]} source={require('../../img/Public/cell_arrow.png')}/>
                        </View>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <View style={styles.bottomContainer}>
                    <Image resizeMode="cover" style={styles.encryptImg} source={require('../../img/Public/icon_bank_encryption_orange.png')} />
                    <Paragraph style={styles.encryptTitle}>银行级数据加密保护</Paragraph>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    heading: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#373737'
    },
    rightSaveTitle: {
        marginRight: 10,
        color: '#fff'
    },
    tipContainer: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    commonCellStyle: {
        height: 60,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    secondCommonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftPosition: {
        marginLeft: 15,
    },
    rightPosition: {
        marginRight: 15
    },
    secondLeftPosition: {
        marginRight: 5,
    },
    rightArrow: {
        width: 16,
        height: 16
    },
    partition: {
        marginTop: 20
    },
    // address container
    addressContainer: {
        height: 60,
        width: ScreenWidth,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addressInput: {
        height: 60,
        flex: 1,
        backgroundColor: '#fff'
    },
    closeImg: {
        width: 25,
        height: 25,
        backgroundColor: 'red'
    },
    // bottom
    bottomContainer: {
        marginTop: 30,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    encryptImg: {
        width: 15,
        height: 20,
        // backgroundColor: 'red'
    },
    encryptTitle:{
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '700',
        color:'#a1a0a0'
    }
})

export default Contact;
