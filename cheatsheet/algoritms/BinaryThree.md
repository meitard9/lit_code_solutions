## Binary Tree Iteration Orders (Cheatsheet)

This cheatsheet provides an overview of the three main iteration orders for binary trees along with their iterative code implementations in Java:

**1. Preorder Traversal**

**Visit Order:** Root -> Left subtree -> Right subtree

**Code:**

```java
public class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> preorderList = new ArrayList<>();
        if (root == null) {
            return preorderList;
        }

        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);

        while (!stack.isEmpty()) {
            TreeNode currentNode = stack.pop();
            preorderList.add(currentNode.val);

            if (currentNode.right != null) {
                stack.push(currentNode.right); // Push right child first (preorder)
            }
            if (currentNode.left != null) {
                stack.push(currentNode.left);
            }
        }

        return preorderList;
    }
}
public class SolutionRecursive {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> preorderList = new ArrayList<>();
        preorderHelper(root, preorderList);
        return preorderList;
    }

    private void preorderHelper(TreeNode root, List<Integer> preorderList) {
        if (root != null) {
            preorderList.add(root.val);
            preorderHelper(root.left, preorderList);
            preorderHelper(root.right, preorderList);
        }
    }
}
```

**2. Inorder Traversal**

**Visit Order:** Left subtree -> Root -> Right subtree

```java
public class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> inorderList = new ArrayList<>();
        if (root == null) {
            return inorderList;
        }

        Stack<TreeNode> stack = new Stack<>();
        TreeNode currentNode = root;

        while (currentNode != null || !stack.isEmpty()) {
            if (currentNode != null) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            } else {
                currentNode = stack.pop();
                inorderList.add(currentNode.val);
                currentNode = currentNode.right;
            }
        }

        return inorderList;
    }
}

public class SolutionRecursive {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> inorderList = new ArrayList<>();
        inorderHelper(root, inorderList);
        return inorderList;
    }

    private void inorderHelper(TreeNode root, List<Integer> inorderList) {
        if (root != null) {
            inorderHelper(root.left, inorderList);
            inorderList.add(root.val);
            inorderHelper(root.right, inorderList);
        }
    }
}

```
**3. Postorder Traversal**

**Visit Order:** Left subtree -> Right subtree -> Root

```Java
public class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> list = new ArrayList<Integer>();
        if(root==null) return list;
        Stack<TreeNode> stack = new Stack<TreeNode>();
        stack.push(root);
        TreeNode curr= root;

        while(!stack.isEmpty()) {
            if(!(curr.left==null && curr.right == null)){
                stack.push(curr);
                if(curr.left!=null) curr=curr.left; 
                else{
                    curr=curr.right;
                }
            }
            else{//is leaf
                list.add(curr.val);
                TreeNode father =stack.pop();
                if(father.left==curr) father.left=null;
                else father.right=null;
                curr=father;
            } 
        }
        return list;     // Return the solution list...
    }
}
public class SolutionReqursive {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> postorderList = new ArrayList<>();
        postorderHelper(root, postorderList);
        return postorderList;
    }

    private void postorderHelper(TreeNode root, List<Integer> postorderList) {
        if (root != null) {
            postorderHelper(root.left, postorderList);
            postorderHelper(root.right, postorderList);
            postorderList.add(root.val);
        }
    }
}
```
**BFS. Level-Order Traversal (Breadth-First Search)**

**Visit Order:**  Process nodes level by level, starting from the root and moving down

```Java
public class Solution {
    public List<List<Integer>> levelOrderTraversal(TreeNode root) {
        List<List<Integer>> levels = new ArrayList<>();
        if (root == null) {
            return levels;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            List<Integer> currentLevel = new ArrayList<>();
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                TreeNode currentNode = queue.poll();
                currentLevel.add(currentNode.val);

                if (currentNode.left != null) {
                    queue.offer(currentNode.left);
                }
                if (currentNode.right != null) {
                    queue.offer(currentNode.right);
                }
            }

            levels.add(currentLevel);
        }

        return levels;
    }
}
public class SolutionReqursive {
    public List<List<Integer>> levelOrderTraversal(TreeNode root) {
        List<List<Integer>> levels = new ArrayList<>();
        if (root == null) {
            return levels;
        }

        levelOrderHelper(root, levels, 0);
        return levels;
    }

    private void levelOrderHelper(TreeNode root, List<List<Integer>> levels, int level) {
        if (root == null) {
            return;
        }

        // Create a new list for the current level if it doesn't exist
        if (levels.size() == level) {
            levels.add(new ArrayList<>());
        }

        // Add the current node's value to the appropriate level list
        levels.get(level).add(root.val);

        // Recursively traverse left and right subtrees, incrementing the level
        levelOrderHelper(root.left, levels, level + 1);
        levelOrderHelper(root.right, levels, level + 1);
    }
}

```