//import liraries
import React, { PureComponent } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'

var {width, height} = Dimensions.get('window');

class LoanListCell extends PureComponent {

    render() {
        let {info, ...prop} = this.props;
        return (
            <TouchableOpacity style={styles.container} {...prop}>
                <View style={styles.headlineContainer}>
                    <Text style={styles.headlineText}>{info.loanAmount}</Text>
                    <Text style={styles.timeText}>{info.time}</Text>
                </View>
                <Text style={styles.detailText} numberOfLines={1}>{info.loanStatus}</Text>
                <Image style={[styles.arrowRight]} source={require('../../img/Public/cell_arrow.png')}/>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e9e9ef',
        height: 80,
        width: width,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20
    },
    headlineContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    headlineText: {
        flex: 1,
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    timeText: {
        color: '#aeaeae',
        fontSize: 12
    },
    detailText: {
        color: '#f2b779',
        fontSize: 13,
        fontWeight: '500',
        marginRight: 5
    },
    arrowRight: {
        width: 16,
        height: 16
    }
});

export default LoanListCell;
