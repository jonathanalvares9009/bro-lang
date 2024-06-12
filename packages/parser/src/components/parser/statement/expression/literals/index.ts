import { TokenTypes } from "../../../../../constants/bhaiLangSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import BroLangModule from "../../../../../module/broLangModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return BroLangModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return BroLangModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return BroLangModule.getStringLiteral();

      case TokenTypes.nothing_TYPE:
        return BroLangModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
