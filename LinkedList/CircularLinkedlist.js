class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class CircularLinkedlist {
    constructor(head) {
        this.head = head ?? null;
    }

    print(head){
        if ( this.head === null ) return;

        let current = this.head,
            output = '';

        do {
            output += `${current.data} -> `;
            current = current.next;
        } while ( current !== this.head );

        console.log(output);
    }
    unshift(data){
        const newNode = new Node(data);

        if ( this.head === null ) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let current = this.head;

        while ( current.next !== this.head ) {
            current = current.next;
        }

        current.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }
}
// driver code
const list = new CircularLinkedlist();
list.unshift(20)
list.unshift(10)
list.print();
list.unshift(5)
list.print()