import AbstractEntity from "../AbstractEntity";

class HomeScreenEntity extends AbstractEntity {
    constructor(builder) {
        super();

        this.profile = builder.profile;
    }
}

export default HomeScreenEntity;