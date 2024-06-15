import Visitor from ".";
import { ASTNode } from "bro-lang-parser";

import InterpreterModule from "../../module/interpreterModule";

export default class RememberTaskStatement implements Visitor {
  visitNode(node: ASTNode) {
    const currentScope = InterpreterModule.getCurrentScope();
    const taskName = node.name;
    const taskBody = node.body;
    if (taskName) {
      currentScope.declare(taskName, taskBody);
    }
  }
}
