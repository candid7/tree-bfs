const {position} = require("../position");

class TreeNode {
    constructor(a, b, position) {
        this.valueA = a;
        this.valueB = b;
        this.position = position;
    }

    addChildrenInQueue(valueC) {
        this.parent = this;
        let valueAB = (this.valueA + this.valueB);
        if ((this.valueA + valueAB) < valueC) {
            this.left = new TreeNode(this.valueA, valueAB, position.left);
        }

        if ((valueAB + this.valueB) < valueC) {
            this.right = new TreeNode(valueAB, this.valueB, position.right);
        }
    }

    checkByValueA(sum, valueC) {
        if ((this.valueA + sum) === valueC) {
            console.log('Найден узел: [' + (this.valueA + sum) + ',' + sum + ']');
            return true;
        }
        return false;
    }

    checkByValueB(sum, valueC) {
        if ((sum + this.valueB) === valueC) {
            console.log('Найден узел: [' + sum + ',' + (this.valueB + sum) + ']');
            return true;
        }
        return false;
    }

    searchByAll(valueC) {
        let sum = (this.valueA + this.valueB);
        if (this.checkByValueA(sum, valueC) || this.checkByValueB(sum, valueC)) {
            return true;
        }

        this.addChildrenInQueue(valueC);
        return false;
    }

    searchByValueA(valueC) {
        let sum = (this.valueA + this.valueB);
        if (this.checkByValueA(sum, valueC)) {
            return true;
        }

        this.addChildrenInQueue(valueC);
        return false;
    }

    searchByValueB(valueC) {
        let sum = (this.valueA + this.valueB);
        if (this.checkByValueB(sum, valueC)) {
            return true;
        }

        this.addChildrenInQueue(valueC);
        return false;
    }

    toString() {
        return "[" + this.valueA + "," + this.valueB + "]";
    }
}

module.exports = {
    "TreeNode": TreeNode
}