// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

// 
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
    // this.val = (val===undefined ? 0 : val)
    // this.left = (left===undefined ? null : left)
    // this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number}
// 
var minDepth = function(root) {
    if(root === null){
        return 0;
    }
    if(root.left === null && root.right === null){
        return 1;
    }
    let left = minDepth(root.left);
    let right = minDepth(root.right);

    if(root.left === null){
        return right + 1;
    }
    if(root.right === null){
        return left + 1;
    }
    return Math.min(left, right) + 1;
    
};