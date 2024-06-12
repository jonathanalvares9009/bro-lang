import { ASTNode } from "bro-lang-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
