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
    height(root){
        if ( root === null ) return 0;

        return Math.max( 
            this.height( root.left ), 
            this.height( root.right ) 
        ) + 1;
    }
}
const root = new Node(10);
    tree = new Tree(root);

tree.root.left = new Node(20);
tree.root.right = new Node(30);
tree.root.right.left = new Node(40);
tree.root.right.right = new Node(60);
tree.root.right.right.left = new Node(70);
console.log( tree.height(root) );