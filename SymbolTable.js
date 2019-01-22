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
    this.symbols.forEach(s => {
      if(symbol.id && symbol.id === s.id){
        throw new TypeError(`syntax Error: Identifier ${symbol.id} has already been declared in ${/* TODO: error address */null}`)
      }
    })
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

  getTypeInRoot(id){
    if(this.id === 'program'){
      for (let symbol of this.symbols) {
        if(symbol.typeObj.type === 'userType' && symbol.id === id){
          return symbol.getChildScope();
        }
      }
    } else {
      throw ReferenceError('types are in root table');
    }
  }

  getChildTable(id){
    for (let symbol of this.symbols) {
      let subScopeTable = symbol.getChildScope()
      if(subScopeTable){
        if(subScopeTable.id === id){
          return subScopeTable;
        } else {
          let searchInChild = subScopeTable.getChildTable(id);
          if(searchInChild){
            return searchInChild;
          }
        }
      } else if(symbol.id === id) {
        throw new TypeError('syntax Error: this id can\'t have scope')
      }
    }
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
        if(typeObj.value instanceof Array){
          this.width = (typeObj.value.length + 1)*2;
        } else {
          this.width = 2;
          console.log(typeObj)
        }
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

  getChildScope(){
    return this.childScope;
  }
}

module.exports.symbolTable = SymbolTable;
module.exports.symbol = Symbol;