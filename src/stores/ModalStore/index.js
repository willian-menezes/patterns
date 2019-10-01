import { decorate, observable, action } from 'mobx';

class ModalStore {
    data = [];
    visible = false;

    setData(data) {
        this.data = data;
    }

    setVisible(visible) {
        this.visible = visible;
    }
};

decorate(ModalStore, {
    data: observable,
    visible: observable,
    setData: action
});

export default new ModalStore();
export { ModalStore }