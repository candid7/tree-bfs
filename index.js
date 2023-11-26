const {Queue} = require("./custom_modules/queue.module");
const {TreeNode, NodePosition} = require("./custom_modules/tree.node.module");

function search(valueA, valueB, valueC, searchByPosition) {
    const queue = new Queue();
    let node = new TreeNode(valueA, valueB, NodePosition.left)
    do {
        if (node.found(valueC, searchByPosition)) {
            return "YES";
        }

        if (node.parent.position === NodePosition.left) {
            queue.add(node.left).add(node.right);
        } else {
            queue.add(node.right).add(node.left);
        }
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
let resultA = search(a, b, c, NodePosition.left);
console.log(`Результат поиска: ${resultA}\n`);

console.log(`== 2. Поиск по правой значение`);
let result3 = search(a, b, c, NodePosition.right);
console.log(`Результат поиска: ${result3} \n`);

console.log(`== 3. Поиск по левой и правой значение`);
let result = search(a, b, c, NodePosition.all);
console.log(`Результат поиска: ${result}`);

