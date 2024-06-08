import { RuntimeException } from "../../src";
import NallaPointerException from "../../src/exceptions/nallaPointerException";


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
  // cases with nalla
  {
    name: "interpreter use nalla variable in expression, should throw an exception",
    input: `
      bro listen;
      bro remember a;
      bro say a + 9;
      bro done;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in expression - 2, should throw an exception",
    input: `
      bro listen;
      bro remember a = nalla;
      bro say a + 9;
      bro done;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = nalla + 80;
      bro done;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla in variable initialisation expression - 2, should throw an exception",
    input: `
      bro listen;
      bro remember a = nalla + "jam";
      bro done;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in another variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a;
      bro remember b = a + "hello";
      bro done;
    `,
    exception: NallaPointerException,
  },
  {
    name: "interpreter use nalla variable in complex expression, should throw an exception",
    input: `
      bro listen;
      bro remember a;
      bro remember b = ((a*9) * a + "hello");
      bro done;
    `,
    exception: NallaPointerException,
  },
  // sahi - galat case
  {
    name: "interpreter use sahi variable in expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = sahi;
      bro say a + 9;
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = galat;
      bro say a + 9;
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi in variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = sahi + 80;
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat in variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = galat + 80;
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use sahi variable in another variable initialisation expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = sahi;
      bro remember b = a + "hello";
      bro done;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use galat variable in complex expression, should throw an exception",
    input: `
      bro listen;
      bro remember a = galat;
      bro remember b = ((a*9) * a + "hello");
      bro done;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one nalla operand, should throw an exception",
    input: `
        bro listen
        (nalla * (4 + 8 + 10));
        bro done
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand, should throw an exception",
    input: `
        bro listen
        (nalla * (sahi + 8 + 10));
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 2, should throw nalla pointer exception",
    input: `
        bro listen
        (sahi * (nalla + 8 + 10));
        bro done
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one nalla operand and one boolean operand - 3, should throw nalla pointer exception",
    input: `
        bro listen
        (nalla + sahi);
        bro done
      `,
    output: NallaPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        bro listen
        (sahi * (4 + 8 + 10));
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        bro listen
        sahi + galat;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        bro listen
        bro remember a = sahi, b = galat;
        a + b;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        bro listen
        sahi * galat;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        bro listen
        bro remember a = sahi, b = galat;
        a * b;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        bro listen
        sahi / galat;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        bro listen
        bro remember a = sahi, b = galat;
        a / b;
        bro done
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing nalla, should throw an exception",
    input: `
        bro listen
        bro say nalla + 5;
        bro done;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla, should throw an exception",
    input: `
        bro listen
        bro remember a;
        a *= 5;
        bro done;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing sahi, should throw an exception",
    input: `
        bro listen
        bro remember a = sahi;
        a *= 5;
        bro done;
      `,
    output: NallaPointerException,
  },
  {
    name: "complex assign test with expression containing nalla - 2, should throw an exception",
    input: `
        bro listen
        bro remember a = nalla;
        a /= 5;
        bro done;
      `,
    output: NallaPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        bro listen
        jab tak bhai (sahi) {

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
        bro if (sahi)
          bas kar bhai;
        bro done;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of nalla with &&, should throw an exception",
    input: `
        bro listen
        bro say nalla && 90;
        bro done;
      `,
    output: NallaPointerException,
  },
  {
    name: "use of nalla variable with &&, should throw an exception",
    input: `
        bro listen
        bro remember a;
        bro say a && 90;
        bro done;
      `,
    output: NallaPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      bro listen;
      bro say "sahi" % 9;
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
        bro if (sahi)
          agla dekh bhai
        bro done;
      `,
    output: RuntimeException,
  },
];
