import Literal from ".";

import { NodeType } from "../../../../../constants/constants";
import { ASTNode } from "../../../types/nodeTypes";

export default class NullLiteral extends Literal {
  getLiteral(): ASTNode {
    console.log("Parser => NullLiteral");
    return {
      type: NodeType.NullLiteral,
      value: "nothing",
    };
  }
}
