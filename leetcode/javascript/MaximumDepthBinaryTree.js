/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
  
    const countTotalNodes = (node, count) => {
      if (!node) return count;
  
      return Math.max(countTotalNodes(node.left, count + 1), countTotalNodes(node.right, count + 1));
    }
  
    return countTotalNodes(root, 0);
  };
