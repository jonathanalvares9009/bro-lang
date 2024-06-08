import { RuntimeException } from "../../src";
import nothingPointerException from "../../src/exceptions/nothingPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          bro listen;
          a = 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          bro listen;
          a += 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          bro listen;
          a -= 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          bro listen;
          a -= 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          bro listen;
          a /= 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          bro listen;
          a;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          bro listen;
          a + b;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          bro listen;
          a + 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          bro listen;
          a - 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          bro listen;
          a - b;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          bro listen;
          a * 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          bro listen;
          a * b;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          bro listen;
          a / 4;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          bro listen;
          a / b;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          bro listen;
          bro say a;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          bro listen;
          bro say a, b;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          bro listen;
          bro remember a = 8;
          bro say a, b;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          bro listen;
          bro remember a = b = 8;
          bro done;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        bro listen;
        bro remember a;
        a = 9;
        bro remember a = 0;
        bro done;
      `,
    exception: RuntimeException,
  },
  // cases with nothing
  {
    name: "interpreter use nothing variable in expression, should throw an exception",
    input: `
      bro listen;
      bro remember a;
      bro say a + 9;
      bro done;
    `,
    exception: nothingPointerException,
  },
  {
    name: "interpreter use nothing variable in expression - 2, should throw an exception",
    input: `
      bro listen;
      bro remember a = nothing;
      bro say a + 9;
      bro done;
    `,
    exception: nothingPointerException,
  },
  {
    name: "interpreter use nothing in variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = nothing + 80;
      bro done;
    `,
    exception: nothingPointerException,
  },
  {
    name: "interpreter use nothing in variable initialisation expression - 2, should throw an exception",
    input: `
      bro listen;
      bro remember a = nothing + "jam";
      bro done;
    `,
    exception: nothingPointerException,
  },
  {
    name: "interpreter use nothing variable in another variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a;
      bro remember b = a + "hello";
      bro done;
    `,
    exception: nothingPointerException,
  },
  {
    name: "interpreter use nothing variable in complex expression, should throw an exception",
    input: `
      bro listen;
      bro remember a;
      bro remember b = ((a*9) * a + "hello");
      bro done;
    `,
    exception: nothingPointerException,
  },
  // correct - wrong case
  {
    name: "interpreter use correct variable in expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = correct;
      bro say a + 9;
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use wrong variable in expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = wrong;
      bro say a + 9;
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use correct in variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = correct + 80;
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use wrong in variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = wrong + 80;
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use correct variable in another variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = correct;
      bro remember b = a + "hello";
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use wrong variable in complex expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = wrong;
      bro remember b = ((a*9) * a + "hello");
      bro done;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nothing operand, should throw an exception",
    input: `
        bro listen
        (nothing * (4 + 8 + 10));
        bro done
      `,
    output: nothingPointerException,
  },
  {
    name: "complex expression test with one nothing operand and one boolean operand, should throw an exception",
    input: `
        bro listen
        (nothing * (correct + 8 + 10));
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nothing operand and one boolean operand - 2, should throw nothing pointer exception",
    input: `
        bro listen
        (correct * (nothing + 8 + 10));
        bro done
      `,
    output: nothingPointerException,
  },
  {
    name: "complex expression test with one nothing operand and one boolean operand - 3, should throw nothing pointer exception",
    input: `
        bro listen
        (nothing + correct);
        bro done
      `,
    output: nothingPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        bro listen
        (correct * (4 + 8 + 10));
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        bro listen
        correct + wrong;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        bro listen
        bro remember a = correct, b = wrong;
        a + b;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        bro listen
        correct * wrong;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        bro listen
        bro remember a = correct, b = wrong;
        a * b;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        bro listen
        correct / wrong;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        bro listen
        bro remember a = correct, b = wrong;
        a / b;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nothing, should throw an exception",
    input: `
        bro listen
        bro say nothing + 5;
        bro done;
      `,
    output: nothingPointerException,
  },
  {
    name: "complex assign test with expression containing nothing, should throw an exception",
    input: `
        bro listen
        bro remember a;
        a *= 5;
        bro done;
      `,
    output: nothingPointerException,
  },
  {
    name: "complex assign test with expression containing correct, should throw an exception",
    input: `
        bro listen
        bro remember a = correct;
        a *= 5;
        bro done;
      `,
    output: nothingPointerException,
  },
  {
    name: "complex assign test with expression containing nothing - 2, should throw an exception",
    input: `
        bro listen
        bro remember a = nothing;
        a /= 5;
        bro done;
      `,
    output: nothingPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        bro listen
        jab tak bhai (correct) {

        }
        bro done;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        bro listen
        bro remember a = 0;
        jab tak bhai (a < 2) {
          bro say "bhai";
        }
        bro done;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        bro listen
        bro remember a = 0;
        bro if (correct)
          bas kar bhai;
        bro done;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nothing with &&, should throw an exception",
    input: `
        bro listen
        bro say nothing && 90;
        bro done;
      `,
    output: nothingPointerException,
  },
  {
    name: "use of nothing variable with &&, should throw an exception",
    input: `
        bro listen
        bro remember a;
        bro say a && 90;
        bro done;
      `,
    output: nothingPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      bro listen;
      bro say "correct" % 9;
      bro done;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        bro listen
        bro remember a = 0;
        jab tak bhai (a < 2) {
          agla dekh bhai;
          a = 5;
        }
        bro done;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        bro listen
        bro remember a = 0;
        bro if (correct)
          agla dekh bhai
        bro done;
      `,
    output: RuntimeException,
  },
];
