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
 * recursive
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  const result = [];
  const preorder = (node) => {
    if (!node) return null;

    result.push(node.val);
    if (node.left) preorder(node.left);
    if (node.right) preorder(node.right);
  };
  preorder(root);
  return result;
};

/**
 * normal method
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  const stack = [root];
  const preorderRes = [];

  while (stack.length) {
    let value = stack.pop();
    preorderRes.push(value.val);

    if (value.right) stack.push(value.right);
    if (value.left) stack.push(value.left);
  }
  return preorderRes;
};
