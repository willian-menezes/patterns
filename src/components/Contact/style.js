import styled from 'styled-components/native';

export const Content = styled.View`
    width: 100%;
    height: 80px;
    margin: 7px 0px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
`;

export const Line = styled.View`
    width: ${props => (props.width ? props.width : '100%')};
    height: 1px;
    border: 1px solid #004867;
    margin: 0 auto;
`;