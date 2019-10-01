import AbstractEntity from "../AbstractEntity";

class HistoricScreenEntity extends AbstractEntity {
    constructor(builder) {
        super();

        this.chart = builder.chart;
        this.contacts = builder.contacts;
    }
}

export default HistoricScreenEntity;