import styled from 'styled-components/native';

export const Content = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
`;

export const ContentAlert = styled.View`
    background-color: #1e586b;
    width: 85%;
    height: 38%;
    border-radius: 20px;
    margin: 0 auto;
`;

export const ButtonClose = styled.TouchableOpacity`
    position: absolute;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 22px
    margin: 18px 18px;
    font-family: verdana;
`;

export const MaskInput = styled.View`
    width: 88%;
    height: 50px;
    overflow: hidden
    border-radius: 10px;
    margin: 0 auto;
    background-color: ${props => (props.bgColor ? props.bgColor : 'transparent')};
`;

export const Input = styled.TextInput`
    background-color: #fff;
    color: #00a7aa;
    width: 100%;
    height: 50px;
    font-family: arial;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

