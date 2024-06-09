import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class IdentifierExpression extends Expression {
  getExpression(): ASTNode {
    const name = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.IDENTIFIER_TYPE
    ).value;
    console.log("Parser => IdentifierExpression");
    return {
      type: NodeType.IdentifierExpression,
      name,
    };
  }
}
