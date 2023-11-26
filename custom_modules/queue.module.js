class CustomQueue {
        constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    get() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = {
    "Queue" : CustomQueue
}