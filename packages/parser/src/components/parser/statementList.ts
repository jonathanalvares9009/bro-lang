import { TokenTypes } from "../../constants/bhaiLangSpec";
import BroLangModule from "../../module/broLangModule";

import Statement from "./statement";
import TokenExecutor from "./tokenExecutor";

export default class StatementList {
  private _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    console.log("Parser => StatementList");
    this._tokenExecutor = tokenExecutor;
  }

  getInitialStatementList() {
    console.log("Parser => StatementList => getInitialStatementList");
    for (
      let lookahead = this._tokenExecutor.getLookahead();
      lookahead !== null && lookahead.type !== TokenTypes.HI_BHAI_TYPE;
      lookahead = this._tokenExecutor.getLookahead()
    ) {
      this._tokenExecutor.eatTokenAndForwardLookahead(lookahead.type);
    }

    return BroLangModule.getInitStatement().getStatement();
  }

  getStatementList(stopLookaheadType: string) {
    console.log("Parser => StatementList => getStatementList");
    const statementlist = [];

    for (
      let lookahead = this._tokenExecutor.getLookahead();
      lookahead !== null && lookahead.type !== stopLookaheadType;
      lookahead = this._tokenExecutor.getLookahead()
    ) {
      // Statement.getStatementImpl(lookahead) -> this will get the Statement
      // implementation according to look ahead
      // and we will get the statement by calling getStatement() function
      statementlist.push(Statement.getStatementImpl(lookahead).getStatement());
    }

    return statementlist;
  }
}
