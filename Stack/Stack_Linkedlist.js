// Implement stack using linkedlist
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.head = null;
    }

    #count = 0;

    isEmpty(){
        return this.head === null;
    }
    push(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.#count++;
    }
    pop(){
        if ( this.head === null ) return null;

        const data = this.head.data;
        this.head = this.head.next;
        this.#count--;
        return data;
    }
    peek(){
        if ( this.head === null ) return null;
        return this.head.data;
    }
    size(){
        return this.#count;
    }
}
// Driver code
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
console.log(stack.size());
console.log(stack.peek());