import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator(
    {
        Main
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#DA552F'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1,
                fontWeight: 'bold'
            }
        }
    }
);
