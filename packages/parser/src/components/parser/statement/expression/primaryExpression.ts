import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

import Literal from "./literals";

export default class PrimaryExpression extends Expression {
  getExpression(): ASTNode {
    console.log("Parser => PrimaryExpression");
    const token = this._tokenExecutor.getLookahead();

    switch (token?.type) {
      case TokenTypes.OPEN_PARENTHESIS_TYPE:
        return Expression.getExpressionImpl(
          NodeType.ParanthesizedExpression
        ).getExpression();
      case TokenTypes.STRING_TYPE:
      case TokenTypes.NUMBER_TYPE:
      case TokenTypes.BOOLEAN_TYPE:
        return Literal.getLiteralImpl(token.type).getLiteral();
      case TokenTypes.nothing_TYPE:
        return this._getnothingLiteral();
      default:
        return this._getLeftHandSideExpression();
    }
  }

  private _getnothingLiteral() {
    console.log("Parser => PrimaryExpression => nothingLiteral");
    this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.nothing_TYPE);
    return Literal.getLiteralImpl(TokenTypes.nothing_TYPE).getLiteral();
  }

  private _getLeftHandSideExpression() {
    console.log("Parser => PrimaryExpression => LeftHandSideExpression");
    return Expression.getExpressionImpl(
      NodeType.IdentifierExpression
    ).getExpression();
  }
}
