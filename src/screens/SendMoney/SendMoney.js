import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import { withNavigation } from 'react-navigation';
import { View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Contact from './../../components/Contact';
import Modal from './../../components/Modal';
import { Content } from './style';

import * as services from "./../../services";

class SendMoney extends Component {

    constructor(props) {
        super(props);

        this.state = {
            send: false
        }
    }

    componentDidMount() {
        this.fetchPage();
        this.props.navigation.setParams({ header: null });
    }

    fetchPage() {
        services.fetchContacts();
    }

    _goTo = (page) => {
        this.props.navigation.navigate(page);
    }

    _openModal = (data) => {
        const { modalStore } = this.props;
        modalStore.setData(data);
        modalStore.setVisible(true);
    }

    _send = (newSend) => {
        const { transferencesStore } = this.props;
        transferencesStore.newSend(newSend);
        this.setState({send: true})
    }

    _close = () => {
        const { send } = this.state;

        if(send) {
            this._goTo("Home");
        }
    }

    render() {
        const { contacts } = this.props;
        return (
            <Content>
                <LinearGradient 
                    colors={['#1a2d40', '#003f65']} 
                    style={{flex: 1}}
                    start={{x: 0.0, y: 0.3}} end={{x: 0.0, y: 1.2}}
                    locations={[0,0.5,0.6]}
                >
                    <Content>
                        {contacts && (<FlatList 
                            data={contacts.transferences}
                            renderItem={({ item }) => <Contact noValue={true} data={item} handleClick={() => this._openModal(item)}/>}
                            keyExtractor={item => item.ClienteId}
                            style={{marginTop: 15, flex: 1}}
                        />)}
                    </Content>
                </LinearGradient>
                <Modal 
                    send={(newSend) => this._send(newSend)} 
                    close={() => this._close()}
                />
            </Content>
        );
    }
}

export default inject('modalStore', 'transferencesStore')(
    observer(withNavigation(SendMoney))
);