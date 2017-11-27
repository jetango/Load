import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, WebView, InteractionManager, StatusBar, TouchableOpacity, ScrollView, Image, CheckBox} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { screen, system, tool } from '../../common'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'

class ConfirmLoanScene extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: navigation.state.params.title,
    });

    state: {
        source: Object
    }

    constructor(props: Object) {
        super(props)
        this.state = {
            source: {}
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            // this.props.navigation.setParams({ title: '加载中' })
            // this.setState({ source: { uri: this.props.navigation.state.params.url } })
        })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.background }}>
                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity>
                            <View style={[styles.content, this.props.style]}>
                                <Heading2>借款金额</Heading2>
                                <View style={{ flex: 1, backgroundColor: 'blue' }} />
                                <Paragraph style={{ color: '#999999' }}>1500（元）</Paragraph>
                            </View>
                            <Separator />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity>
                            <View style={[styles.content, this.props.style]}>
                                <Heading2>借款期数</Heading2>
                                <View style={{ flex: 1, backgroundColor: 'blue' }} />
                                <Paragraph style={{ color: '#999999' }}>14（天）</Paragraph>
                            </View>
                            <Separator />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity>
                            <View style={[styles.content, this.props.style]}>
                                <Heading2>实际到账</Heading2>
                                <View style={{ flex: 1, backgroundColor: 'blue' }} />
                                <Paragraph style={{ color: '#999999' }}>1275.0（元）</Paragraph>
                            </View>
                            <Separator />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity>
                            <View style={[styles.content, this.props.style]}>
                                <Heading2>服务费用</Heading2>
                                <View style={{ flex: 1, backgroundColor: 'blue' }} />
                                <Paragraph style={{ color: '#999999' }}>225.0（元）</Paragraph>
                            </View>
                            <Separator />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity>
                            <View style={[styles.content, this.props.style]}>
                                <Heading2>到账银行</Heading2>
                                <View style={{ flex: 1, backgroundColor: 'blue' }} />
                                <Paragraph style={{ color: '#999999' }}>中国建设银行1641</Paragraph>
                                <Image style={styles.arrow} source={require('../../img/Public/cell_arrow.png')} />
                            </View>
                            <Separator />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.tips}><Text>您将在14天后还款1500元</Text></View>
                    <View style={styles.buttonBox}>
                        <Button title="确认申请"
                            containerStyle={styles.containerStyle}
                            style={styles.style}
                            onPress={this.immediatelyApply}
                        >
                        </Button>
                    </View>
                    <View style={styles.protocal}>
                        <CheckBox
                            title='Click Here'
                            checked='true'
                        />
                        <Text>我已阅读并同意</Text>
                        <Text style={{color: color.theme}}>&lt;&lt;现金侠借款协议&gt;&gt;</Text>
                        <Text style={{color: color.theme}}>&lt;&lt;平台服务协议平台服务协议&gt;&gt;</Text>
                    </View>
                    <View style={{justifyContent: 'center', flexDirection: 'row'}}><Text style={{color: '#999999'}}>银行级数据加密保护</Text></View>
                </ScrollView>
            </View>
        );
    }

    renderCells() {

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    },
    tips: {
        padding: 15,
    },
    buttonBox: {
        paddingRight: 15,
        paddingLeft: 15,
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
    protocal: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap:'wrap'
    }
});

export default ConfirmLoanScene;
