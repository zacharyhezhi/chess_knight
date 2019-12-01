class Node {
    constructor(x, y, distance = 0, parent = null) {
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.parent = parent;
    }
}

export default Node;