import React, { PureComponent } from 'react'
import { View, TextInput, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions, Slider, AsyncStorage, PixelRatio} from 'react-native'
import { color, DetailCell, NavigationItem, SpacingView, Button, Separator } from '../../widget'
import { Heading1, Heading2, Paragraph, HeadingBig } from '../../widget/Text'

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

class CompletedOperator extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: color.theme},
        title: "手机运营商认证",
    });

    constructor(props: Object) {
        super(props);
        
    }

    render() {
        return (
            <ScrollView  style={styles.container}>
                <View style={styles.tipContainer}>  
                    <Image resizeMode="cover" style={styles.completedImg} source={require('../../img/Auth/icon_operator_completed.png')} />
                    <Text style={styles.completedTip}>恭喜您，运营商已完成认证</Text>
                </View>
                <TouchableOpacity style={styles.authenticationBtn} >
                    <Text style={styles.authenticationTitle}>已认证</Text>
                </TouchableOpacity>
                <View style={styles.encryptContainer}>
                    <Image resizeMode="cover" style={styles.encryptImg} source={require('../../img/Public/icon_bank_encryption_green.png')} />
                    <Text style={styles.encryptTitle}>银行级数据加密保护</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
    },
    tipContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    completedImg: {
        width: 150,
        height: 128,
    },
    completedTip: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30
    },
    authenticationBtn: {
        backgroundColor: '#5a6dff',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 30,
        marginTop: 100,
        marginBottom: 50
    },
    authenticationTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff'
    },
    encryptContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    encryptImg: {
        width: 13, 
        height: 16,
        marginRight: 10
    },
    encryptTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#56bc58',
    }
})

export default CompletedOperator;
