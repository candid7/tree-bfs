const nodePosition = {
    all: 0,
    left: 1,
    right: 2
};

class TreeNode {
    constructor(a, b, position) {
        this.valueA = a;
        this.valueB = b;
        this.position = position;
    }

    addChildren(valueAB, valueC) {
        if ((this.valueA + valueAB) < valueC) {
            this.left = new TreeNode(this.valueA, valueAB, nodePosition.left);
        }

        if ((valueAB + this.valueB) < valueC) {
            this.right = new TreeNode(valueAB, this.valueB, nodePosition.right);
        }
    }

    compareValue(valueAB, valueC, valuePosition) {
        if (valuePosition === nodePosition.left && (this.valueA + valueAB) === valueC) {
            console.log('Найден узел: [' + (this.valueA + valueAB) + ',' + valueAB + ']');
            return true;
        }

        if (valuePosition === nodePosition.right && (valueAB + this.valueB) === valueC) {
            console.log('Найден узел: [' + valueAB + ',' + (valueAB + this.valueB) + ']');
            return true;
        }
        return false;
    }

    found(valueC, searchByPosition) {
        this.parent = this;
        let valueAB = (this.valueA + this.valueB);
        if (searchByPosition !== nodePosition.right && this.compareValue(valueAB, valueC, nodePosition.left)) {
            return true;
        }

        if (searchByPosition !== nodePosition.left && this.compareValue(valueAB, valueC, nodePosition.right)) {
            return true;
        }
        this.addChildren(valueAB, valueC);
        return false;
    }

    toString() {
        return "[" + this.valueA + "," + this.valueB + "]";
    }
}

module.exports = {
    "TreeNode": TreeNode,
    "NodePosition": nodePosition
}