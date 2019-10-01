import AbstractEntity from "../AbstractEntity";

class ChartComponentEntity extends AbstractEntity {
    constructor(builder) {
        super();

        this.transferences = builder.chart;

    }
}

export default ChartComponentEntity;
