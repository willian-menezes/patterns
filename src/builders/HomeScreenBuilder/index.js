import ProfileComponentBuilder from "./../ProfileComponentBuilder";
import { HomeScreenEntity } from "./../../entities";

class HomeScreenBuilder {
    
    constructor() {
        this.profile = [];
    }

    withProfile() {
        const profile = new ProfileComponentBuilder()
        .build();

        this.profile = profile;
        return this;
    }

    build() {
        return new HomeScreenEntity(this);
    }
}

export default HomeScreenBuilder;
