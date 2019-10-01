import React from "react";
import { Print } from './style';

export default ({text, size, align, margin, weight, flex, color}) => (
    <Print
        size={size}
        align={align}
        margin={margin}
        weight={weight}
        flex={flex}
        color={color}
    >
        {text}
    </Print>
);
