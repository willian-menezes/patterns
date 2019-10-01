import React from "react";
import { BoxImage, Image } from './style';

export default ({ image, width, height, position, valueMargin, radius, borderWidth, flex }) => (
    <BoxImage
        width={width}
        height={height}
        position={position}
        valueMargin={valueMargin}
        radius={radius}
        borderWidth={borderWidth}
        flex={flex}
    >
        <Image source={image} />
    </BoxImage>
);
