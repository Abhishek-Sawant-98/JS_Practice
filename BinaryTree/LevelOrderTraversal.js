class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.left = null;
        this.right = null;
    }
}
class Queue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.count = 0;
    }
    enque(newNode){
        if ( this.front === null ) {
            this.front = newNode;
        } else {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        this.count++;
    }
    deque(){
        if ( this.front === null ) return;

        const removed = this.front;
        this.front = this.front.next;
        this.count--;
        return removed;
    }
    getFront(){
        if ( this.front === null ) return null;
        return this.front;
    }
    getRear(){
        if ( this.rear === null ) return null;
        return this.rear;
    }
    isEmpty(){
        return this.count === 0;
    }
}
class Tree {
    constructor(root){
        this.root = root ?? null;
    }
    levelOrderTraversal(){
        if ( this.root === null ) return;
        const queue = new Queue();
        queue.enque(this.root);

        while ( !queue.isEmpty() ) {
            const current = queue.deque();
            console.log(current.data);

            [ current.left, current.right ].forEach( ( node ) => {
                if ( node !== null ) queue.enque( node );
            } );
        }
    }
}
const root = new Node(10);
    tree = new Tree(root);

tree.root.left = new Node(20);
tree.root.right = new Node(30);
tree.root.right.left = new Node(40);
tree.root.right.right = new Node(60);
tree.root.right.right.left = new Node(70);
tree.levelOrderTraversal();