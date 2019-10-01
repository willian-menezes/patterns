import React from 'react';
import { HomeScreenBuilder } from '../../builders';
import Home from './Home';

const componentFactory = WrappedComponent => props => {

    const componentProps = new HomeScreenBuilder()
        .withProfile()
        .build();

    return <WrappedComponent {...componentProps} />
};

export default componentFactory(Home);