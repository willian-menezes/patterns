import ChartComponentBuilder from "./../ChartComponentBuilder";
import ContactComponentBuilder from "./../ContactComponentBuilder";
import { HistoricScreenEntity } from "./../../entities";

class HistoricScreenBuilder {
    
    constructor() {
        this.items = [];
    }

    withChart(transfers) {
        this.chart = new ChartComponentBuilder()
        .withData(transfers)
        .build();

        return this;
    }

    withContact(transfers) {
        this.contacts = new ContactComponentBuilder()
        .withData(transfers)
        .build();

        return this;
    }

    build() {
        return new HistoricScreenEntity(this);
    }
}

export default HistoricScreenBuilder;
