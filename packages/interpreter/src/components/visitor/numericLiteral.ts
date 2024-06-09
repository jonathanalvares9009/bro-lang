import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

export default class NumericLiteral implements Visitor {
  visitNode(node: ASTNode) {
    console.log("NumericLiteral");
    return node.value;
  }
}
