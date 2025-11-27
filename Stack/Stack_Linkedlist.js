// Implement stack using linkedlist
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class CircularDoublyLinkedlist {
    constructor(head) {
        this.head = head ?? null;
    }
    push(data){
        const newNode = new Node(data);

        if ( this.head === null ) {
            this.head = newNode;
            this.head.next = this.head;
            this.head.prev = this.head;
            return;
        }

        newNode.next = this.head;
        newNode.prev = this.head.prev;
        this.head.prev.next = newNode;
        this.head.prev = newNode;
    }
    pop(){
        if ( this.head === null ) return null;

        if ( this.head.prev === this.head ) {
            const headData = this.head.data;
            this.head = null;
            return headData;
        }

        const removed = this.head.prev.data;
        this.head.prev = this.head.prev.prev;
        this.head.prev.next = this.head;
        return removed;
    }
    peek(){
        if ( this.head === null ) return null;

        return this.head.prev.data;
    }
    print(){
        let current = this.head,
            output = '';

        if ( this.head === null ) {
            console.log(null);
            return;
        }

        do {
            output += `${current.data} <-> `;
            current = current.next;
        } while ( current !== this.head );

        output += 'back to head';

        console.log(output);
    }
}
class Stack {
    constructor(){
        this.#list = new CircularDoublyLinkedlist();
    }

    #list = null;
    #count = 0;

    isEmpty(){
        return this.#count === 0;
    }
    push(data){
        this.#count++;
        this.#list.push(data);
    }
    pop(){
        this.#count--;
        return this.#list.pop();
    }
    peek(){
        return this.#list.peek();
    }
    size(){
        return this.#count;
    }
    print(){
        this.#list.print();
    }
}
// Driver code
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.print()
console.log(stack.size());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
stack.print();
