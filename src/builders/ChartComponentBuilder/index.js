import { ChartComponentEntity } from "./../../entities";

class ChartComponentBuilder {

    withData(data) {
        console.log("chart",data);
        this.chart = data.chart;
        return this;
    }

    build() {
        return new ChartComponentEntity(this);
    }
}

export default ChartComponentBuilder;