import { decorate, observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';

class TransferencesStore {
    data = [];
    chart = [];

    setData(data) {
        this.data = data;
    }

    setChart(chart) {
        this.chart = chart;
    }

    async newSend(send) {
        try {
            send.Valor = this._getMoney(send.Valor);
            this.data.push(send)
            const order = this.data.sort((a,b) => {
                return  b.Valor - a.Valor;
            })
            this.data = order;
            await AsyncStorage.setItem('transferences', JSON.stringify(this.data));

            this.updateChart(send);
        } catch (error) {
            return { error }
        }
    }

    async updateChart(send) {
        try {
            let update = 0;
            await Promise.all(this.chart.map((item, i) => {
                if(item.ClienteId == send.ClienteId){
                    this.chart[i].Valor = Number(this.chart[i].Valor)+Number(send.Valor);
                    update++;
                }
            }));
            if(update){
                const order = this.chart.sort((a,b) => {
                    return  b.Valor - a.Valor;
                })
                await AsyncStorage.setItem('chart', JSON.stringify(order));
            }
        } catch (error) {
            return { error }
        }
    }

    _getMoney = (str) =>{
        return parseInt( str.replace(/[\D]+/g,'') );
    }
};

decorate(TransferencesStore, {
    data: observable,
    chart: observable,
    setChart: action,
    setData: action,
    newSend: action
});


export default new TransferencesStore();
export { TransferencesStore }
