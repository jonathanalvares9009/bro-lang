import Statement from ".";

import { TokenTypes } from "../../../constants/bhaiLangSpec";
import { NodeType } from "../../../constants/constants";
import { ASTNode } from "../types/nodeTypes";

export default class ContinueStatement extends Statement {
  getStatement(): ASTNode {
    console.log("Parser => ContinueStatement");
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.AGLA_DEKH_BHAI);

    return {
      type: NodeType.ContinueStatement,
    };
  }
}
