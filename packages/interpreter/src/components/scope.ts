import RuntimeException from "../exceptions/runtimeException";

export default class Scope {
  _variables: Map<string, unknown> = new Map();
  _isLoop = false;
  _isBreakStatement = false;
  _isContinueStatement = false;
  _parentScope: Scope | null;

  constructor(parentScope: Scope | null) {
    console.log("Scope");
    this._parentScope = parentScope;
  }

  isLoop() {
    console.log("isLoop");
    return this._isLoop;
  }

  setLoop(isLoop: boolean) {
    console.log("setLoop");
    this._isLoop = isLoop;
  }

  setBreakStatement(isBreakStatement: boolean) {
    console.log("setBreakStatement");
    this._isBreakStatement = isBreakStatement;
  }

  setContinueStatement(isContinueStatement: boolean) {
    console.log("setContinueStatement");
    this._isContinueStatement = isContinueStatement;
  }

  isBreakStatement() {
    console.log("isBreakStatement");
    return this._isBreakStatement;
  }

  isContinueStatement() {
    console.log("isContinueStatement");
    return this._isContinueStatement;
  }

  get(identifier: string): unknown {
    console.log("scope => get");
    if (this._variables.has(identifier)) {
      return this._variables.get(identifier);
    }

    if (this._parentScope !== null) {
      return this._parentScope.get(identifier);
    }

    throw new RuntimeException(`Variable "${identifier}" bana to le pehle.`);
  }

  assign(identifier: string, value: unknown) {
    console.log("scope => assign");
    if (this._variables.has(identifier)) {
      this._variables.set(identifier, value);
      return;
    }

    if (this._parentScope !== null) {
      this._parentScope.assign(identifier, value);
      return;
    }

    throw new RuntimeException(
      `Variable "${identifier}" bana to le pehle fir assign karna.`
    );
  }

  declare(identifier: string, value: unknown) {
    console.log("scope => declare");
    if (this._variables.has(identifier)) {
      throw new RuntimeException(
        `Variable "${identifier}" pehle se exist karta hai bhai. Check karle.`
      );
    }

    this._variables.set(identifier, value);
  }
}
