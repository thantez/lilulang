class SymbolTable {
  constructor(id, typeObj, parentScope) {
    this.id = id;
    this.typeObj = typeObj;
    this.parentScope = parentScope;
    this.offset = 0;
    this.size = 0;
    this.symbols = [];
  }

  addSymbol(symbol) {
    this.symbols.push(symbol);
    this.size = this.size + symbol.getWidth();
  }

  addParentScope(parentScope) {
    this.parentScope = parentScope;
  }

  changeSize(size) {
    this.size = size;
  }

  getNewOffset(width){
    return this.size;
  }
}

class Symbol {
  /**
  * Symbol class definition
  *
  * @class Symbol
  * @constructor
  */

  constructor(id, typeObj, offset, childScopeSymbolTable) {
    /**
    * constructor for Symbol class
    *
    * @method constructor
    * @param {String} id content of id lex of symbol
    * @param {String} type int or float or string or bool or user types
    * @param {Integer} width float = 8 (=2B), string = 2*charsCount+2, other = 4
    * @param {Integer} offset default offset = 0, offset = offset + width
    * @param {SymbolTable} childScopeSymbolTable child scope symbol table
    */

    this.id = id;
    this.typeObj = typeObj;
    this.offset = offset;
    this.childScope = childScopeSymbolTable;

    switch(typeObj.type){
      case 'float':
        this.width = 8;
        break;
      case 'string':
        this.width = (typeObj.value.length + 1)*2;
        break;
      default:
        this.width = 4;
        break;
    }
  }

  addChildScope(childScopeSymbolTable) {
    this.childScope = childScopeSymbolTable;
  }

  getWidth(){
    return this.width;
  }
}

module.exports.symbolTable = SymbolTable;
module.exports.symbol = Symbol;