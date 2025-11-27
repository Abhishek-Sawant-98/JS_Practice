function isMatching(a,b){
    return (
        ( a === '(' && b === ')' ) ||
        ( a === '[' && b === ']' ) ||
        ( a === '{' && b === '}' )
    );
}
function isBalanced(str){
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const character = str[i];

        if ( [ '(', '[', '{' ].includes( character ) ) {
            stack.push( character );
        } else if ( stack.length === 0 ) {
            return false;
        } else if ( isMatching( stack[ stack.length - 1 ], character ) ) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}
// Driver code
console.log( isBalanced( '(()' ) );
console.log( isBalanced( '(())' ) );
console.log( isBalanced( '[()]' ) );
console.log( isBalanced( '([)]' ) );
console.log( isBalanced( '[({})' ) );