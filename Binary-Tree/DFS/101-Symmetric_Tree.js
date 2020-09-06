// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3


// Definition for a binary tree no
// function TreeNode(val, left, right
    // this.val = (val===undefined ? 0 : v
    // this.left = (left===undefined ? null :ft)
    // this.right = (right===undefined ? nullright)
// }

// @param {TreeNode} root
// @return {boolean}


var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    return compareNodes(root.left, root.right);
    
    
};

var compareNodes = function(p, q){
    if(p === null && q === null){
        return true;
    }
    if(p === null || q === null){
        return false;
    }
    if(p.val !== q.val){
        return false;
    }
    return compareNodes(p.left, q.right) && compareNodes(p.right, q.left);
    
}