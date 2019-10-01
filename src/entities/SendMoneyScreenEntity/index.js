import AbstractEntity from "../AbstractEntity";

class HistoricScreenEntity extends AbstractEntity {
    constructor(builder) {
        super();

        this.contacts = builder.contacts;
    }
}

export default HistoricScreenEntity;