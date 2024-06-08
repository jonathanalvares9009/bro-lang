export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      bro listen
      bro done
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      bro listen
      bro done
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      bro listen
      ;
      bro done
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      bro listen
      ;
      ;
      ;;
      bro done
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      bro listen
      {};
      bro done
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      bro listen
      {
        bro remember a = 4;
      }
      bro done
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      bro listen
      bro remember a, b, c;
      bro done
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      bro listen
      bro remember a = 10, b = "crap";
      bro done
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      bro listen
      bro remember a = 10, b = 5;
      bro done
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      bro listen
      bro remember a = 7 + 90;
      bro done
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      bro listen
      bro remember a = correct;
      a = 4;
      bro done
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      bro listen
      bro remember a = 2;
      a *= 4;
      bro done
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      bro listen
      bro remember a = 2;
      (a + 4);
      bro done
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      bro listen
      bro remember a = 2;
      (a + 4) * 10 + (5 - 4);
      bro done
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      bro listen
      bro remember a = 2;
      (a * (4 + 8) + 10);
      bro done
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    bro listen
    bro remember x = 9;
    bro if (x != 9) {
      x = 5;
      bro say x;
    } bro otherwise (x >= 9);
    bro done;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      bro listen;
      bro remember a , b;
      a = b = 60;
      bro say a, b;
      bro done
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nothing and "==", should success`,
    input: `
      bro listen;
      bro remember a;
      bro if (a == nothing) {
        bro say a;
      }
      bro done
    `,
    output: "nothing",
  },
  {
    name: `binaryExpression print test with nothing without any operator, should success`,
    input: `
      bro listen;
      bro remember a;
      bro if (a) {
        bro say a;
      } bro otherwise {
        bro say "not nothing";
      }
      bro done
    `,
    output: "not nothing",
  },
  {
    name: `binaryExpression print test - comparing nothing with nothing "==", should success`,
    input: `
      bro listen;
      bro if (nothing == nothing) {
        bro say "hai nothing";
      }
      bro done
    `,
    output: "hai nothing",
  },
  {
    name: `binaryExpression print test with comparing nothing with var "a", should success`,
    input: `
      bro listen;
      bro remember a;
      bro if (nothing == a) {
        bro say "hai nothing";
      }
      bro done
    `,
    output: "hai nothing",
  },
  {
    name: `binaryExpression print test with comparing nothing with var "a" explicit initialization, should success`,
    input: `
      bro listen;
      bro remember a = nothing;
      bro if (nothing == a) {
        bro say "hai nothing";
      }
      bro done
    `,
    output: "hai nothing",
  },
  {
    name: `binaryExpression print test with comparing nothing with string nothing, should success`,
    input: `
      bro listen;
      bro remember a = nothing;
      bro if ("nothing" == a) {
        bro say "hai nothing";
      } bro otherwise {
        bro say "not nothing";
      }
      bro done
    `,
    output: "not nothing",
  },
  {
    name: `binaryExpression print test with comparing nothing with string nothing, should success`,
    input: `
      bro listen;
      bro remember a = "nothing";
      bro if (nothing == a) {
        bro say "hai nothing";
      } bro otherwise {
        bro say "not nothing";
      }
      bro done
    `,
    output: "not nothing",
  },
  {
    name: `binaryExpression print test with comparing nothing with string null, should success`,
    input: `
      bro listen;
      bro remember a = "null";
      bro if (nothing == a) {
        bro say "hai nothing";
      } bro otherwise {
        bro say "not nothing";
      }
      bro done
    `,
    output: "not nothing",
  },
  {
    name: `binaryExpression print test with nothing var "a" & "b" - 0, should success`,
    input: `
      bro listen;
      bro remember a;
      bro remember b;
      bro if (a == b) {
        bro say "hai nothing";
      } bro otherwise {
        bro say "nahi nothing";
      }
      bro done
    `,
    output: "hai nothing",
  },
  {
    name: `binaryExpression print test with nothing var "a" & "b" - 1, should success`,
    input: `
      bro listen;
      bro remember a;
      bro remember b = nothing;
      bro if (a == b) {
        bro say "hai nothing";
      } bro otherwise {
        bro say "nahi nothing";
      }
      bro done
    `,
    output: "hai nothing",
  },
  {
    name: `binaryExpression print test with nothing var "a" & "b" -2, should success`,
    input: `
      bro listen;
      bro remember a;
      bro remember b = "nothing";
      bro if (a == b) {
        bro say "hai nothing";
      } bro otherwise {
        bro say "nahi nothing";
      }
      bro done
    `,
    output: "nahi nothing",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - correct, should success`,
    input: `
      bro listen;
      bro remember a = correct;
      bro if (correct == a) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "hai correct",
  },
  {
    name: `binaryExpression print test with boolean expression - wrong, should success`,
    input: `
      bro listen;
      bro remember a = wrong;
      bro if (wrong == a) {
        bro say "hai wrong";
      } bro otherwise {
        bro say "nahi wrong";
      }
      bro done
    `,
    output: "hai wrong",
  },
  {
    name: `binaryExpression print test with boolean expression - correct with string correct, should success`,
    input: `
      bro listen;
      bro remember a = "correct";
      bro if (correct == a) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "nahi correct",
  },
  {
    name: `binaryExpression print test with boolean expression - correct expression, should success`,
    input: `
      bro listen;
      bro remember a = 7;
      bro if (correct == (a > 5)) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "hai correct",
  },
  {
    name: `binaryExpression print test with boolean expression - correct expression & string "correct", should success`,
    input: `
      bro listen;
      bro remember a = 7;
      bro if ("correct" == (a > 5)) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "nahi correct",
  },
  {
    name: `binaryExpression print test with boolean expression - correct expression & two expressions, should success`,
    input: `
      bro listen;
      bro remember a = correct;
      bro if ("correct" == (a == correct)) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "nahi correct",
  },
  {
    name: `binaryExpression print test with boolean expression - correct expression -3, should success`,
    input: `
      bro listen;
      bro remember a = correct;
      bro if ((a == correct) == (a == correct)) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "hai correct",
  },
  {
    name: `binaryExpression print test with boolean expression - correct expression - 4, should success`,
    input: `
      bro listen;
      bro remember a;
      bro if ((a == nothing) == (a == correct)) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "nahi correct",
  },
  {
    name: `binaryExpression print test with boolean expression - correct expression - 5, should success`,
    input: `
      bro listen;
      bro remember a;
      bro if ((a == nothing) == (a == correct)) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "nahi correct",
  },
  {
    name: `binaryExpression print test with boolean expression - correct expression - 5, should success`,
    input: `
      bro listen;
      bro remember a;
      bro remember b = wrong;
      bro if (a == b) {
        bro say "hai correct";
      } bro otherwise {
        bro say "nahi correct";
      }
      bro done
    `,
    output: "nahi correct",
  },
  {
    name: `binaryExpression print test with boolean expression - wrong variables comparison, should success`,
    input: `
      bro listen;
      bro remember a = wrong;
      bro remember b = wrong;
      bro if (a == b) {
        bro say "hai wrong";
      } bro otherwise {
        bro say "nahi wrong";
      }
      bro done
    `,
    output: "hai wrong",
  },
  {
    name: `binaryExpression print test with boolean expression - wrong variables comparison with string wrong, should success`,
    input: `
      bro listen;
      bro remember a = "wrong";
      bro remember b = wrong;
      bro if (a == b) {
        bro say "hai wrong";
      } bro otherwise {
        bro say "nahi wrong";
      }
      bro done
    `,
    output: "nahi wrong",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      bro listen
      bro remember a = 1.2, b = 2;
      bro say a + b;
      bro done
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      bro listen
      bro remember a = 1.2, b = 2.3;
      bro say a + b;
      bro done
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      bro listen;
      bro remember a = 2, b = 60;
      bro say (a * (4 + 8) + 10), b;
      bro done
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      bro listen;
      bro remember a = 2, b = 60;

      a = b + 3;
      bro say a, b;
      bro done
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      bro listen;
      bro say "hello", correct, wrong;
      bro done
    `,
    output: "hello correct wrong",
  },
  {
    name: "printStatement test with nothing, should success",
    input: `
      bro listen;
      bro say nothing;
      bro done;
    `,
    output: "nothing",
  },
  {
    name: "printStatement test with nothing as second parameter, should success",
    input: `
      bro listen;
      bro say 10, nothing;
      bro done;
    `,
    output: "10 nothing",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      bro listen;
      bro say "hello" + "crap";
      bro done;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nothing, should success",
    input: `
      bro listen;
      bro remember a = 70;
      bro say 6*5, nothing, "jamtara", a;
      bro done;
    `,
    output: "30 nothing jamtara 70",
  },
  {
    name: "printStatement test with nothing variable, should success",
    input: `
      bro listen;
      bro remember a;
      bro say a;
      bro done;
    `,
    output: "nothing",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      bro listen;
      bro say "undefined";
      bro done;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nothing variable, should success`,
    input: `
      bro listen;
      bro remember a;
      bro say a;
      bro done;
    `,
    output: "nothing",
  },
  {
    name: `printStatement test with correct variable, should success`,
    input: `
      bro listen;
      bro remember a = correct;
      bro say a;
      bro done;
    `,
    output: "correct",
  },
  {
    name: `printStatement test with wrong variable, should success`,
    input: `
      bro listen;
      bro remember a = wrong;
      bro say a;
      bro done;
    `,
    output: "wrong",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      bro listen;
      bro remember a;
      bro say a = 90;
      bro done;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      bro listen;
      bro say 9 && 10;
      bro done;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      bro listen;
      bro say 9 || 10;
      bro done;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      bro listen;
      bro say wrong && correct;
      bro done;
    `,
    output: "wrong",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    bro listen;
    bro remember a = correct;
    bro say a && wrong;
    bro done;
    `,
    output: "wrong",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    bro listen;
    bro remember a = correct;
    bro say a && correct;
    bro done;
    `,
    output: "correct",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      bro listen;
      bro say 9 == 10;
      bro done;
    `,
    output: "wrong",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      bro listen;
      bro say 9 != 10;
      bro done;
    `,
    output: "correct",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      bro listen;
      bro say 9 || 10;
      bro done;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      bro listen;
      bro say wrong || correct;
      bro done;
    `,
    output: "correct",
  },
  {
    name: `printStatement test with boolean correct wrong and logical, should success`,
    input: `
      bro listen;
      bro say correct != 10;
      bro done;
    `,
    output: "correct",
  },
  {
    name: `printStatement test with boolean correct and string "correct", should success`,
    input: `
      bro listen;
      bro say "correct" == correct;
      bro done;
    `,
    output: "wrong",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      bro listen;
      bro remember a = 0;
      bro when (a < 1) {
        bro say "bhai";
        a += 1;
      }
      bro done;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      bro listen;
      bro when (correct) 
        bro stop;
      bro say "end";
      bro done;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      bro listen;
      bro remember a = 0;
      bro when (a < 2) {
        bro when (correct)
          bro stop;
        bro say "hello";
        bro if (correct)
          bro stop;
      }
      bro done;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      bro listen;
      bro remember a = 0;
      bro when (a < 2) {
        bro say "hello";
        bro if (correct)
          bro stop;
        bro stop;
        bro stop;
      }
      bro done;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    bro listen
    bro if (correct) {
      bro say "bhai";
    }
    bro done;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    bro listen
    bro if (correct) {
      bro say "correct";
    } bro otherwise {
      bro say "wrong";
    }
    bro done;
    `,
    output: "correct",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    bro listen
    bro remember x = 9;
    bro if (x >= 9) {
      x = 5;
      bro say x;
    } 
    bro done;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    bro listen
    bro if (wrong) {
      bro say "wrong";
    } bro otherwise if (correct) {
      bro say "correct";
    }
    bro done;
    `,
    output: "correct",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    bro listen
    bro remember x = 10;
    bro if (x < 5) {
      bro say "x < 5";
    } bro otherwise if (x < 8) {
      bro say "x < 8";
    } bro otherwise if (x < 12) {
      bro say "x < 12";
    } bro otherwise if (x < 15) {
      bro say "x < 15";
    }
    bro done;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    bro listen
    bro remember a = 15;
    bro if (a < 0) {
      bro say "a < 0";
    } bro otherwise if (a > 0) {
      bro if (a < 10) {
        bro say "a < 10";
      } bro otherwise if (a < 20) {
        bro say "a < 20";
      }
    }
    bro done
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    bro listen
    bro remember x = 15;
    bro if (x < 5) {
      bro say "x < 5";
    } bro otherwise if (x < 8) {
      bro say "x < 8";
    } bro otherwise if (x < 12) {
      bro say "x < 12";
    } bro otherwise {
      bro say "x > 12";
    }
    bro done;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with correct wrong, should success`,
    input: `
        bro listen
        bro if (correct && wrong) {
          bro say "correct";
        } bro otherwise {
          bro say "wrong";
        }
        bro done;
      `,
    output: `wrong`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        bro listen
        bro say 90 % 9;
        bro done;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        bro listen
        bro say 27 % 5;
        bro done;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        bro listen
        bro say 5 % 20;
        bro done;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      bro listen;
      bro remember a = 5;
      bro remember step = 0;
      bro when (a > 0) {
        step += 1;
        bro if (a % 2 != 0){
          a -= 2;
          bro skip;
        }
        a -= 1;
      }
      bro say step;
      bro done;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      bro listen;
      bro remember a = 5;
      bro remember step = 0;
      bro when (a > 0) {
        step += 1;
        bro if (a % 2 == 0){
          a -= 2;
          bro skip;
        }
        a -= 1;
        bro skip;
        bro say "oye oye oye.. yha tk nhi aana tha bhai";
      }
      bro say step;
      bro done;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      bro listen;
      bro remember a = 10;
      bro remember step = 0;
      bro when (a > 0) {
        bro if (a % 2 == 0){
          a -= 3;
          bro skip;
        }
        a -= 1;
        bro if (step == 1) bro skip
        step += 1;
      }
      bro say step;
      bro done;
    `,
    output: "1",
  },
];