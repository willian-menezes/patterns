import { ContactComponentEntity } from "./../../entities";

class ContactComponentBuilder {

    withData(data) {
        this.contact = data.data;
        return this;
    }

    build() {
        return new ContactComponentEntity(this);
    }
}

export default ContactComponentBuilder;