import { requestFactory } from "./../../factories";
import {
    contactsStore,
} from "./../../stores";
import { CONTACTS } from './../../mocks/contacts';
import { AsyncStorage } from 'react-native';

export default async () => {

    try {

        const contacts = await AsyncStorage.getItem('contacts');
        
        if (contacts !== null)
            return contactsStore.setData(JSON.parse(contacts));
        
        await AsyncStorage.setItem('contacts', JSON.stringify(CONTACTS));
        return contactsStore.setData(CONTACTS);

    } catch (error) {
        return { error }
    }

};
