import styled from 'styled-components/native';

export const Btn = styled.TouchableOpacity`
    background-color: ${props => (props.bgColor ? props.bgColor : '#00a7aa')};
    width: ${props => (props.width ? props.width : '2100%')};
    height: ${props => (props.height ? props.height : '40px')};
    border-radius: ${props => (props.radius ? props.radius : '5px')};
    margin: ${props => (props.margin ? props.margin : '0px')};
`;