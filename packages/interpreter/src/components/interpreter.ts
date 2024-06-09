import parser from "bhai-lang-parser";

import InterpreterModule from "../module/interpreterModule";

import Scope from "./scope";

export default class Interpreter {
  _parser: typeof parser;
  _scope: Scope;

  constructor(parserObj: typeof parser, scope: Scope) {
    console.log("Interpreter");
    this._parser = parserObj;
    this._scope = scope;
  }

  interpret(code: string) {
    console.log("interpret");
    try {
      const ast = this._parser.parse(code);
      console.log(JSON.stringify(ast));
      InterpreterModule.getVisitor(ast.type).visitNode(ast);
    } finally {
      // reset the scope for next run
      InterpreterModule.setCurrentScope(new Scope(null));
    }
  }
}
