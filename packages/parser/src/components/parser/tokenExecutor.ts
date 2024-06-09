import { TokenTypes } from "../../constants/bhaiLangSpec";
import { Token, Tokenizer } from "../tokenizer/types";


export default class TokenExecutor {
  private _tokenizer: Tokenizer;
  private _lookahead: Token | null = null;

  constructor(tokenizer: Tokenizer) {
    console.log("Parser => TokenExecutor");
    this._tokenizer = tokenizer;
  }

  eatTokenAndForwardLookahead(tokenType: string | null) {
    console.log("Parser => TokenExecutor => eatTokenAndForwardLookahead");
    const token = this._lookahead;

    if (token == null) {
      throw new SyntaxError(
        `Unexpected end of input, expected : "${tokenType}"`
      );
    }

    if (token.type !== tokenType) {
      throw new SyntaxError(
        `kya kar rha hai tu??...Unexpected token: "${token.value}", expected : "${tokenType}"`
      );
    }

    this.setLookahead(this._tokenizer.getNextToken());

    return token;
  }

  eatOptionalSemiColonToken() {
    console.log("Parser => TokenExecutor => eatOptionalSemiColonToken");
    if (this.getLookahead()?.type == TokenTypes.SEMI_COLON_TYPE)
      this.eatTokenAndForwardLookahead(TokenTypes.SEMI_COLON_TYPE);
  }

  getLookahead() {
    console.log("Parser => TokenExecutor => getLookahead");
    return this._lookahead;
  }

  setLookahead(lookahead: Token | null) {
    console.log("Parser => TokenExecutor => setLookahead");
    this._lookahead = lookahead;
  }
}
