class Deque {
    constructor(cap){
        this.capacity = cap;
        this.arr = new Array(cap);
        this.front = 0;
        this.size = 0;
    }
    getRearIndex(){
        if ( this.isEmpty() ) return 0; 
        return ( this.front + this.size - 1 ) % this.capacity;
    }
    getFront(){
        if ( this.isEmpty() ) return null;
        return this.arr[this.front];
    }
    getRear(){
        if ( this.isEmpty() ) return null;
        return this.arr[this.getRearIndex()];
    }
    insertFront(data){
        if ( this.isFull() ) return;
        this.front = ( this.capacity - this.size ) % this.capacity;
        this.size++;
        this.arr[this.front] = data;
    }
    insertRear(data){
        if ( this.isFull() ) return;
        this.size++;
        this.arr[this.getRearIndex()] = data;
    }
    deleteFront(){
        if ( this.isEmpty() ) return null;
        const removed = this.arr[this.front];
        this.front = ( this.front + 1 ) % this.capacity;
        this.size--;
        return removed;
    }
    deleteRear(){
        if ( this.isEmpty() ) return null;
        const removed = this.arr[this.getRearIndex()];
        this.arr[this.getRearIndex()] = null;
        this.size--;
        return removed;
    }
    isFull(){
        return this.size === this.capacity;
    }
    isEmpty(){
        return this.size === 0;
    }
    print(){
        console.log( 'arr: ', this.arr );
        console.log( 'front: ', this.getFront() );
        console.log( 'rear: ', this.getRear() );
    }
}
// Driver code
const deque = new Deque(4);
deque.insertFront(10);
deque.insertFront(20);
deque.insertFront(30);
deque.print();
deque.insertRear(40);
deque.insertRear(50);
deque.print();
deque.deleteFront();
deque.deleteRear();
deque.insertRear(50);
deque.insertRear(60);
deque.print();