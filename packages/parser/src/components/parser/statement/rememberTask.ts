import Statement from ".";

import { TokenTypes } from "../../../constants/broLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

export default class RememberTaskStatment extends Statement {
  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.BRO_REMEMBER_TASK
    );

    if (this._tokenExecutor.getLookahead() == null) {
      throw new SyntaxError(`Unexpected end of "bro remember task" statement`);
    }

    const name = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.IDENTIFIER_TYPE
    ).value;

    const body = Statement.getStatementImpl(
      this._tokenExecutor.getLookahead()!
    ).getStatement();

    return {
      type: NodeType.RememberTaskStatment,
      name,
      body,
    };
  }
}
