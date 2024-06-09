import Expression from ".";

import { TokenTypes } from "../../../../constants/bhaiLangSpec";
import { NodeType } from "../../../../constants/constants";
import { ASTNode } from "../../types/nodeTypes";

export default class LogicalORExpression extends Expression {
  getExpression(): ASTNode {
    console.log("Parser => LogicalORExpression");
    return this.getLogicalExpression(
      NodeType.LogicalANDExpression,
      TokenTypes.LOGICAL_OR
    );
  }
}
