import Visitor from ".";
import { ASTNode } from "bro-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class IdentifierExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.name) {
      throw new InvalidStateException(`Invalid node name for: ${node.type} bro.`);
    }

    let value = InterpreterModule.getCurrentScope().get(node.name);

    if (value === null) value = "nothing";
    else if (value === true) value = "correct";
    else if (value === false) value = "wrong";

    return value;
  }
}
