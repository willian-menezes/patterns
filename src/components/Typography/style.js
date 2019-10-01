import styled from 'styled-components/native';

export const Print = styled.Text`
    color: ${props => (props.color ? props.color : '#fff')};
    font-family: ${props => (props.family ? props.family : 'arial')};
    font-size: ${props => (props.size ? props.size : 12)};
    text-align: ${props => (props.align ? props.align : 'justify')};
    margin: ${props => (props.margin ? props.margin : '0px')};
    font-weight: ${props => (props.weight ? props.weight : 'normal')};
    flex: ${props => (props.flex ? props.flex : 'none')};
`;
