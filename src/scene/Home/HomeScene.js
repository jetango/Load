import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions, Slider, AsyncStorage} from 'react-native'

import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'
import { screen, system, tool , px2dp} from '../../common'
import { color, DetailCell, NavigationItem, SpacingView, Button } from '../../widget'
import Swiper from 'react-native-swiper'
import Separator from '../../widget/Separator'
const bannerImages = [
    require('../../img/banner1.jpg'),
    require('../../img/banner2.png')
];

const STORAGE_USER = '@AsyncStorage:user_info'

class MineScene extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    constructor(props: Object) {
        super(props)

        { (this: any).immediatelyApply = this.immediatelyApply.bind(this) }
    }

    async immediatelyApply() {
        // this.props.navigation.navigate('ConfirmLoanScene', { info: info })
        let userInfo = await this._getUserInfo()
        if (userInfo) {
            this.props.navigation.navigate('ConfirmLoanScene', {title: '借款'})
        } else {
            this.props.navigation.navigate('PhoneInputLogin', {title: '登陆', jumpStyle: 1})
        }
    }

    async _getUserInfo() {
        try {
            return await AsyncStorage.getItem(STORAGE_USER)
        } catch(error) {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.background }}>
                <ScrollView
                    >
                    <Swiper
                        height={px2dp(130)}
                        autoplay={true}
                        bounces={true}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[0]} resizeMode="stretch"/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[1]} resizeMode="stretch"/>
                        </View>
                    </Swiper>
                    <View style={styles.infoContent}>
                        <View style={styles.infoTitle}>
                            <Text>尾号9262，正常还款，成功提额至1200元</Text>
                        </View>
                        <Separator />
                    </View>
                    <View>
                        <View style={styles.infoContent}>
                            <View style={styles.infoLimit}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <HeadingBig>1500</HeadingBig>
                                    <Heading2>借款金额(元)</Heading2>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <HeadingBig>14</HeadingBig>
                                    <Heading2>借款期数(天)</Heading2>
                                </View>
                            </View>
                            <Separator />
                        </View>
                        <View style={styles.sliderBox}>
                            <Slider minimumValue={200} maximumValue={1500} step={100} value={1500}></Slider>
                            <View style={styles.sliderInfo}>
                                <Text>200元</Text>
                                <Text>1500元</Text>
                            </View>
                            <Slider minimumValue={7} maximumValue={14} step={7} value={14}></Slider>
                            <View  style={styles.sliderInfo}>
                                <Text>7天</Text>
                                <Text>14天</Text>
                            </View>
                        </View>
                        <View style={styles.feeInfo}>
                            <Text>到期应还：<Text>1500.00元</Text></Text>
                            <Text>综合费用：<Text>225.00元</Text></Text>
                        </View>
                        <View style={styles.buttonBox}>
                            <Button title="立即申请"
                                containerStyle={styles.containerStyle}
                                style={styles.style}
                                onPress={this.immediatelyApply}
                            >
                            </Button>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}><Paragraph>不向学生提供服务</Paragraph></View>
                    </View>
                    <View>
                        <View style={[styles.justifyContent, styles.evaluateTitle]}><Heading1>经我们仔细评估您的信用额度为：</Heading1></View>
                        <View style={[styles.justifyContent]}><Text>1500元</Text></View>
                        <View style={[styles.justifyContent, styles.evaluateTitle]}>
                            <Heading1>离借款只差一步啦！</Heading1>
                            <Heading1 style={{color: color.theme}}>绑定收款银行卡&gt;&gt;</Heading1>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: color.theme,
        paddingBottom: 20
    },
    image: {
        height: px2dp(130),
        width: Dimensions.get('window').width
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    },
    infoContent: {
        paddingRight: 20,
        paddingLeft: 20
    },
    infoTitle: {
        height: 40,
        justifyContent: 'center'
    },
    infoLimit: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20
    },
    justifyContent: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    sliderBox: {
        padding: 20
    },
    sliderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    feeInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
        paddingLeft: 30,
        paddingRight: 30
    },
    buttonBox: {
        paddingRight: 30,
        paddingLeft: 30,
        marginBottom: 10
    },
    style: {
        color: '#fff',
        fontWeight: 'bold'
    },
    containerStyle: {
        backgroundColor: color.theme,
        height: 40,
        borderRadius: 40
    },
    evaluateTitle: {
        paddingTop: 40,
        paddingBottom: 50
    }
});

export default MineScene;
