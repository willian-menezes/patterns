import AbstractEntity from "../AbstractEntity";

class ProfileComponentEntity extends AbstractEntity {
    constructor(builder) {
        super();

        this.name = builder.name;
        this.email = builder.email;
        this.image = builder.image;
    }
}

export default ProfileComponentEntity;
