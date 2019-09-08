import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class main extends Component {
    static navigationOptions = {
        title: 'JSHunt'
    };

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}
