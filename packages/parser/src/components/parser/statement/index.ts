import { TokenTypes } from "../../../constants/bhaiLangSpec";
import BroLangModule from "../../../module/broLangModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";

export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    console.log("Parser => Statement");
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    console.log("Parser => Statement => getStatementImpl");
    switch (lookahead.type) {
      case TokenTypes.BOL_BHAI_TYPE:
        return BroLangModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return BroLangModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return BroLangModule.getBlockStatement();

      case TokenTypes.BHAI_YE_HAI_TYPE:
        return BroLangModule.getVariableStatement();

      case TokenTypes.AGAR_BHAI:
        return BroLangModule.getIfStatement();

      case TokenTypes.JAB_TAK_BHAI:
        return BroLangModule.getWhileStatement();

      case TokenTypes.BAS_KAR_BHAI:
        return BroLangModule.getBreakStatement();

      case TokenTypes.AGLA_DEKH_BHAI:
        return BroLangModule.getContinueStatement();

      default:
        return BroLangModule.getExpressionStatement();
    }
  }
}
