import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class LogicalANDExpression extends Expression {
  getExpression(): ASTNode {
    console.log("Parser => LogicalANDExpression");
    return this.getLogicalExpression(
      NodeType.EqualityExpression,
      TokenTypes.LOGICAL_AND
    );
  }
}
