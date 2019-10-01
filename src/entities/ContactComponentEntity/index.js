import AbstractEntity from "../AbstractEntity";

class ContactComponentEntity extends AbstractEntity {
    constructor(builder) {
        super();

        this.transferences = builder.contact;

    }
}

export default ContactComponentEntity;
