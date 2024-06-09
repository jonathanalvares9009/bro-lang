import { Tokenizer } from "../tokenizer/types";
import Program from "./program";
import TokenExecutor from "./tokenExecutor";

export class Parser {
  private _tokenizer: Tokenizer;
  private _program: Program;
  private _tokenExecutor: TokenExecutor;
  private _stringToTokenize: string;

  constructor(
    tokenizer: Tokenizer,
    program: Program,
    tokenExecutor: TokenExecutor
  ) {
    console.log("Parser");
    this._tokenizer = tokenizer;
    this._program = program;
    this._tokenExecutor = tokenExecutor;
    this._stringToTokenize = "";
  }

  parse(stringToTokenize: string) {
    console.log("Parser => parse");
    this._stringToTokenize = stringToTokenize;

    this._tokenizer.initTokenizer(this._stringToTokenize);

    // initliaze look ahead
    this._tokenExecutor.setLookahead(this._tokenizer.getNextToken());

    return this._program.getProgram();
  }
}
