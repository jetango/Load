import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions, Slider, AsyncStorage, PixelRatio} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class Personal extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity style={styles.rightSaveBtn}>
                <Heading1 style={styles.rightSaveTitle}>保存</Heading1>
            </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: color.theme},
        title: "个人信息",
    });

    constructor(props: Object) {
        super(props);
    }

    render() {
        return (
            <ScrollView  style={styles.container}>
                <View style={styles.emptySeparator}></View>
                <Separator />
                <TouchableOpacity>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>真实姓名</Heading1>
                        <Heading1 style={[styles.rightPosition, styles.heading]}>事XX名</Heading1>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>身份证号</Heading1>
                        <Heading1 style={[styles.rightPosition, styles.heading]}>41204533***********42434</Heading1>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>教育程度</Heading1>
                        <View style={[styles.rightPosition, styles.secondCommonStyle]}>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>本科</Heading1>
                            <Image style={[styles.rightArrow]} />
                        </View>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.commonCellStyle}>
                        <Heading1 style={[styles.leftPosition, styles.heading]}>现居地址</Heading1>
                        <View style={[styles.rightPosition, styles.secondCommonStyle]}>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>上海市</Heading1>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>上海市</Heading1>
                            <Heading1 style={[styles.secondLeftPosition, styles.heading]}>浦东区</Heading1>
                            <Image style={[styles.rightArrow]} />
                        </View>
                    </View>
                    <Separator />
                </TouchableOpacity>
                <View style={styles.addressContainer}>
                    <TextInput 
                        style={[styles.addressInput, styles.leftPosition]}
                        placeholder="详细地址" />
                    <Image style={[styles.closeImg, styles.rightPosition]} />
                    {/* <Separator /> */}
                </View>
                <Separator />
                <View style={styles.bottomContainer}>
                    <Image style={styles.encryptImg} />
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
        width: 20,
        height: 20,
        backgroundColor: 'red'
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
        width: 20,
        height: 20,
        backgroundColor: 'red'
    },
    encryptTitle:{
        marginLeft: 5,
        color:'#a1a0a0'
    }
})

export default Personal;
