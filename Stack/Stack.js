class Stack {
    constructor(){
        this.list = {};
        this.count = 0;
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.size() === 0;
    }
    push(data){
        this.list[ this.count ] = data;
        this.count++;
    }
    pop(){
        if ( this.isEmpty() ) {
            console.log("Stack is empty");
            return;
        }
        const removed = this.list[ this.count - 1 ];
        delete this.list[ this.count - 1 ];
        this.count--;
        return removed;
    }
    peek(){
        if ( this.isEmpty() ) {
            console.log("Stack is empty");
            return;
        }
        return this.list[ this.count - 1 ];
    }
}
// Driver code
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.peek();
stack.push(30)
stack.peek();
stack.size();
stack.isEmpty();