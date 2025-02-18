import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`bro listen;
    bro remember a = 4;
    {
      bro remember a = 90;
      bro say a;
    }
    bro say a;
    bro done;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`bro listen;
    bro remember a = 4;
    {
      a = 90;
      bro say a;
    }
    bro say a;
    bro done;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`bro listen;
    bro remember a = 4;
    {
      bro say a;
    }
    bro say a;
    bro done;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    bro listen;
    bro remember a = 0;
    bro when (a < 2) {
      bro say "bhai";
      a += 1;
    }
    bro done;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    bro listen;
    bro remember a = 0, b = 0;
    bro when (a < 2) {
      bro when (b < 1) {
        bro say "bhai";
        b += 1;
      }
      a += 1;
    }
    bro done;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    bro listen;
    bro remember a = 0;
    bro when (a < 2) {
      bro remember b = 0;
      bro when (b < 2) {
        bro say "bhai";
        b += 1;
        bro if (b == 1)
          bro stop;
      }
      a += 1;
    }
    bro done;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("bhai");
  expect(console.log).toHaveBeenCalledWith("bhai");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    bro listen
    bro remember a = 0;
    bro when (a < 10) {
      bro say a;
      a += 1;
      bro if (a == 6) {
        bro stop;
      }
    }
    bro say "done";
    bro done
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    bro listen
    bro remember a = 0;
    bro when (a < 10) {
      bro say a;
      a += 1;
      bro if (a == 6)
        bro stop;
    }
    bro say "done";
    bro done
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    bro listen
    bro remember a = 0;
    bro when (a < 10) {
      bro say a;
      a += 1;
      bro if (a == 3) {
        bro stop;
      }
      bro say "2 baar hi chapunga";
    }
    bro say "done";
    bro done
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    bro listen
    
    bro when (correct) {
      bro say "bhai";
    }
    bro done;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("bhai");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    bro listen
    bro remember x = 6;
    bro if (x < 5) {
      bro say "x < 5";
    } bro otherwise if (x < 8) {
      bro say "x < 8";
    } bro if (x < 4) {
      bro say "x < 4";
    } bro otherwise {
      bro say "x > 4";
    }
    bro done;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     bro listen
//     bro remember a = 0;
//     bro when (a < 10) {
//       bro say a;
//       a += 1;
//       bro if (a == 3) {
//         bro stop;
//       }
//       bro say "2 baar hi chapunga";
//     }
//     bro say "done";
//     bro done
//     `);
// });
