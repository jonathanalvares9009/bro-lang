import Statement from ".";

import { TokenTypes } from "../../../constants/broLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

export default class ExecuteTaskStatement extends Statement {
  getStatement(): ASTNode {
    this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.BRO_EXECUTE_TASK
    );

    if (this._tokenExecutor.getLookahead() == null) {
      throw new SyntaxError(`Unexpected end of "bro remember task" statement`);
    }

    const name = this._tokenExecutor.eatTokenAndForwardLookahead(
      TokenTypes.IDENTIFIER_TYPE
    ).value;

    this._tokenExecutor.eatOptionalSemiColonToken();

    return {
      type: NodeType.ExecuteTaskStatement,
      name,
    };
  }
}
