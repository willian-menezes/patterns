import { createStackNavigator } from 'react-navigation';
import { navOptions } from './config/DefaultOptions';

import Home from './screens/Home';
import Historic from './screens/Historic';
import SendMoney from './screens/SendMoney';

export default createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Historic: {
        screen: Historic,
        navigationOptions: {
            title: 'HISTÓRICO DE ENVIOS'
        }
    },
    SendMoney: {
        screen: SendMoney,
        navigationOptions: {
            title: 'ENVIAR DINHEIRO'
        }
    }
}, { navigationOptions: navOptions });