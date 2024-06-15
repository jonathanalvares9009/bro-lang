export const TokenTypes = {
  NULL_TYPE: null,

  HI_BHAI_TYPE: "bro listen",

  BYE_BHAI_TYPE: "bro done",

  BOL_BHAI_TYPE: "bro say",

  BHAI_YE_HAI_TYPE: "bro remember",

  AGAR_BHAI: "bro if",

  WARNA_BHAI: "bro otherwise",

  NAHI_TO_BHAI: "bro otherwise if",

  JAB_TAK_BHAI: "bro when",

  BRO_REMEMBER_TASK: "bro create task",

  BRO_EXECUTE_TASK: "bro execute task",

  BAS_KAR_BHAI: "bro stop",

  AGLA_DEKH_BHAI: "bro skip",

  nothing_TYPE: "nothing",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR",
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bbro listen\b/, tokenType: TokenTypes.HI_BHAI_TYPE },
  { regex: /^\bbro done\b/, tokenType: TokenTypes.BYE_BHAI_TYPE },
  { regex: /^\bbro say\b/, tokenType: TokenTypes.BOL_BHAI_TYPE },
  { regex: /^\bbro remember\b/, tokenType: TokenTypes.BHAI_YE_HAI_TYPE },
  { regex: /^\bbro if\b/, tokenType: TokenTypes.AGAR_BHAI },
  { regex: /^\bbro otherwise if\b/, tokenType: TokenTypes.NAHI_TO_BHAI },
  { regex: /^\bbro otherwise\b/, tokenType: TokenTypes.WARNA_BHAI },
  { regex: /^\bnothing\b/, tokenType: TokenTypes.nothing_TYPE },
  { regex: /^\bbro when\b/, tokenType: TokenTypes.JAB_TAK_BHAI },
  { regex: /^\bbro stop\b/, tokenType: TokenTypes.BAS_KAR_BHAI },
  { regex: /^\bbro skip\b/, tokenType: TokenTypes.AGLA_DEKH_BHAI },
  { regex: /^\bbro create task\b/, tokenType: TokenTypes.BRO_REMEMBER_TASK },
  { regex: /^\bbro execute task\b/, tokenType: TokenTypes.BRO_EXECUTE_TASK },
  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\bcorrect\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bwrong\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  { regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR },

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  { regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR },

  // logical operators: &&, ||
  { regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND },
  { regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR },

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
