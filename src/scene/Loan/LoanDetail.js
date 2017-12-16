import React, { PureComponent } from 'react'
import { FlatList, Dimensions, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import LoanListCell from './LoanListCell'
import LoanListData from '../../mockData/LoanListData'
import { screen, system, tool , px2dp} from '../../common'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'

var {width, height, scale} = Dimensions.get('window');

class LoanDetail extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity style={styles.rightMoreBtn}>
                <Text style={styles.rightMoreTitle}>缺钱点我</Text>
            </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: color.theme},
        title: '借款详情'
    })

    constructor(props: Object) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.detailBox}>
                    <View style={styles.item}>
                        <Text style={styles.headlineText}>借款金额</Text>
                        <Text style={styles.detailText} numberOfLines={1}>1500元</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.headlineText}>实际到账</Text>
                        <Text style={styles.detailText} numberOfLines={1}>1200元</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.headlineText}>服务费用</Text>
                        <Text style={styles.detailText} numberOfLines={1}>780元</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.headlineText}>借款天数</Text>
                        <Text style={styles.detailText} numberOfLines={1}>7</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.headlineText}>申请时间</Text>
                        <Text style={styles.detailText} numberOfLines={1}>2017-11-11</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.headlineText}>收款银行</Text>
                        <Text style={styles.detailText} numberOfLines={1}>中国建设银行(7879)</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.headlineText}>借款合同</Text>
                        <Text style={styles.detailText} numberOfLines={1}>&lt;&lt;借款协议&gt;&gt;</Text>
                    </View>
                </View>
                <View style={[styles.container, styles.prossBox]}>
                    <Heading1>申请进度</Heading1>
                </View>
                <View style={styles.processContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.circleImg} resizeMode="center" source={require('../../img/Loan/icon_audit_selected.png')} />
                        <Image style={styles.verticalImg} resizeMode="center" source={require('../../img/Loan/icon_loan_light_vertical.png')} />
                        <Image style={styles.verticalImg} resizeMode="center" source={require('../../img/Loan/icon_loan_gray_vertical.png')} />
                        <Image style={styles.circleImg} resizeMode="center" source={require('../../img/Loan/icon_loan_gray_selected.png')} />
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
        )
    }
}

const styles = StyleSheet.create({
    processContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingLeft: 15
    },
    imageContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 20,
        paddingTop: 20,
        marginRight: 15
    },
    circleImg: {
        width: 20,
        height: 20
    },
    verticalImg: {
        width: 20,
        height: 20
    },


    container: {
        flex: 1,
        backgroundColor: color.background
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomWidth: screen.onePixel,
        borderBottomColor: '#e9e9ef',
    },
    detailBox: {
        backgroundColor: '#fff',
        marginTop: 15
    },
    headlineText: {
        fontSize: 14,
        flex: 1
    },
    rightMoreBtn: {
        marginRight: 10
    },
    rightMoreTitle: {
        color: 'white',
        fontSize: 13,
        fontWeight: '500'
    },
    prossBox: {
        height: 60,
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
        justifyContent: 'center'
    },
    auditBox: {
        backgroundColor: '#fff',
        paddingRight: 15,
        // paddingLeft: 60,
        paddingTop: 15,
        paddingBottom: 30,
        marginBottom: 30
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
})

export default LoanDetail;
