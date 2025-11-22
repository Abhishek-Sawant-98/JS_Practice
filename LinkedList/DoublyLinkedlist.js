class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedlist {
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
    unshift(data){
        const newNode = new Node(data);

        if ( this.head === null ) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
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
        newNode.prev = current;
    }
    reverse(){
        let prev = null,
            current = this.head;

        while ( current !== null ) {
            const next = current.next;
            current.next = current.prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this.head = prev;
        this.print();
    }
    shift(){
        if ( this.head === null ) return;

        this.head = this.head.next;
        this.head.prev = null;
    }
    pop(){
        if ( this.head === null ) {
            return;
        }
        if ( this.head.next === null ) {
            this.head = null;
            return;
        }

        let current = this.head;

        while ( current.next !== null ) {
            current = current.next;
        }
        current.prev.next = null;
    }
}
// driver code
const list = new DoublyLinkedlist();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.print();
list.reverse()
list.shift()
list.print()
list.pop()
list.print()