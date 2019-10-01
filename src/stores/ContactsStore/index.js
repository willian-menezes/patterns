import { decorate, observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';

class ContactssStore {
    data = [];

    setData(data) {
        this.data = data;
    }

    async newSend(send) {
        try {
            send.Valor = this._getMoney(send.Valor);
            this.data.push(send)
            const order = this.data.sort((a,b) => {
                return  b.Valor - a.Valor;
            })
            this.data = order;
            await AsyncStorage.setItem('contacts', JSON.stringify(this.data));
        } catch (error) {
            return { error }
        }

    }

    _getMoney = (str) =>{
        return parseInt( str.replace(/[\D]+/g,'') );
    }
};

decorate(ContactssStore, {
    data: observable,
    setData: action,
    newSend: action
});


export default new ContactssStore();
export { ContactssStore }
