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

        newNode.next = this.head.next;
        this.head.next = newNode;

        newNode.data = this.head.data;
        this.head.data = data;
    }
    shift(){
        if ( this.head === null ) return;

        if ( this.head.next === this.head ) {
            this.head = null;
            return;
        }

        let current = this.head;

        while ( current.next !== this.head ) {
            current = current.next;
        }

        current.next = this.head.next;
        this.head = this.head.next;
    }
    push(data){
        const newNode = new Node(data);

        if ( this.head === null ) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        newNode.next = this.head.next;
        this.head.next = newNode;

        newNode.data = this.head.data;
        this.head.data = data;
        this.head = this.head.next;
    }
    delete(position){
        if ( this.head === null || position < 1 ) return;

        if ( this.head.next === this.head ) {
            this.head = null;
            return;
        }

        let current = this.head;

        for (let i = 0; i < position - 2; i++) {
            if ( current.next !== this.head ) return;
            current = current.next;
        }

        current.next = current.next.next;
    }
}
// driver code
const list = new CircularLinkedlist();
list.unshift(20)
list.unshift(10)
list.print();
list.unshift(5)
list.print()
list.shift()
list.print()
list.push(30)
list.print()
list.delete(2)
list.print()