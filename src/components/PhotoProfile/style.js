import styled from 'styled-components/native';

export const BoxImage = styled.View`
    width: ${props => (props.width ? props.width : '42px')};
    height: ${props => (props.height ? props.height : '42px')};
    border: ${props => (props.borderWidth ? `${props.borderWidth} solid #00a2b2` : '2px solid #00a2b2')};
    border-radius: ${props => (props.radius ? props.radius : '42px')};
    display: flex;
    overflow: hidden;
    position: ${props => (props.position ? props.position : 'absolute')};
    bottom: 0px;
    margin: ${props => (props.valueMargin ? props.valueMargin : '0px 0px 0px 10px')};
    flex: ${props => (props.flex ? props.flex : 'none')};
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;