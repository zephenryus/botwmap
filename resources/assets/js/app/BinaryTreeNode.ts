export class BinaryTreeNode {
    constructor(
        public key: number,
        public value: number,
        public left: BinaryTreeNode = null,
        public right: BinaryTreeNode = null
    ) {}

    public insert(node: BinaryTreeNode) {
        if (node.key < this.key) {
            if (this.left == null) {
                this.left = node;
            } else {
                this.left.insert(node);
            }
        } else {
            if (this.right == null) {
                this.right = node;
            } else {
                this.right.insert(node);
            }
        }
    }

    public lookup(key: number) {
        if (this.key == key) {
            return this;
        } else {
            if (key < this.key) {
                if (this.left == null) {
                    return null;
                } else {
                    return this.left.lookup(key);
                }
            } else {
                if (this.right == null) {
                    return null;
                } else {
                    return this.right.lookup(key);
                }
            }
        }
    }

    public toString() {
        return "{key: " + this.key + ", value: " + this.value + ", left: " + this.left.toString() + ", right: " + this.right.toString() + "}";
    }
}