// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

//        6
//      /   \
//     2     8
//    / \   / \
//   0   4 7   9
//      / \
//     3  5
// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// 
// Definition for a binary tree node.
// function TreeNode(val) {
    // this.val = val;
    // this.left = this.right = null;
// }
// 

// 
// @param {TreeNode} root
// @param {TreeNode} p
// @param {TreeNode} q
// @return {TreeNode}
// 

// BST: 
// 1. For any node N, the value of all nodes on the left subtree is less than or equal to the value of node N
// 2. For any node N, the value of all nodes on the right subtree is greater than or equal to the value of node N 
// 3. The left and right subtrees of BST are also BST

// Process: 
// 1. Starting from the root, traverse the tree;
// 2. If root is equal to p or q, then root is the LCA of p and q;
// 3. If root is greater than p and q at the same time, both p and q are on the left subtree, then take 'root.left' as the root node and continue with the step 1;
// 4. If root is less than p and q at the same time, both p and q are on the right subtree, then take 'root.right' as the root node and continue with the step 1;
// 5. If none of the above is true, p and q are on two subtrees, then root is the LCA of p and q.

var lowestCommonAncestor = function(root, p, q) {

    // If root is equal to p or q, then root is the LCA of p and q;
    if(root === null || root === p || root === q){
        return root;
    }
    let rootVal = root.val;
    let pVal = p.val;
    let qVal = q.val;
    
    // If root is greater than p and q at the same time, both p and q are on the left subtree, then take 'root.left' as the root node and continue with the step 1;
    if(pVal < rootVal && qVal < rootVal){
        return lowestCommonAncestor(root.left, p, q);
    }

    // If root is less than p and q at the same time, both p and q are on the right subtree, then take 'root.right' as the root node and continue with the step 1;
    else if(pVal > rootVal && qVal > rootVal){
        return lowestCommonAncestor(root.right, p, q);
    }

    // If none of the above is true, p and q are on two subtrees, then root is the LCA of p and q.
    else{
        return root;
    }
};