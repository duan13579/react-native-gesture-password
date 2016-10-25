import React, { PropTypes, Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class Circle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {color, fill, x, y, r, inner, outer} = this.props;

        return (
            <View style={[styles.outer,
                        {left: x - r, top: y - r, width: 2 * r, height: 2 * r, borderRadius: r},
                        fill && {borderColor:  '#f9e6d9'},
                        !outer && {borderWidth: 0}]}>

                {inner && <View style={[
                            !outer && styles.inner,
                            {width: 2 * r / 3, height: 2 * r / 3, borderRadius: r / 3},
                            fill && {backgroundColor: color}
                        ]} />}
            </View>
        )
    }
}

Circle.propTypes = {
    color: PropTypes.string,
    fill: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
    r: PropTypes.number,
    inner: PropTypes.bool,
    outer: PropTypes.bool
}

Circle.defaultProps = {
    inner: true,
    outer: true
}

const styles = StyleSheet.create({
    outer: {
        position: 'absolute',
        backgroundColor:'#fbd979',
        borderColor: '#f9e6d9',
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        backgroundColor: '#8E91A8'
    }
})

module.exports = Circle;    // for compatible with require only
