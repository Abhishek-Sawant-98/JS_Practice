class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor(root){
        this.root = root ?? null;
        this.output = '';
    }
    printAtLevel(root, k){
        if ( root === null ) return;
        else if ( k <= 0 ) {
            console.log( root.data );
        } else {
            this.printAtLevel( root.left, k - 1 );
            this.printAtLevel( root.right, k - 1 );
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
tree.printAtLevel(root,2);