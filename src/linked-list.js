const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var node = new Node(data);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        return this;
    }


    head() {
        if (this._head == null) {
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (this._tail == null) {
            return null;
        } else {
            return this._tail.data;
        }
    }

    at(index) {
        this.index = index;
        var current = this._head;

        if (this.index == 0) {
            // return this._head.data;
        } else if (this.index == this.length - 1) {
            current = this._tail;
            // return this._tail.data;
        } else {
            var count = 0;
            while (count < this.index) {
                current = current.next;
                count++;
            }
        }
        return current.data;
    }

    insertAt(index, data) {
        this.index = index;
        this.data = data;
        var node = new Node(this.data);
        var current = this._head;

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else if (this.index == 0) {

            this._head.prev = node;
            node.next = this._head;
            this._head = node;

        } else if (this.index == this.length) {

            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        } else {
            var count = 0;
            while (count < this.index - 1) {
                current = current.next;
                count++;
            }
            var currentNext = current.next;

            node.next = current.next;
            currentNext.prev = node;

            current.next = node;
            node.prev = current;
        }
        this.length++;

        return this;
    }

    isEmpty() {
        return (this.length == 0);
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        this.index = index;
        var current = this._head;

        if (this.index == 0) {
            this._head = this._head.next;
        } else if (this.index == this.length - 1) {
            this._tail = this._tail.prev;
        } else {
            var count = 1;

            while (count < this.index) {
                current = current.next;
                count++;
            }

            var beforeNodeToDelete = current.prev;
            var afterNodeToDelete = current.next;

            beforeNodeToDelete.next = current.next;
            afterNodeToDelete.prev = current.prev;

            current = null;
        }

        this.length--;

        return this;
    }

    reverse() {

        var current = this._head;

        while (current != null) {

            var temp = current.prev;
            current.prev = current.next;
            current.next = temp;

            current = current.prev;
        }

        var tempForHead = this._head;
        this._head = this._tail;
        this._tail = tempForHead;

        return this;
    }

    indexOf(data) {
        this.data = data;
        var current = this._head;
        var result = -1;

        for (var index = 0; index < this.length; index++) {
            if (current.data == this.data) {
                result = index;
            }
            current = current.next;
        }

        return result;
    }

module.exports = LinkedList;
