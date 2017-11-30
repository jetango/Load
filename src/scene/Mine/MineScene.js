//import liraries
import React, { PureComponent } from 'react'
import { View, Dimensions, FlatList, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'
import MineSceneCell from './MineSceneCell'

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

var configs = [{
    id: '1',
    logoImg: '',
    title: '借款记录',
    content: '',
    jumpLink: 'LoanList'
}, {
    id: '2',
    logoImg: '',
    title: '我的优惠券',
    content: '',
    jumpLink: 'SettingTradePwd'
}, {
    id: '3',
    logoImg: '',
    title: '帮助中心',
    content: '',
    jumpLink: 'MessageCenter'
}, {
    id: '4',
    logoImg: '',
    title: '完善资料',
    content: '',
    jumpLink: 'PhoneInputLogin-1'
}, {
    id: '5',
    logoImg: '',
    title: '我的银行卡',
    content: '',
    jumpLink: 'BindBankCard'
}, {
    id: '6',
    logoImg: '',
    title: '我的邀请码',
    content: 'Adg23sssfsd',
    jumpLink: 'PhoneInputLogin-2'
}];

class MineScene extends PureComponent {
    // 导航栏设置
    static navigationOptions = ({ navigation }) => ({
        header: null // 隐藏导航栏
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.topAccountContainer}>
                        <Image style={styles.emptyImg} />
                        <Text style={styles.accountPhone}>152****9457</Text>
                        <TouchableOpacity style={styles.settingBtn}>
                            <Image style={styles.settingImg} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.moneyContainer}>
                        <Text style={styles.amountTitle}>总额度(元)</Text>
                        <View style={styles.numContainer}>
                            <Text style={styles.loanNumTitle}>1500</Text>
                            <TouchableOpacity style={styles.questionBtn}>
                                <Image style={styles.questionImg} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.amountTitle}>剩余可借：1500元</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <FlatList 
                        style={styles.listContainer}
                        data={configs}
                        keyExtractor={(item, index) => item.id}
                    renderItem={({item}) => {return <MineSceneCell config={item} jumpNextPage={(item) => this._jump(item, this)}></MineSceneCell>}} />
                </View>
            </View>
        )
    }
    
    // event
    _jump(item, self) {
        const prefix = "PhoneInputLogin-";
        let link = item.jumpLink;
        if (link.indexOf(prefix) == 0) {
            var tailStr = link.substr(prefix.length, link.length - prefix.length);
            self.props.navigation.navigate(prefix.substr(0, prefix.length - 1), {jumpStyle: tailStr})
        } else {
            self.props.navigation.navigate(link)
        }
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eff3f6',
        flexDirection: 'column',
    },
    topContainer: {
        width: ScreenWidth,
        height: 310,
        backgroundColor: '#5b6dff',
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15
    },
    topAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40
    },
    emptyImg: {
        width: 30,
        height: 30 // 和右侧图片大小一致，保证中间的手机号居中
    },
    accountPhone: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500'
    },
    settingImg: {
        backgroundColor: 'red',
        width: 30,
        height: 30
    },
    // 额度
    moneyContainer: {
        flexDirection: 'column',
        width: ScreenWidth,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    amountTitle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10
    },
    numContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    loanNumTitle: {
        fontSize: 40,
        color: 'white',
        fontWeight: '600'
    },
    questionImg: {
        width: 15,
        height: 15,
        backgroundColor: 'red'
    },
    bottomContainer: {
        marginTop: -60,
        width: ScreenWidth - 30,
        marginLeft: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white'
    }
});

export default MineScene;