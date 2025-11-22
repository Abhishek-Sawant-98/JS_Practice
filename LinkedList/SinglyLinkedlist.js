class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Linkedlist {
    constructor(head) {
        this.head = head ?? null;
    }

    print(head){
        let current = head ?? this.head,
            output = '';

        while( current !== null ){
            output += `${current.data} -> `;
            current = current.next;
        }
        output += 'null';
        console.log(output);
    }

    push(data) {
        const newNode = new Node(data);

        let current = this.head;

        if ( current === null ) {
            this.head = newNode;
            return;
        }

        // Traverse till current becomes the last node
        while ( current.next !== null ) {
            current = current.next;
        }
        current.next = newNode;
    }
    shift() {
        if ( this.head === null ) {
            this.print();
            return;
        }

        this.head = this.head.next;
        this.print();
    }
    insertAt(position, data){
        const newNode = new Node(data);
        let current = this.head;

        if ( position < 1 ) {
            console.error("Invalid position");
            return;
        } else if ( position === 1 ) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        // Get hold of the 'position - 1"th element
        for (let i = 0; i < position - 2; i++) {
            if ( current === null || current.next === null ) {
                console.error("Invalid position");
                return;
            }
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    search(head, x){
        if ( head === null ) return -1;
        if ( head.data === x ) return 1;

        const position = this.search( head.next, x);

        if ( position === -1 ) return -1;
        return position + 1;
    }
    sortedInsert(data){
        const newNode = new Node( data );
        let current = this.head;

        if ( current === null ) {
            this.head = newNode;
            return;
        }
        if ( data < this.head.data ) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        while ( current.next !== null && current.next.data <= data ) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    getMiddle(){
        let slow = this.head,
            fast = this.head;

        if ( slow === null ) return null;

        while( fast !== null && fast.next !== null ) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
    getNthFromEnd(n){
        let current = this.head,
            tail = this.head;

        if ( current === null || n < 1 ) return;

        for (let i = 0; i < n; i++) {
            if ( tail === null ) return;
            tail = tail.next;
        }

        while ( tail !== null ) {
            current = current.next;
            tail = tail.next;
        }
        return current.data;
    }
    reverse(){
        let prev = null,
            current = this.head;

        while ( current !== null ) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        this.print();
    }
    reverseRecursive( prev, current ){
        if ( current === null ) {
            this.head = prev;
            this.print();
            return;
        }

        const next = current.next;
        current.next = prev;

        this.reverseRecursive( current, next );
    }
    removeDups(){
        let current = this.head;

        if ( current === null || current.next === null ) {
            return;
        }

        while ( current.next !== null ) {
            if ( current.data === current.next.data ) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
}
// driver code
const list = new Linkedlist();
list.sortedInsert(10);
list.sortedInsert(30);
list.sortedInsert(20);
list.sortedInsert(20);
list.print();
list.removeDups();
list.print();