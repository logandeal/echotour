class Node {
    constructor(description) {
        this.description = description;
        this.mapu = null;
        this.mapd = null;
        this.mapr = null;
        this.mapl = null;
    }
    addDown(node) {
        this.mapd = node;
        node.mapu = this;
    }
    addUp(node) {
        this.mapu = node;
        node.mapd = this;
    }
    addRight(node) {
        this.mapr = node;
        node.mapl = this;
    }
    addLeft(node) {
        this.mapl = node;
        node.mapr = this;
    }
}