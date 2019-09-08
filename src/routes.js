import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator(
    {
        Main,
        Product
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#DA552F'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
                flexGrow: 1,
                textAlign: 'center'
            }
        }
    }
);
