class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.count = 0;
    }
    enque(data){
        const newNode = new Node(data);

        if ( this.front === null ) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        this.count++;
    }
    deque(){
        if ( this.front === null ) return null;

        const removed = this.front.data;
        this.front = this.front.next;
        this.count--;
        return removed;
    }
    getFront(){
        if ( this.front === null ) return null;
        return this.front.data;
    }
    getRear(){
       if ( this.rear === null ) return null;
        return this.rear.data;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.count === 0;
    }
}
// Driver code
const queue = new Queue();
console.log( queue.isEmpty() );
queue.enque(10);
queue.enque(20);
queue.enque(30);
console.log( queue.getFront() );
console.log( queue.getRear() );
queue.deque();
queue.deque();
console.log( queue.getFront() );
console.log( queue.getRear() );
console.log( queue.size() );
console.log( queue.isEmpty() );