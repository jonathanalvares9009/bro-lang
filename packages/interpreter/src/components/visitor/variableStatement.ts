import Visitor from ".";
import { ASTNode } from "bro-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class VariableStatement implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.declarations)
      throw new InvalidStateException(
        `Bro variable declarations in variable statement is not present: ${node.declarations}`
      );

    node.declarations.forEach((declaration) => {
      InterpreterModule.getVisitor(declaration.type).visitNode(declaration);
    });
  }
}
