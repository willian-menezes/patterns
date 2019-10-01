import React from "react";
import { Line } from './style';

export default ({ total }) => {
    const lines = new Array(total);
    let linesComponent = [];
    for(let i=0; i <= lines.length; i++) {
        linesComponent.push(<Line key={i} />);
    }    

    return linesComponent;
};
