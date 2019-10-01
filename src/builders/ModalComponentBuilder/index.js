import { ModalComponentEntity } from "./../../entities";

class ModalComponentBuilder {

    withName(name) {
        this.name = name;
        return this;
    }

    withEmail(email) {
        this.email = email;
        return this;
    }

    withImage(image) {
        this.image = image;
        return this;
    }

    build() {
        return new ModalComponentEntity(this);
    }
}

export default ModalComponentBuilder;
