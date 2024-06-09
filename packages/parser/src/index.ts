import BroLangModule from "./module/broLangModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default BroLangModule.getParser();
