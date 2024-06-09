import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

export default class StringLiteral implements Visitor {
  visitNode(node: ASTNode) {
    console.log("StringLiteral");
    return node.value;
  }
}
