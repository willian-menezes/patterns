import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import { Modal, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import ButtonStyled from './../../components/ButtonStyled';
import Typography from './../Typography';
import PhotoProfile from './../PhotoProfile';
import { Content, ButtonClose, ContentAlert, TextButton , MaskInput, TextSend} from './style';

class ModalComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'R$ 0,00',
            transferred: false
        };
    }

    _reset = () => {
        const { modalStore, close } = this.props;
        
        modalStore.setVisible(false);
        this.setState({
            transferred: false,
            value: 'R$ 0,00',
        })

        close();
    }

    _send = (data) => {

        if(this.state.value != "R$ 0,00" && this.state.value != "R$0,00"){
            this.setState({
                transferred: true
            })

            const newSend = {
                "Id": Math.floor((Math.random() * 1000) + 1),
                "ClienteId": data.ClienteId,
                "Valor": `${this.state.value}`,
                "Nome": data.Nome,
                "Contato": data.Contato,
                "Token": "1d40d305-c836-43a2-b4db-acc56bcc1393",
                "Data": "2016-08-03T14:25:37.55"
            }

            this.props.send(newSend);
        }
    }

    render() {
        const { modalStore } = this.props;
        const { value, transferred } = this.state;
        const { data } = modalStore;

        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalStore.visible}
                >
                <Content>
                    <ContentAlert>
                        <ButtonClose
                            onPress={() => {
                                this._reset();
                            }}>
                            <TextButton>X</TextButton>
                        </ButtonClose>
                        <PhotoProfile 
                            image={require('./../../assets/images/profile.png')} 
                            width="75px"
                            height="75px"
                            radius="75px"
                            position="relative"
                            borderWidth="3px"
                            valueMargin="20px auto 0px auto"
                        />
                        <Typography 
                            text={data.Nome}
                            size={16}
                            align="center"
                            margin="5px 0 0 0"
                            weight="500"
                        />
                        <Typography 
                            text={data.Contato}
                            size={15}
                            align="center"
                            margin="2px 0 0 0"
                        />
                        <Typography 
                            text="Valor a enviar"
                            size={14}
                            align="center"
                            margin="15px 0 10px 0"
                        />  
                        {!transferred ? (
                            <View>
                                <MaskInput>
                                    <TextInputMask 
                                        type={'money'}
                                        options={{
                                            precision: 2,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: 'R$',
                                            suffixUnit: ''
                                        }}
                                        onChangeText={value => this.setState({value})}
                                        value={value}
                                        style={styleInput}
                                    />
                                </MaskInput>
                                <ButtonStyled
                                    width="90%"
                                    height="40px"
                                    bgColor="#00a7aa"
                                    text="ENVIAR"
                                    size={14}
                                    weight="800"
                                    align="center"
                                    radius="20px"
                                    marginText="auto"
                                    marginButton="15px auto 0px auto"
                                    handleClick={() => this._send(data)}
                                />
                            </View>
                        ) : (
                            <MaskInput>
                                <Typography 
                                    text="SUCESSO!"
                                    size={15}
                                    align="center"
                                    margin="20px 0 0 0"
                                    weight="bold"
                                    color="#00a7aa"
                                />
                            </MaskInput>
                        )}
                    </ContentAlert>
                </Content>
            </Modal>
        );
    }
}

const styleInput = {
    backgroundColor: '#fff',
    color: '#00a7aa',
    width: '100%',
    height: 50,
    fontFamily: 'arial',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
}

export default inject('modalStore')(
    observer(ModalComponent)
);