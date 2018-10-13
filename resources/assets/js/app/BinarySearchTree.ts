import { BinaryTreeNode } from "./BinaryTreeNode";

export class BinarySearchTree {
    constructor(public rootNode?: BinaryTreeNode) {}

    public insert(key: number, value: number) {
        if (this.rootNode == undefined) {
            this.rootNode = new BinaryTreeNode(key, value);
        } else {
            this.rootNode.insert(new BinaryTreeNode(key, value))
        }
    }

    public lookup(key: number) {
        if (this.rootNode != undefined) {
            if (this.rootNode.key == key) {
                return this.rootNode;
            } else {
                return this.rootNode.lookup(key);
            }
        } else {
            return this.rootNode;
        }
    }

    public toString() {
        return this.rootNode.toString();
    }
}