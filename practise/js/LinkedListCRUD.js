class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at index
    insertAt(data, index) {
        // If index is out of bounds
        if (index < 0 || index > this.size) {
            console.log(`Insert index '${index}' is out of bounds`);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }

        // Else traverse till (index - 1) and insert at index
        const node = new Node(data);
        let current = this.head,
            prev, prevNodeIndex = 0;

        while (prevNodeIndex < index) {
            prev = current;
            current = current.next;
            prevNodeIndex++;
        }
        node.next = current;
        prev.next = node;
        this.size++;
    }

    // Insert at first
    insertFirst(data) {
        this.insertAt(data, 0);
    }

    // Insert at last
    insertLast(data) {
        this.insertAt(data, this.size);
    }

    // Remove at index
    removeAt(index) {
        // If list is empty
        if (!this.head) {
            console.log(`Cannot remove as list is empty`);
            return;
        }

        // If index is out of bounds
        if (index < 0 || index >= this.size) {
            console.log(`Remove index '${index}' is out of bounds`);
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        // Else traverse till (index - 1) and remove at index
        let current = this.head,
            prev, prevNodeIndex = 0;

        while (prevNodeIndex < index) {
            prev = current;
            current = current.next;
            prevNodeIndex++;
        }
        prev.next = current.next;
        this.size--;
    }

    // Remove at first
    removeFirst() {
        this.removeAt(0);
    }

    // Remove at last
    removeLast() {
        this.removeAt(this.size - 1);
    }

    // Get at index
    getAt(index) {
        // If list is empty
        if (!this.head) {
            console.log(`Cannot fetch as list is empty`);
            return;
        }

        // If index is out of bounds
        if (index < 0 || index >= this.size) {
            console.log(`Fetch index '${index}' is out of bounds`);
            return;
        }

        // Else traverse till index
        let current = this.head,
            currNodeIndex = 0;

        while (current) {
            if (currNodeIndex === index) {
                console.log(`Node at index '${index}' is ${current.data}`);
                return;
            }
            current = current.next;
            currNodeIndex++;
        }
    }

    // Get at first
    getFirst() {
        this.getAt(0);
    }

    // Get at last
    getLast() {
        this.getAt(this.size - 1);
    }

    // Update at index
    updateAt(data, index) {
        // If list is empty
        if (!this.head) {
            console.log(`Cannot update as list is empty`);
            return;
        }

        // If index is out of bounds
        if (index < 0 || index > this.size) {
            console.log(`Update index '${index}' is out of bounds`);
            return;
        }

        if (index === 0) {
            this.head.data = data;
            return;
        }

        // Else traverse till index and update the data property
        let current = this.head,
            currNodeIndex = 0;

        while (current) {
            if (currNodeIndex === index) {
                current.data = data;
                return;
            }
            current = current.next;
            currNodeIndex++;
        }
    }

    // Update at first
    updateFirst(data) {
        this.updateAt(data, 0);
    }

    // Update at last
    updateLast(data) {
        this.updateAt(data, this.size - 1);
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list
    printList() {
        // If list is empty
        if (!this.head) {
            console.log(`Cannot print as list is empty`);
            return;
        }

        let current = this.head,
            list = '';

        while (current) {
            list += ` ${current.data} ->`;
            current = current.next;
        }
        list += ' null';
        console.log(list);
    }
}

const ll = new LinkedList();

ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(300);
ll.insertAt(400, 2);
ll.updateAt(10, 1);
ll.updateFirst(20);
ll.updateLast(80);
ll.getAt(3);
ll.getFirst();
ll.getLast();

ll.printList();
ll.removeAt(2);

ll.printList();
ll.removeFirst();

ll.printList();
ll.removeLast();

ll.printList();

console.log(ll);