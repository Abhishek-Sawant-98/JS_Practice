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

    // Insert node at first position 
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert node at last position
    insertLast(data) {
        // If list is empty
        if (!this.head) {
            this.insertFirst(data);
            return;
        }

        // Else traverse the list and append it to the end
        const node = new Node(data);
        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
        this.size++;
    }

    // Insert node at index position
    insertAt(data, index) {
        // If index is out of bounds
        if (index < 0 || index > this.size) {
            console.log(`Insert index '${index}' is out of bounds`);
            return;
        }

        // Else if the index is 0
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        // Else traverse till (index - 1) and insert it at index
        const node = new Node(data);
        let current = this.head,
            prev,
            prevNodeIndex = 0;

        while (prevNodeIndex < index) {
            prev = current;
            current = current.next;
            prevNodeIndex++;
        }

        node.next = current;
        prev.next = node;
        this.size++;
    }

    // Get node at index position

    // Remove node at index position

    // Remove node at first position

    // Remove node at last position 

    // Print the entire list
    printList() {
        // If list is empty
        if (!this.head) {
            console.log('List is empty');
            return;
        }

        let current = this.head;
        let list = ``;

        while (current) {
            list += `${current.data} -> `;
            current = current.next;
        }
        list += 'null';
        console.log(list);
    }

    // Clear the entire list
    clearList() {
        this.head = null;
        this.size = 0;
    }

}

const ll = new LinkedList();
ll.insertFirst(2);
ll.insertFirst(1);
ll.insertLast(3);
ll.insertAt(4, 1);
// ll.clearList();

ll.printList();

console.log(ll);