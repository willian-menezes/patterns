import styled from 'styled-components/native';

export const Content = styled.View`
    width: 100%;
    max-height: 218px;
    position: relative;
    padding: 0px;
    margin: 10px 0px;
    flex: 1;
`;

export const ScrollViewStyled = styled.ScrollView`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
`;

export const ContentItem = styled.View`
    width: 65px
    height: 100%;
    position: relative;
`;

export const BolPercentageLine = styled.View`
    width: 11px
    height: 11px;
    border-radius: 11px;
    background-color: #005085;
    position: absolute;
    top: 0px;
    left: -4px;
`;

export const BoxPercentageLine = styled.View`
    width: 3px;
    height: ${props => (props.value ? `${props.value}%` : '1%')};
    position: absolute;
    bottom: 42px;
    marginLeft: 30px;
`;

export const ValueTransference = styled.Text`
    font-family: arial;
    font-size: 12px;
    text-align: center
    color: #00868b;
    position: absolute;
    top: -15px;
    left: -25px;
    width: 55px;
`;