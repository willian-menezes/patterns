import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import Typography from './../Typography';
import { Content, BoxImage, ImageProfile } from './style';

export default ({ name }) => (
    <Content>
        <BoxImage>
            <LinearGradient 
                colors={['#004b5e', '#007a79', '#00d6ad']} 
                style={{flex: 1}}
                start={{x: 0.0, y: 0.95}} end={{x: 0.4, y: 1.1}}
                locations={[0,0.5,0.6]}
            >
                <ImageProfile source={require('./../../assets/images/profile.jpg')} />
            </LinearGradient>
        </BoxImage>
        <Typography 
            text="Willian Menezes"
            size={18}
            align="center"
            margin="15px 0px 0px 0px"
            weight="bold"
        />
        <Typography 
            text="willianmenezes.t.i@gmail.com"
            size={14}
            align="center"
        />
    </Content>
);
