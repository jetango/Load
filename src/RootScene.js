import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import color from './widget/color'
import { screen, system, tool } from './common'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene/Home/HomeScene'
import MineScene from './scene/Mine/MineScene'
import ConfirmLoanScene from './scene/ConfirmLoan/ConfirmLoanScene'
import PhoneInputLogin from './scene/Login/PhoneInputLogin'
import PasswordLogin from './scene/Login/PasswordLogin'
import MessageLogin from './scene/Login/MessageLogin'
import MessagePwdRegister from './scene/Login/MessagePwdRegister'
import MessageCenter from './scene/Message/MessageCenter'
import LoanList from './scene/Loan/LoanList'
import LoanDetail from './scene/Loan/LoanDetail'
import BindBankCard from './scene/BindBankCard/BindBankCard'
import SettingTradePwd from './scene/ConfirmLoan/SettingTradePwd'

import Center from './scene/Auth/Center'
import Personal from './scene/Auth/Personal'
import Contact from './scene/Auth/Contact'
import Operator from './scene/Auth/Operator'
import Zhima from './scene/Auth/Zhima'
import CompletedOperator from './scene/Auth/CompletedOperator'

import WebScene from './widget/WebScene'


const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

class RootScene extends PureComponent {
    constructor() {
        super()

        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            // if (lightContentScenes.indexOf(currentScene) >= 0) {
                            //     StatusBar.setBarStyle('light-content')
                            // } else {
                            //     StatusBar.setBarStyle('dark-content')
                            // }
                        }
                    }
                }
            />
        );
    }
}


const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected.png')}
                    />
                )
            }),
        },
        // Home: {
        //     screen: Center,
        //     navigationOptions: ({ navigation }) => ({
        //         tabBarLabel: '我的',
        //         tabBarIcon: ({ focused, tintColor }) => (
        //             <TabBarItem
        //                 tintColor={tintColor}
        //                 focused={focused}
        //                 normalImage={require('./img/tabbar/pfb_tabbar_homepage.png')}
        //                 selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected.png')}
        //             />
        //         )
        //     }),
        // },
        Nearby: {
            screen: MineScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '发现',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_merchant.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected.png')}
                    />
                )
            }),
        },
        //
        // Order: {
        //     screen: OrderScene,
        //     navigationOptions: ({ navigation }) => ({
        //         tabBarLabel: '订单',
        //         tabBarIcon: ({ focused, tintColor }) => (
        //             <TabBarItem
        //                 tintColor={tintColor}
        //                 focused={focused}
        //                 normalImage={require('./img/tabbar/pfb_tabbar_order.png')}
        //                 selectedImage={require('./img/tabbar/pfb_tabbar_order_selected.png')}
        //             />
        //         )
        //     }),
        // },

        Mine: {
            screen: MineScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        // headerMode: 'none',
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        Web: { screen: WebScene },
        ConfirmLoanScene: { screen: ConfirmLoanScene},
        PhoneInputLogin: {screen: PhoneInputLogin},
        PasswordLogin: {screen: PasswordLogin},
        MessageLogin: {screen: MessageLogin},
        MessagePwdRegister: {screen: MessagePwdRegister},
        MessageCenter: {screen: MessageCenter},
        LoanList: {screen: LoanList},
        BindBankCard: {screen: BindBankCard},
        SettingTradePwd: {screen: SettingTradePwd},
        Center: {screen: Center},
        Personal: {screen: Personal},
        Contact: {screen: Contact},
        Operator: {screen: Operator},
        Zhima: {screen: Zhima},
        CompletedOperator: {screen: CompletedOperator},
        LoanDetail: {screen: LoanDetail}
    },
    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.theme }
            headerBackTitle: null,
            headerTintColor: '#fff',
            showIcon: true,
        },
    }
);
//make this component available to the app
export default RootScene;
