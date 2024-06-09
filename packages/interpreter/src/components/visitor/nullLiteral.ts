import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

export default class NullLiteral implements Visitor {
  visitNode(node: ASTNode) {
    console.log("NullLiteral");
    return node.value;
  }
}
