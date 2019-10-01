import React, { Component } from "react";
import Typography from './../Typography';
import { Btn } from './style';

export default ({ text, width, height, bgColor, size, align, weight, radius, marginText, marginButton, handleClick }) => (
    <Btn
        width={width}
        height={height}
        bgColor={bgColor}
        title={text}
        radius={radius}
        margin={marginButton}
        onPress={() => handleClick()}
    >
        <Typography 
            text={text}
            size={size}
            align={align}
            weight={weight}
            margin={marginText}
        />
    </Btn>
);