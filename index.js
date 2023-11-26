const {Queue} = require("./custom_modules/queue.module");
const {TreeNode, nodePosition} = require("./custom_modules/treenode");

const valueNodePosition = {
    all: 0,
    left: 1,
    right: 2
};

function search(valueA, valueB, valueC, searchPosition) {
    const queue = new Queue();
    let node = new TreeNode(valueA, valueB, nodePosition.left)
    do {
        if (searchPosition === valueNodePosition.left) {
            if (node.foundByValueA(valueC)) return "YES";
        } else if (searchPosition === valueNodePosition.right) {
            if (node.foundByValueB(valueC)) return "YES";
        } else {
            if (node.found(valueC)) return "YES";
        }

        if (node.parent.position === nodePosition.left) {
            if (node.left) queue.add(node.left);
            if (node.right) queue.add(node.right);
        } else {
            if (node.right) queue.add(node.right);
            if (node.left) queue.add(node.left);
        }
        //  console.log(node.toString());
        if (!queue.isEmpty()) {
            node = queue.get();
        }

    } while (!queue.isEmpty());

    return "NO";
}

let a = 5;
let b = 7;
let c = 123;
console.log(`Введенные значения a=${a} b=${b} c=${c}`);
console.log(`== 1. Поиск по левой значение`);
let resultA = search(a, b, c, valueNodePosition.left);
console.log(`Результат поиска: ${resultA}\n`);

console.log(`== 2. Поиск по правой значение`);
let result3 = search(a, b, c, valueNodePosition.right);
console.log(`Результат поиска: ${result3} \n`);

console.log(`== 3. Поиск по левой и правой значение`);
let result = search(a, b, c, valueNodePosition.all);
console.log(`Результат поиска: ${result}`);

