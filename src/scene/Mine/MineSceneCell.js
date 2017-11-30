//import liraries
import React, { PureComponent } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'

class MineSceneCell extends PureComponent {

    constructor(props: Object) {
        super(props)

        { (this: any)._jump = this._jump.bind(this) } // bind主要是为了改变函数内部的this指向
    }

    render() {
        var {config, jumpNextPage} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this._jump}>
                <View style={styles.leftContainer}>
                    <Image style={styles.leftImg} />
                    <Text style={styles.leftTitle}>{config.title}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.rightContent}>{config.content}</Text>
                    <Image style={styles.arrowImg} />
                </View>
            </TouchableOpacity>
        )
    }

    // event
    _jump() {
        this.props.jumpNextPage(this.props.config)
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 0.5,
        borderBottomColor: '#e6e6e6'
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftImg: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        marginRight: 8
    },
    leftTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContent: {
        color: '#9d9d9d',
        fontSize: 14,
        marginRight: 8
    },
    arrowImg: {
        width: 20,
        height: 20,
        backgroundColor: 'blue'
    }
});

export default MineSceneCell;