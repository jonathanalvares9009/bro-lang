import Visitor from ".";
import { ASTNode } from "bro-lang-parser";

import InterpreterModule from "../../module/interpreterModule";
import Scope from "../scope";

export default class ExecuteTaskStatement implements Visitor {
  private evaluateNode(node: ASTNode | undefined, parentScope: Scope) {
    if (node) {
      InterpreterModule.setCurrentScope(new Scope(parentScope));
      InterpreterModule.getCurrentScope().setLoop(parentScope.isLoop());
      InterpreterModule.getVisitor(node.type).visitNode(node);
    }
  }
  visitNode(node: ASTNode) {
    const parentScope = InterpreterModule.getCurrentScope();
    const blockStatement = parentScope.get(node.name!) as ASTNode;
    this.evaluateNode(blockStatement, parentScope);
  }
}
