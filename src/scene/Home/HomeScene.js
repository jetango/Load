import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, Dimensions} from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool , px2dp} from '../../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../../widget'
import Swiper from 'react-native-swiper'

const bannerImages = [
    require('../../img/banner1.jpg'),
    require('../../img/banner2.png')
];

class MineScene extends PureComponent {
    static navigationOptions = ({ navigation }) => ({
        // headerRight: (
        //     <View style={{ flexDirection: 'row' }}>
        //         <NavigationItem
        //             icon={require('../../img/Mine/icon_navigationItem_set_white.png')}
        //             onPress={() => {
        //
        //             }}
        //         />
        //     </View>
        // ),
        // headerStyle: { backgroundColor: color.theme },
        header: null
    })

    state: {
        isRefreshing: boolean
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: [],
            btnName: ['沸点','贡献榜','本周最热']
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
    }
});

export default MineScene;
