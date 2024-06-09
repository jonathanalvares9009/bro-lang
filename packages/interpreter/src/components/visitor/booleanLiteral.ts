import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

export default class BooleanLiteral implements Visitor {
  visitNode(node: ASTNode) {
    console.log("BooleanLiteral");
    return node.value;
  }
}
