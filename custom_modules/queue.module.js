class CustomQueue {
    constructor() {
        this.items = [];
    }

    add(item) {
        if (item) {
            this.items.push(item);
        }
        return this;
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
    "Queue": CustomQueue
}