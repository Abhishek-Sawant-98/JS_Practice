class Queue {
    constructor(cap){
        this.#capacity = cap;
        this.#arr = new Array( cap );
    }

    #capacity = 0;
    #arr = null;
    #front = 0;
    #size = 0;

    #getRearIndex() {
        return ( this.#front + this.#size - 1 ) % this.#capacity;
    }
    enque(data){
        if ( this.#size === this.#capacity ) return;
        let rear = this.#getRearIndex();
        rear = ( rear + 1 ) % this.#capacity;
        this.#arr[ rear ] = data;
        this.#size++;
    }
    deque(){
        if ( this.isEmpty() ) return null;
        const removed = this.#arr[ this.#front ];
        this.#front = ( this.#front + 1 ) % this.#capacity;
        this.#size--;
        return removed;
    }
    getFront(){
        if ( this.isEmpty() ) return null;
        return this.#arr[ this.#front ];
    }
    getRear(){
        if ( this.isEmpty() ) return null;
        return this.#arr[ this.#getRearIndex() ];
    }
    isEmpty(){
        return this.#size === 0;
    }
}
// Driver code
const queue = new Queue( 4 );
console.log( queue.isEmpty() );
queue.enque(10);
queue.enque(20);
console.log( queue.getFront() );
console.log( queue.getRear() );
queue.deque();
queue.enque(30);
queue.enque(40);
queue.enque(50);
queue.enque(60);
console.log( queue.getFront() );
console.log( queue.getRear() );
console.log( queue.isEmpty() );
