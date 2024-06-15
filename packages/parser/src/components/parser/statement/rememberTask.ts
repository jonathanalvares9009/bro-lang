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

    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.OPEN_CURLY_BRACE_TYPE
    );

    const body =
      this._tokenExecutor.getLookahead()?.type !==
      TokenTypes.CLOSED_CURLY_BRACE_TYPE
        ? Statement.getStatementImpl(
            this._tokenExecutor.getLookahead()!
          ).getStatement()
        : [];

    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.CLOSED_CURLY_BRACE_TYPE
    );

    return {
      type: NodeType.RememberTaskStatment,
      name,
      body,
    };
  }
}
