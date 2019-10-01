import React, { Component } from "react";
import { withNavigation } from 'react-navigation';
import { View, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Chart from './../../components/Chart';
import Contact from './../../components/Contact';
import { Content } from './style';

import * as services from "./../../services";

class Historic extends Component {

    componentDidMount() {
        this.fetchPage();
    }

    fetchPage() {
        services.fetchTensferences();
        services.fetchChart();
        services.fetchContacts();
    }

    _goTo = (page) => {
        this.props.navigation.navigate(page);
    }

    render() {
        const { chart, contacts } = this.props;
        
        return (
            <LinearGradient 
                colors={['#1a2d40', '#003f65']} 
                style={{flex: 1}}
                start={{x: 0.0, y: 0.3}} end={{x: 0.0, y: 1.2}}
                locations={[0,0.5,0.6]}
            >
                <Content>
                    {chart && (<Chart data={chart.transferences} />)}
                    <FlatList 
                        data={contacts.transferences}
                        renderItem={({ item }) => <Contact data={item} handleClick={() => null} />}
                        keyExtractor={item => item.Id}
                        style={{marginTop: 15, flex: 1}}
                    />
                </Content>
            </LinearGradient>
        );
    }
}

export default withNavigation(Historic);
