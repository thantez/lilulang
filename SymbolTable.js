class SymbolTable {
  constructor (id, type, parentScope) {
    this.id = id;
    this.type = type;
    this.parentScope = parentScope;
    this.size = 0;
    this.symbols = [];
  }

  addSymbol(symbol) {
    this.symbols.push(symbol);
  }

  addParentScope(parentScope) {
    this.parentScope = parentScope;
  }

  changeSize(size){
    this.size = size;
  }
}

class Symbol {
  constructor(id, type, width, offset, childScopeSymbolTable) {
    /**
     * @param name = string
     */

    this.id = id;
    this.type = type;
    this.width = width;
    this.offset = offset;
    this.childScope = childSchildScopeSymbolTablecope;
  }

  addChildScope(childScopeSymbolTable){
    this.childScope = childScopeSymbolTable;
  }
}

module.exports.symbolTable = SymbolTable;
module.exports.symbol = Symbol;