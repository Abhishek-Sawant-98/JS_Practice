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
    }
    inorder(root){
        // left root right
        if ( root === null ) return;

        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }
    preorder(root){
        // root left right
        if ( root === null ) return;

        console.log(root.data);
        this.preorder(root.left);
        this.preorder(root.right);
    }
    postorder(root){
        // left right root
        if ( root === null ) return;

        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.data);
    }
}
const root = new Node(10);
    tree = new Tree(root);

tree.root.left = new Node(20);
tree.root.right = new Node(30);
tree.root.right.left = new Node(40);
tree.root.right.right = new Node(60);
console.log("inorder ========");
tree.inorder(root); // 20 10 40 30 60
console.log("preorder ========");
tree.preorder(root); // 10 20 30 40 60
console.log("postorder ========");
tree.postorder(root); // 20 40 60 30 10