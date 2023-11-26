const {Queue} = require("./custom_modules/queue.module");
const {TreeNode} = require("./custom_modules/treenode");
const {position} = require("./custom_modules/position");

function search(valueA, valueB, valueC, checkByValuePos) {
    const queue = new Queue();
    let node = new TreeNode(valueA, valueB, position.left)
    do {
        if (checkByValuePos === position.left) {
            if (node.searchByValueA(valueC)) return "YES";
        } else if (checkByValuePos === position.left) {
            if (node.searchByValueB(valueC)) return "YES";
        } else {
            if (node.searchByAll(valueC)) return "YES";
        }

        if (node.parent.position === position.left) {
            if (node.left) queue.add(node.left);
            if (node.right) queue.add(node.right);
        } else {
            if (node.right) queue.add(node.right);
            if (node.left) queue.add(node.left);
        }
        // console.log(node.toString());
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
let resultA = search(a, b, c, position.left);
console.log(`Результат поиска: ${resultA}\n`);

console.log(`== 2. Поиск по правой значение`);
let result3 = search(a, b, c, position.right);
console.log(`Результат поиска: ${result3} \n`);

console.log(`== 3. Поиск по левой и правой значение`);
let result = search(a, b, c, null);
console.log(`Результат поиска: ${result}`);

