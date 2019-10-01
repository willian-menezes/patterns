import React from 'react';
import { inject, observer } from 'mobx-react';
import { SendMoneyScreenBuilder } from '../../builders';
import SendMoney from './SendMoney';

const componentFactory = WrappedComponent => props => {

    const { contactsStore } = props;

    const componentProps = new SendMoneyScreenBuilder()
        .withContact(contactsStore)
        .build();

    return <WrappedComponent {...componentProps} />
};

export default inject('contactsStore')(
    observer(componentFactory(SendMoney))
);