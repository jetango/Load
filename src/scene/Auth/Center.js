import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions, Slider, AsyncStorage, PixelRatio} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'

class Center extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: '认证中心'
    });

    constructor(props: Object) {
        super(props);
        { (this: any).completeInfo = this.completeInfo.bind(this) }
    }

    completeInfo(type) {
        
    }

    render() {
        return (
            <View  style={styles.container}>
                <Paragraph style={styles.title}>认证越多，信用额度就会越高哦</Paragraph>
                <View style={styles.subContainerBox}>
                    <View style={[styles.subContainer, styles.borderBottom]}>
                        <TouchableOpacity style={[styles.flex, styles.alignItems, styles.justifyContent, styles.item]}
                            onPress={this.completeInfo('Personal')}
                        >
                            <Heading1 style={styles.heading}>个人信息</Heading1>
                            <Heading2 style={styles.heading2}>未完善</Heading2>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.flex, styles.alignItems, styles.justifyContent, styles.item, styles.borderLeft]}
                            onPress={this.completeInfo('Contact')}
                        >
                            <Heading1 style={styles.heading}>紧急联系人</Heading1>
                            <Heading2 style={styles.heading2}>未完善</Heading2>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.subContainer}>
                        <TouchableOpacity style={[styles.flex, styles.alignItems, styles.justifyContent, styles.item]}
                            onPress={this.completeInfo('Operator')}
                        >
                            <Heading1 style={styles.heading}>手机运营商</Heading1>
                            <Heading2 style={styles.heading2}>未完善</Heading2>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.flex, styles.alignItems, styles.justifyContent, styles.item, styles.borderLeft]}
                            onPress={this.completeInfo('Zhima')}
                        >
                            <Heading1 style={styles.heading}>芝麻授信</Heading1>
                            <Heading2 style={styles.heading2}>未完善</Heading2>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Paragraph style={styles.footer}>银行级数据加密保护</Paragraph>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        paddingTop: 8,
        paddingBottom: 8
    },
    footer: {
        paddingTop: 20,
        paddingBottom: 20
    },
    heading: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#656565'
    },
    heading2: {
        color: '#bbb'
    },
    subContainerBox: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        paddingTop: 40,
        paddingBottom: 40
    },
    flex: {
        flex: 1
    },
    alignItems: {
        alignItems: 'center'
    },
    justifyContent: {
        justifyContent: 'center'
    },
    borderBottom: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#e6e6e6',
        borderStyle: 'solid'
    },
    borderLeft: {
        borderLeftWidth: 1 / PixelRatio.get(),
        borderLeftColor: '#e6e6e6',
        borderStyle: 'solid'
    }

})

export default Center;
