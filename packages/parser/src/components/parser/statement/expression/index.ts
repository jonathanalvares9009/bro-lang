import { NodeType } from "../../../../constants/constants";
import BroLangModule from "../../../../module/broLangModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";

export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    console.log("Parser => Expression");
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    console.log("Parser => getExpressionImpl");
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return BroLangModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return BroLangModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return BroLangModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return BroLangModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return BroLangModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return BroLangModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return BroLangModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return BroLangModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return BroLangModule.getRelationalExpression();

      default:
        return BroLangModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    console.log("Parser => getBinaryExpression");
    return this._getExpression(
      downstreamExpressionType,
      operatorToken,
      NodeType.BinaryExpression
    );
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    console.log("Parser => getLogicalExpression");
    return this._getExpression(
      downstreamExpressionType,
      operatorToken,
      NodeType.LogicalExpression
    );
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
  ) {
    console.log("Parser => _getExpression");
    let left = Expression.getExpressionImpl(
      downstreamExpressionType
    ).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right = Expression.getExpressionImpl(
        downstreamExpressionType
      ).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }
}
