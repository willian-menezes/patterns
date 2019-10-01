import { requestFactory } from "./../../factories";
import {
    transferencesStore,
} from "./../../stores";
import { TRANSFERENCES } from './../../mocks/transferences';
import { AsyncStorage } from 'react-native';

export default async () => {

    try {

        const transferences = await AsyncStorage.getItem('transferences');
        
        if (transferences !== null)
            return transferencesStore.setData(JSON.parse(transferences));
        
        await AsyncStorage.setItem('transferences', JSON.stringify(TRANSFERENCES));
        return transferencesStore.setData(TRANSFERENCES);

    } catch (error) {
        return { error }
    }

};
