import { ChartComponentEntity } from "./../../entities";

class ChartComponentBuilder {

    withData(data) {
        this.chart = data.chart;
        return this;
    }

    build() {
        return new ChartComponentEntity(this);
    }
}

export default ChartComponentBuilder;