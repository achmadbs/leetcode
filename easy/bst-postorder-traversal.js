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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = [];
  if (!root) return result;

  const postorder = (node) => {
    if (!node) return;

    if (node.left) postorder(node.left);
    if (node.right) postorder(node.right);
    result.push(node.val);
  };
  postorder(root);
  return result;
};
