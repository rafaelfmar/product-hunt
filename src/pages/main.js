import React, { Component } from 'react';
import { Text, View } from 'react-native';

import api from '../services/api';

export default class main extends Component {
    static navigationOptions = {
        title: 'JSHunt'
    };

    state = {
        docs: []
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        this.setState({ docs });
    };

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}
