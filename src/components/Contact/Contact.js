import React, { Component } from "react";
import { View, TouchableOpacity } from 'react-native';
import Typography from './../Typography';
import PhotoProfile from './../PhotoProfile';
import { Content, Line } from './style';
import { formatReal } from './../../utils/index';

export default ({ data, handleClick, noValue }) => (
    <View>
        <TouchableOpacity
            onPress={() => handleClick(data)}
        >
            <Content>
                <PhotoProfile 
                    image={{uri: `https://raw.githubusercontent.com/willian-menezes/patterns/images/src/assets/images/${data.Id}.jpg`}} 
                    width="65px"
                    height="65px"
                    radius="65px"
                    position="relative"
                    borderWidth="3px"
                    valueMargin="8px 10px"
                />
                <View>
                    <Typography 
                        text={data.Nome}
                        size={16}
                        align="left"
                        margin="12px 0 0 0"
                        color="#009ca1"
                        weight="500"
                    />
                    <Typography 
                        text={data.Contato}
                        size={16}
                        align="left"
                        margin="3px 0 0 0"
                        color="#006f79"
                    />
                    {!noValue && (<Typography 
                        text={`R$${formatReal(data.Valor)}`}
                        size={14}
                        align="left"
                        margin="3px 0 0 0"
                        color="#006f79"
                    />)}
                </View>
            </Content>
        </TouchableOpacity>
        <Line width="92%" />
    </View>
);