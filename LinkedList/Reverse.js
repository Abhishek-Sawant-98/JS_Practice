class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class Linkedlist {
    constructor(head){
        this.head = head ?? null;
    }
    unshift(data){
        const newNode = new Node(data);

        if ( this.head === null ) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    print(){
        let current = this.head,
            output = '';

        if ( this.head === null ) {
            console.log( null );
            return;
        }

        while ( current !== null ) {
            output += `${current.data} -> `;
            current = current.next;
        }
        output += 'null';
        console.log( output );
    }
    reverse(){
        let prev = null,
            current = this.head;

        while ( current.next !== null ) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}
// Driver code
const list = new Linkedlist();
list.unshift(30);
list.unshift(20);
list.unshift(10);
list.print()
list.reverse()
list.print();