import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class Button extends PureComponent {
    static propTypes = {
        onPress: PropTypes.func,
        disabled: PropTypes.bool,
        style: Text.propTypes.style,
        containerStyle: View.propTypes.style,
        title: PropTypes.string,
        activeOpacity: PropTypes.number,
        icon: PropTypes.number
    }

    static defaultProps = {
        onPress:() => {},
        disabled: false,
        activeOpacity: 0.8
    }

    render() {
        let { onPress, disabled, style, containerStyle, title, activeOpacity, icon } = this.props
        return (
            <TouchableOpacity
                style={[styles.container, containerStyle]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
            >
                {
                    icon ? (<Image resizeMode="contain" style={{width: 15, marginRight: 5}} source={icon}/>) : null
                }
                <Text style={style}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
});

export default Button;
