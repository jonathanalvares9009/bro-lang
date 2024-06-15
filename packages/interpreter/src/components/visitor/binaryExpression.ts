import Visitor from ".";
import { ASTNode, NodeType } from "bro-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import nothingPointerException from "../../exceptions/nothingPointerException";
import RuntimeException from "../../exceptions/runtimeException";
import { getOperationValue } from "../../helpers";
import InterpreterModule from "../../module/interpreterModule";

export default class BinaryExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Bro left , right or operator not found for: ${node.type}`
      );
    }

    let left, right;

    // handling logical & binary both at the same place as both operate on two operands
    if (node.type == NodeType.BinaryExpression) {
      if (node.operator !== "==" && node.operator !== "!=") {
        this._checknothing(node);
        this._checkBoolean(node);
      }
      left = this._getNodeValue(node.left);
      right = this._getNodeValue(node.right);
    } else if (node.type == NodeType.LogicalExpression) {
      this._checknothing(node);

      left =
        node.left.type == NodeType.BooleanLiteral
          ? node.left.value == "correct"
            ? true
            : false
          : InterpreterModule.getVisitor(node.left.type).visitNode(node.left);

      right =
        node.right.type == NodeType.BooleanLiteral
          ? node.right.value == "correct"
            ? true
            : false
          : InterpreterModule.getVisitor(node.right.type).visitNode(node.right);
    }
    return getOperationValue({ left, right }, node.operator);
  }

  private _checknothing(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Bro left , right or operator not found for: ${node.type}`
      );
    }

    const nothingException = new nothingPointerException(
      `Cannot use nothing with "${node.operator}" bro.`
    );

    if (
      node.left.type === NodeType.NullLiteral ||
      node.right.type === NodeType.NullLiteral
    )
      throw nothingException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === null) throw nothingException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === null) throw nothingException;
    }
  }

  private _checkBoolean(node: ASTNode) {
    if (!node.left || !node.right || !node.operator) {
      throw new InvalidStateException(
        `Bro left , right or operator not found for: ${node.type}`
      );
    }

    const runtimeException = new RuntimeException(
      `Cannot use boolean with "${node.operator}" bro`
    );

    if (
      node.left.type === NodeType.BooleanLiteral ||
      node.right.type === NodeType.BooleanLiteral
    )
      throw runtimeException;

    if (node.left.type === NodeType.IdentifierExpression && node.left.name) {
      const value = InterpreterModule.getCurrentScope().get(node.left.name);
      if (value === true || value === false) throw runtimeException;
    }

    if (node.right.type === NodeType.IdentifierExpression && node.right.name) {
      const value = InterpreterModule.getCurrentScope().get(node.right.name);
      if (value === true || value === false) throw runtimeException;
    }
  }

  private _getNodeValue(node: ASTNode) {
    if (node.type === NodeType.NullLiteral) return null;

    if (node.type === NodeType.BooleanLiteral) {
      return node.value === "correct" ? true : false;
    }

    if (node.type === NodeType.IdentifierExpression && node.name)
      return InterpreterModule.getCurrentScope().get(node.name);

    return InterpreterModule.getVisitor(node.type).visitNode(node);
  }
}
