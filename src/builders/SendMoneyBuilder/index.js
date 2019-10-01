import ContactComponentBuilder from "./../ContactComponentBuilder";
import { SendMoneyScreenEntity } from "./../../entities";

class SendMoneyScreenBuilder {
    
    constructor() {
        this.items = [];
    }

    withContact(contacts) {
        this.contacts = new ContactComponentBuilder()
        .withData(contacts)
        .build();

        return this;
    }

    build() {
        return new SendMoneyScreenEntity(this);
    }
}

export default SendMoneyScreenBuilder;