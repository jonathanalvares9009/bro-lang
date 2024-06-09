import { NodeType } from "../../constants/constants";

import StatementList from "./statementList";
import { ASTNode } from "./types/nodeTypes";

export default class Program {
  private _statementList: StatementList;

  constructor(statementList: StatementList) {
    console.log("Parser => Program");
    this._statementList = statementList;
  }

  getProgram(): ASTNode {
    console.log("Parser => getProgram");
    return {
      type: NodeType.Program,
      body: this._statementList.getInitialStatementList(),
    };
  }
}
