import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import BroLangModule from "../../src/module/broLangModule";

test("test broLangModule should success", () => {
  expect(BroLangModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(BroLangModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(BroLangModule.getProgram()).toBeInstanceOf(Program);
  expect(BroLangModule.getParser()).toBeInstanceOf(Parser);
});
