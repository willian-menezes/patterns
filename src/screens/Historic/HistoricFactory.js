import React from 'react';
import { inject, observer } from 'mobx-react';

import { HistoricScreenBuilder } from '../../builders';
import Historic from './Historic';

const componentFactory = WrappedComponent => props => {

    const { transferencesStore } = props;

    const componentProps = new HistoricScreenBuilder()
        .withChart(transferencesStore)
        .withContact(transferencesStore)
        .build();

    return <WrappedComponent {...componentProps} />
};

export default inject('transferencesStore')(
    observer(componentFactory(Historic))
);