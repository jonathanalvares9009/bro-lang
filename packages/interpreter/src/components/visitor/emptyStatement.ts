import Visitor from ".";
import { ASTNode } from "bro-lang-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
