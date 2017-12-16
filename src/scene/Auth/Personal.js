import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions, Slider, AsyncStorage, PixelRatio} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'
import Picker from 'react-native-picker'
import area from './area.json';

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

let educational = ['本科以上', '本科', '高中', '初中', '初中以下']

class Personal extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity style={styles.rightSaveBtn}>
                <Heading1 style={styles.rightSaveTitle}>保存</Heading1>
            </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: color.theme},
        title: "个人信息",
    })

    constructor(props: Object) {
        super(props)

        this.state = {
            submitData: {
                educationalVal: '',
                area: ''
            }
        }
    }

    componentDidMount() {
        // this._initEducationalPicker()
    }

    componentWillUnmount() {
        Picker.hide();
    }

    _createAreaData() {
        let data = [];
        let len = area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    _showAreaPicker() {
        let self = this
        Picker.init({
            pickerData: this._createAreaData(),
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '',
            pickerConfirmBtnColor: [0, 0, 0, 1],
            pickerCancelBtnColor: [0, 0, 0, 1],
            pickerToolBarBg: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            selectedValue: ['上海', '上海', '浦东新区'],
            onPickerConfirm: pickedValue => {
                self.setState({
                    submitData: {
                        area: pickedValue.join(' ')
                    }
                });
            }
        });
        Picker.show();
    }

    _initEducationalPicker() {
        var self = this
        Picker.init({
            pickerData: educational,
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            pickerTitleText: '',
            pickerConfirmBtnColor: [0, 0, 0, 1],
            pickerCancelBtnColor: [0, 0, 0, 1],
            pickerToolBarBg: [255, 255, 255, 1],
            pickerBg: [255, 255, 255, 1],
            selectedValue: [educational[0]],
            onPickerConfirm: data => {
                self.setState({
                    submitData: {
                        educationalVal: data[0]
                    }
                });
            }
        });
        Picker.show()
    }

    render() {
        let {educationalVal, area} = this.state.submitData
        return (
            <ScrollView  style={styles.container}>
                <View style={styles.emptySeparator}></View>
                <Separator />
                <TouchableOpacity>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>真实姓名</Heading1>
                        {/* <Heading1 style={[styles.rightPosition, styles.heading]}>事XX名</Heading1> */}
                        <TextInput
                            style={{height: 40, borderWidth: 0, paddingRight: 15, paddingLeft: 15}}
                            placeholder="请填写真实姓名，保存后无法修改"
                        />
                    </View>
                    <Separator />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>身份证号</Heading1>
                        <TextInput
                            style={{height: 40, borderWidth: 0, paddingRight: 15, paddingLeft: 15}}
                            placeholder="请填写身份证号，保存后无法修改"
                        />
                    </View>
                    <Separator />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._initEducationalPicker.bind(this)}>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>教育程度</Heading1>
                        <View style={[styles.rightPosition, styles.secondCommonStyle]}>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>
                                {educationalVal ? educationalVal : '请选择'}
                            </Heading1>
                            <Image style={[styles.rightArrow]} source={require('../../img/Public/cell_arrow.png')}/>
                        </View>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <TouchableOpacity onPress={this._showAreaPicker.bind(this)}>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>现居地址</Heading1>
                        <View style={[styles.rightPosition, styles.secondCommonStyle]}>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>
                                {area ? area : '请选择'}
                            </Heading1>
                            <Image style={[styles.rightArrow]} source={require('../../img/Public/cell_arrow.png')}/>
                        </View>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <View style={styles.addressContainer}>
                    <TextInput
                        style={[styles.addressInput, styles.leftPosition]}
                        placeholder="请填写详细地址" />
                    {/* <Image style={[styles.closeImg, styles.rightPosition]} /> */}
                    {/* <Separator /> */}
                </View>
                <Separator />
                <View style={styles.bottomContainer}>   
                    <Image resizeMode="cover" style={styles.encryptImg} source={require('../../img/Public/icon_bank_encryption_orange.png')}/>
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
    emptySeparator: {
        height: 15,
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
    },
    encryptTitle:{
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '700',
        color:'#a1a0a0'
    }
})

export default Personal;
