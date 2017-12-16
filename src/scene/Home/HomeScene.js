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

        this.state = {
            price: '1500',
            days: '14'
        }
        { (this: any).immediatelyApply = this.immediatelyApply.bind(this) }
    }

    componentDidMount() {

    }

    async immediatelyApply() {
        // this.props.navigation.navigate('ConfirmLoanScene', { info: info })
        let userInfo = await this._getUserInfo()
        let {price, days} = this.state
        if (userInfo) {
            this.props.navigation.navigate('ConfirmLoanScene', {
                title: '借款', price, days,
                onGoBack: () => {
                    console.log(123)
                }
            })
        } else {
            this.props.navigation.navigate('PhoneInputLogin', {title: '登陆', jumpStyle: 1, price, days})
        }
    }

    async _getUserInfo() {
        try {
            return await AsyncStorage.getItem(STORAGE_USER)
        } catch(error) {

        }
    }

    _bindBankCard() {
        this.props.navigation.navigate('BindBankCard')
    }

    _changedPrice(value) {
        this.setState({
            price: value
        })
    }

    _changedDays(value) {
        this.setState({
            days: value
        })
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
                            <Image style={styles.trumpetImg} resizeMode="center" source={require('../../img/Home/icon_homepage_trumpet.png')} />
                            <Text>尾号9262，正常还款，成功提额至1200元</Text>
                        </View>
                        <Separator />
                    </View>
                    <View style={{display: 'none'}}>
                    {/* <View> */}
                        <View style={styles.infoContent}>
                            <View style={styles.infoLimit}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <HeadingBig>{this.state.price}</HeadingBig>
                                    <Heading2>借款金额(元)</Heading2>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', borderLeftWidth: screen.onePixel, borderLeftColor: '#ccc'}}>
                                    <HeadingBig>{this.state.days}</HeadingBig>
                                    <Heading2>借款期数(天)</Heading2>
                                </View>
                            </View>
                            <Separator />
                        </View>
                        <View style={styles.sliderBox}>
                            <Slider
                                minimumValue={200}
                                maximumValue={1500}
                                step={100}
                                value={1500}
                                onSlidingComplete={this._changedPrice.bind(this)}
                            ></Slider>
                            <View style={styles.sliderInfo}>
                                <Text>200元</Text>
                                <Text>1500元</Text>
                            </View>
                            <Slider
                                minimumValue={7}
                                maximumValue={14}
                                step={7}
                                value={14}
                                onSlidingComplete={this._changedDays.bind(this)}
                            ></Slider>
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
                    <View style={{display: 'none'}}>
                        <View style={[styles.justifyContent, styles.evaluateTitle]}><Heading1 style={{fontSize: 18}}>经我们仔细评估您的信用额度为：</Heading1></View>
                        <View style={[styles.justifyContent, styles.evaluatePrice]}>
                            <Text style={styles.evaluateValue}>1500</Text>
                            <Text>元</Text>
                        </View>
                        <View style={[styles.justifyContent, styles.evaluateTitle]}>
                            <Heading1>离借款只差一步啦！</Heading1>
                            <Heading1 onPress={this._bindBankCard.bind(this)} style={{color: color.theme}}>绑定收款银行卡&gt;&gt;</Heading1>
                        </View>
                    </View>
                    <View style={{display: 'none'}}>
                        <View style={[styles.justifyContent, styles.evaluateTitle]}><Heading1 style={{fontSize: 18}}>额度评估中...</Heading1></View>
                        <View style={[styles.justifyContent, styles.evaluateLoading]}>
                            <Text>雷达图片</Text>
                            <Image />
                        </View>
                        <View style={[styles.justifyContent, styles.evaluateTitle]}>
                            <Heading1>离借款只差一步啦！</Heading1>
                            <Heading1 onPress={this._bindBankCard.bind(this)} style={{color: color.theme}}>绑定收款银行卡&gt;&gt;</Heading1>
                        </View>
                    </View>
                    <View style={styles.processContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={[styles.circleImg, styles.topPosition]} resizeMode="center" source={require('../../img/Loan/icon_audit_snow.png')} />
                            <Image style={styles.verticalImg} resizeMode="center" source={require('../../img/Loan/icon_audit_dashed.png')} />
                            <Image style={[styles.circleImg, styles.bottomPosition]} resizeMode="center" source={require('../../img/Loan/icon_audit_selected.png')} />
                        </View>
                        <View style={[styles.auditBox]}>
                            <View style={[styles.auditItem]}>
                                <Text style={[styles.auditTitle]}>审核中</Text>
                                <Text style={[styles.auditDesc]}>已进入风控审核状态，请耐心等待</Text>
                            </View>
                            <View style={[styles.auditItem]}>
                                <Text style={[styles.auditTitle, styles.textGray]}>申请提交成功2017-12-12 15:30</Text>
                                <Text style={[styles.auditDesc, styles.textGray]}>申请借款200元，期限7天，手续费19.6元</Text>
                            </View>
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
    evaluateValue: {
        fontSize: 50
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
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    trumpetImg: {
        width: 20,
        height: 20,
        marginRight: 10
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
    },
    evaluatePrice: {
        paddingTop: 30,
        paddingBottom: 80
    },
    //
    processContainer: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    imageContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 20,
        paddingTop: 30,
    },
    circleImg: {
        width: 20,
        height: 20
    },
    topPosition: {
        marginTop: 5,
    },
    verticalImg: {
        width: 40,
        height: 40,
    },
    auditBox: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 15
    },
    auditTitle: {
        fontSize: 18,
        paddingBottom: 5
    },
    auditItem: {
        paddingBottom: 15
    },
    textGray: {
        color: '#666'
    }
});

export default MineScene;
