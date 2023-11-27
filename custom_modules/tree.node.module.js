const nodePosition = {
    left: 1,
    right: 2
};

class TreeNode {
    constructor(a, b, position) {
        this.valueA = a;
        this.valueB = b;
        this.parentPosition = position;
    }

    found(c, searchByPosition) {
        let sumAB = (this.valueA + this.valueB);
        let nextValueA = (this.valueA + sumAB);
        let nextValueB = (sumAB + this.valueB);

        if (searchByPosition !== nodePosition.right && nextValueA === c) {
            this.printFoundNode(nextValueA, sumAB);
            return true;
        }

        if (searchByPosition !== nodePosition.left && nextValueB === c) {
            this.printFoundNode(sumAB, nextValueB);
            return true;
        }

        if (nextValueA < c) this.left = new TreeNode(this.valueA, sumAB, nodePosition.left);
        if (nextValueB < c) this.right = new TreeNode(sumAB, this.valueB, nodePosition.right);
        return false;
    }

    toString() {
        return "[" + this.valueA + "," + this.valueB + "]";
    }

    printFoundNode(a, b) {
        console.log('Найден узел: [' + a + ',' + b + ']');
    }
}

module.exports = {
    "TreeNode": TreeNode,
    "NodePosition": nodePosition
}