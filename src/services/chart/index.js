import { requestFactory } from "./../../factories";
import {
    transferencesStore,
} from "./../../stores";
import { TRANSFERENCES } from './../../mocks/transferences';
import { AsyncStorage } from 'react-native';

export default async () => {

    try {

        const chart = await AsyncStorage.getItem('chart');
        
        if (chart !== null)
            return transferencesStore.setChart(JSON.parse(chart));
        
        await AsyncStorage.setItem('chart', JSON.stringify(TRANSFERENCES));
        return transferencesStore.setChart(TRANSFERENCES);

    } catch (error) {
        return { error }
    }

};
