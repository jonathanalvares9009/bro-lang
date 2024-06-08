export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      listen bro
      done bro
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      listen bro
      done bro
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      listen bro
      ;
      done bro
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      listen bro
      ;
      ;
      ;;
      done bro
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      listen bro
      {};
      done bro
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      listen bro
      {
        bhai ye hai a = 4;
      }
      done bro
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      listen bro
      bhai ye hai a, b, c;
      done bro
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      listen bro
      bhai ye hai a = 10, b = "crap";
      done bro
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      listen bro
      bhai ye hai a = 10, b = 5;
      done bro
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      listen bro
      bhai ye hai a = 7 + 90;
      done bro
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      listen bro
      bhai ye hai a = sahi;
      a = 4;
      done bro
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      listen bro
      bhai ye hai a = 2;
      a *= 4;
      done bro
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      listen bro
      bhai ye hai a = 2;
      (a + 4);
      done bro
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      listen bro
      bhai ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      done bro
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      listen bro
      bhai ye hai a = 2;
      (a * (4 + 8) + 10);
      done bro
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    listen bro
    bhai ye hai x = 9;
    agar bhai (x != 9) {
      x = 5;
      bol bhai x;
    } warna bhai (x >= 9);
    done bro;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      listen bro;
      bhai ye hai a , b;
      a = b = 60;
      bol bhai a, b;
      done bro
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      listen bro;
      bhai ye hai a;
      agar bhai (a == nalla) {
        bol bhai a;
      }
      done bro
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      agar bhai (a) {
        bol bhai a;
      } warna bhai {
        bol bhai "not nalla";
      }
      done bro
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      listen bro;
      agar bhai (nalla == nalla) {
        bol bhai "hai nalla";
      }
      done bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      listen bro;
      bhai ye hai a;
      agar bhai (nalla == a) {
        bol bhai "hai nalla";
      }
      done bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      listen bro;
      bhai ye hai a = nalla;
      agar bhai (nalla == a) {
        bol bhai "hai nalla";
      }
      done bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      listen bro;
      bhai ye hai a = nalla;
      agar bhai ("nalla" == a) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "not nalla";
      }
      done bro
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      listen bro;
      bhai ye hai a = "nalla";
      agar bhai (nalla == a) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "not nalla";
      }
      done bro
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      listen bro;
      bhai ye hai a = "null";
      agar bhai (nalla == a) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "not nalla";
      }
      done bro
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      bhai ye hai b;
      agar bhai (a == b) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "nahi nalla";
      }
      done bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      bhai ye hai b = nalla;
      agar bhai (a == b) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "nahi nalla";
      }
      done bro
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      bhai ye hai b = "nalla";
      agar bhai (a == b) {
        bol bhai "hai nalla";
      } warna bhai {
        bol bhai "nahi nalla";
      }
      done bro
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - sahi, should success`,
    input: `
      listen bro;
      bhai ye hai a = sahi;
      agar bhai (sahi == a) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat, should success`,
    input: `
      listen bro;
      bhai ye hai a = galat;
      agar bhai (galat == a) {
        bol bhai "hai galat";
      } warna bhai {
        bol bhai "nahi galat";
      }
      done bro
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi with string sahi, should success`,
    input: `
      listen bro;
      bhai ye hai a = "sahi";
      agar bhai (sahi == a) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression, should success`,
    input: `
      listen bro;
      bhai ye hai a = 7;
      agar bhai (sahi == (a > 5)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & string "sahi", should success`,
    input: `
      listen bro;
      bhai ye hai a = 7;
      agar bhai ("sahi" == (a > 5)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression & two expressions, should success`,
    input: `
      listen bro;
      bhai ye hai a = sahi;
      agar bhai ("sahi" == (a == sahi)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression -3, should success`,
    input: `
      listen bro;
      bhai ye hai a = sahi;
      agar bhai ((a == sahi) == (a == sahi)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "hai sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 4, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      agar bhai ((a == nalla) == (a == sahi)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      agar bhai ((a == nalla) == (a == sahi)) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - sahi expression - 5, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      bhai ye hai b = galat;
      agar bhai (a == b) {
        bol bhai "hai sahi";
      } warna bhai {
        bol bhai "nahi sahi";
      }
      done bro
    `,
    output: "nahi sahi",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison, should success`,
    input: `
      listen bro;
      bhai ye hai a = galat;
      bhai ye hai b = galat;
      agar bhai (a == b) {
        bol bhai "hai galat";
      } warna bhai {
        bol bhai "nahi galat";
      }
      done bro
    `,
    output: "hai galat",
  },
  {
    name: `binaryExpression print test with boolean expression - galat variables comparison with string galat, should success`,
    input: `
      listen bro;
      bhai ye hai a = "galat";
      bhai ye hai b = galat;
      agar bhai (a == b) {
        bol bhai "hai galat";
      } warna bhai {
        bol bhai "nahi galat";
      }
      done bro
    `,
    output: "nahi galat",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      listen bro
      bhai ye hai a = 1.2, b = 2;
      bol bhai a + b;
      done bro
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      listen bro
      bhai ye hai a = 1.2, b = 2.3;
      bol bhai a + b;
      done bro
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      listen bro;
      bhai ye hai a = 2, b = 60;
      bol bhai (a * (4 + 8) + 10), b;
      done bro
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      listen bro;
      bhai ye hai a = 2, b = 60;

      a = b + 3;
      bol bhai a, b;
      done bro
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      listen bro;
      bol bhai "hello", sahi, galat;
      done bro
    `,
    output: "hello sahi galat",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      listen bro;
      bol bhai nalla;
      done bro;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      listen bro;
      bol bhai 10, nalla;
      done bro;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      listen bro;
      bol bhai "hello" + "crap";
      done bro;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      listen bro;
      bhai ye hai a = 70;
      bol bhai 6*5, nalla, "jamtara", a;
      done bro;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      listen bro;
      bhai ye hai a;
      bol bhai a;
      done bro;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      listen bro;
      bol bhai "undefined";
      done bro;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      bol bhai a;
      done bro;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with sahi variable, should success`,
    input: `
      listen bro;
      bhai ye hai a = sahi;
      bol bhai a;
      done bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with galat variable, should success`,
    input: `
      listen bro;
      bhai ye hai a = galat;
      bol bhai a;
      done bro;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      listen bro;
      bhai ye hai a;
      bol bhai a = 90;
      done bro;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      listen bro;
      bol bhai 9 && 10;
      done bro;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      listen bro;
      bol bhai 9 || 10;
      done bro;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      listen bro;
      bol bhai galat && sahi;
      done bro;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    listen bro;
    bhai ye hai a = sahi;
    bol bhai a && galat;
    done bro;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    listen bro;
    bhai ye hai a = sahi;
    bol bhai a && sahi;
    done bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      listen bro;
      bol bhai 9 == 10;
      done bro;
    `,
    output: "galat",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      listen bro;
      bol bhai 9 != 10;
      done bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      listen bro;
      bol bhai 9 || 10;
      done bro;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      listen bro;
      bol bhai galat || sahi;
      done bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi galat and logical, should success`,
    input: `
      listen bro;
      bol bhai sahi != 10;
      done bro;
    `,
    output: "sahi",
  },
  {
    name: `printStatement test with boolean sahi and string "sahi", should success`,
    input: `
      listen bro;
      bol bhai "sahi" == sahi;
      done bro;
    `,
    output: "galat",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      listen bro;
      bhai ye hai a = 0;
      jab tak bhai (a < 1) {
        bol bhai "bhai";
        a += 1;
      }
      done bro;
    `,
    output: "bhai",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      listen bro;
      jab tak bhai (sahi) 
        bas kar bhai;
      bol bhai "end";
      done bro;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      listen bro;
      bhai ye hai a = 0;
      jab tak bhai (a < 2) {
        jab tak bhai (sahi)
          bas kar bhai;
        bol bhai "hello";
        agar bhai (sahi)
          bas kar bhai;
      }
      done bro;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      listen bro;
      bhai ye hai a = 0;
      jab tak bhai (a < 2) {
        bol bhai "hello";
        agar bhai (sahi)
          bas kar bhai;
        bas kar bhai;
        bas kar bhai;
      }
      done bro;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    listen bro
    agar bhai (sahi) {
      bol bhai "bhai";
    }
    done bro;
    `,
    output: "bhai",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    listen bro
    agar bhai (sahi) {
      bol bhai "sahi";
    } warna bhai {
      bol bhai "galat";
    }
    done bro;
    `,
    output: "sahi",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    listen bro
    bhai ye hai x = 9;
    agar bhai (x >= 9) {
      x = 5;
      bol bhai x;
    } 
    done bro;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    listen bro
    agar bhai (galat) {
      bol bhai "galat";
    } nahi to bhai (sahi) {
      bol bhai "sahi";
    }
    done bro;
    `,
    output: "sahi",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    listen bro
    bhai ye hai x = 10;
    agar bhai (x < 5) {
      bol bhai "x < 5";
    } nahi to bhai (x < 8) {
      bol bhai "x < 8";
    } nahi to bhai (x < 12) {
      bol bhai "x < 12";
    } nahi to bhai (x < 15) {
      bol bhai "x < 15";
    }
    done bro;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    listen bro
    bhai ye hai a = 15;
    agar bhai (a < 0) {
      bol bhai "a < 0";
    } nahi to bhai (a > 0) {
      agar bhai (a < 10) {
        bol bhai "a < 10";
      } nahi to bhai (a < 20) {
        bol bhai "a < 20";
      }
    }
    done bro
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    listen bro
    bhai ye hai x = 15;
    agar bhai (x < 5) {
      bol bhai "x < 5";
    } nahi to bhai (x < 8) {
      bol bhai "x < 8";
    } nahi to bhai (x < 12) {
      bol bhai "x < 12";
    } warna bhai {
      bol bhai "x > 12";
    }
    done bro;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with sahi galat, should success`,
    input: `
        listen bro
        agar bhai (sahi && galat) {
          bol bhai "sahi";
        } warna bhai {
          bol bhai "galat";
        }
        done bro;
      `,
    output: `galat`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        listen bro
        bol bhai 90 % 9;
        done bro;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        listen bro
        bol bhai 27 % 5;
        done bro;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        listen bro
        bol bhai 5 % 20;
        done bro;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      listen bro;
      bhai ye hai a = 5;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        step += 1;
        agar bhai (a % 2 != 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
      }
      bol bhai step;
      done bro;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      listen bro;
      bhai ye hai a = 5;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        step += 1;
        agar bhai (a % 2 == 0){
          a -= 2;
          agla dekh bhai;
        }
        a -= 1;
        agla dekh bhai;
        bol bhai "oye oye oye.. yha tk nhi aana tha bhai";
      }
      bol bhai step;
      done bro;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      listen bro;
      bhai ye hai a = 10;
      bhai ye hai step = 0;
      jab tak bhai (a > 0) {
        agar bhai (a % 2 == 0){
          a -= 3;
          agla dekh bhai;
        }
        a -= 1;
        agar bhai (step == 1) agla dekh bhai
        step += 1;
      }
      bol bhai step;
      done bro;
    `,
    output: "1",
  },
];