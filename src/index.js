import React from 'react';
import Routes from './routes';
import { Provider } from 'mobx-react';
import './config/StatusBar';
import * as stores from './stores';

const App = () => (
    <Provider {...stores}>
        <Routes />
    </Provider>
);

export default App;