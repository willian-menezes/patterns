import { ProfileComponentEntity } from "./../../entities";

class ProfileComponentBuilder {

    build() {
        return new ProfileComponentEntity(this);
    }
}

export default ProfileComponentBuilder;
