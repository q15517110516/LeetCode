// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]

// 
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
    // this.val = (val===undefined ? 0 : val)
    // this.left = (left===undefined ? null : left)
    // this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number[]}
// 
var inorderTraversal = function(root) {

    let res = [];
    getNode(root, res);
    return res;
    
};

var getNode = function(node, res){
    if(node === null){
        return 0;
    }

    if(node.left !== null){
        getNode(node.left, res);
    }
    res.push(node.val);
    if(node.right !== null){
        getNode(node.right, res);
    }

};
