import React, { Component } from "react";
import { withNavigation } from 'react-navigation';
import { ContentButton, Box } from './style';

import Profile from './../../components/Profile';
import ButtonStyled from './../../components/ButtonStyled';
import LinearGradient from 'react-native-linear-gradient';

class Home extends Component {


    _goTo = (page) => {
        this.props.navigation.navigate(page);
    }

    render() {
        const { profile } = this.props;
        
        return (
            <LinearGradient 
                colors={['#1a2d40', '#004f84']} 
                style={{flex: 1}}
                start={{x: 0.0, y: 0.3}} end={{x: 0.0, y: 1.2}}
                locations={[0,0.5,0.6]}
            >
                {profile && (
                    <Box>
                        <Profile {...profile} />
                        <ContentButton>
                            <ButtonStyled
                                width="70%"
                                height="45px"
                                bgColor="#00a7aa"
                                text="ENVIAR DINHEIRO"
                                size={13}
                                weight="800"
                                align="center"
                                radius="20px"
                                marginText="auto"
                                marginButton="6px auto"
                                handleClick={() => this._goTo('SendMoney')}
                            />
                            <ButtonStyled
                                width="70%"
                                height="45px"
                                bgColor="#00a7aa"
                                text="HISTÓRICO DE ENVIOS"
                                size={13}
                                weight="800"
                                align="center"
                                radius="20px"
                                marginText="auto"
                                marginButton="6px auto"
                                handleClick={() => this._goTo('Historic')}
                            />
                        </ContentButton>
                    </Box>
                )}
            </LinearGradient>
        );
    }
}

export default withNavigation(Home);
