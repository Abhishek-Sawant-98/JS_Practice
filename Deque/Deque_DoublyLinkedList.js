class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class Deque {
    constructor(){
        this.front = null;
        this.rear = null;
    }
    insertFront(data){
        const newNode = new Node(data);
        newNode.next = this.front;
        if ( this.front !== null ) {
            this.front.prev = newNode;    
        } else {
            this.rear = newNode;
        }
        this.front = newNode;
    }
    insertRear(data){
        const newNode = new Node(data);
        newNode.prev = this.rear;
        if ( this.rear !== null ) {
            this.rear.next = newNode;
        } else {
            this.front = newNode;
        }
        this.rear = newNode;
    }
    deleteFront(){
        if ( this.front === null ) return null;
        const removed = this.front.data;
        this.front = this.front.next;
        this.front.prev = null;
        return removed;
    }
    deleteRear(){
        if ( this.rear === null ) return null;
        const removed = this.rear.data;
        this.rear = this.rear.prev;
        this.rear.next = null;
        return removed;
    }
    print(){
        let current = this.front,
            output = '';

        if ( this.front === null ) {
            console.log(null);
            return;
        }

        while ( current !== null ) {
            output += `${current.data} <-> `;
            current = current.next;
        }
        output += 'null';
        console.log(output);
    }
}
// Driver code
const deque = new Deque();
deque.insertFront(10);
deque.insertFront(20);
deque.insertFront(30);
deque.print();
deque.insertRear(40);
deque.insertRear(50);
deque.print();
deque.deleteFront();
deque.deleteRear();
deque.print()