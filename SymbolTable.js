class SymbolTable {
  constructor(id, typeObj, parentScope) {
    this.id = id;
    this.typeObj = typeObj;
    this.parentScope = parentScope;
    this.offset = 0;
    this.size = 0;
    this.isImplemented = false;
    this.symbols = [];
  }

  addSymbol(symbol, ctx) {
    for(let s of this.symbols){
      if(symbol.id && symbol.id === s.id){
        return 'error';
      }
    }
    this.symbols.push(symbol);
    this.size = this.size + symbol.getWidth();
  }

  addParentScope(parentScope) {
    this.parentScope = parentScope;
  }

  changeSize(size) {
    this.size = size;
  }

  getNewOffset(){
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
      let subScopeTable = symbol.getChildScope();
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

  getSymbolInheritance(id, thisi, superi){
    let scopeType = 'none'
    if(thisi == true){
      scopeType = 'this'
    } else if (superi == true) {
      scopeType = 'super'
    }
    return this._getSymbolInheritance(id, true, scopeType)
  }

  _getSymbolInheritance(id, privacy, responder) {
    {
      for (let symbol of this.symbols){
        if(symbol.id===id){
          switch(responder){
            case 'this':
              if(privacy){
                return symbol;
              }
              break;
            case 'super':
              if(symbol.accmod != 'private'){
                return symbol;
              }
              break;
            default:
              if(symbol.accmod === 'public' || symbol.accmod == undefined){
                return symbol;
              }
              break;
          }
        }
      }
      if(this.parentScope){
        return this.parentScope.getSymbolInheritance(id, false, responder);
      } else {
        return 'error'
      }
    }
  }

  isEmpty(){
    return this.symbols.length === 0;
  }

  sameDefine(mainArgsTypes, returnableArgsTypes) {
    let sameSymbols = this.symbols;
    let sameMainArgsTypes = [];
    let sameReturnableArgsTypes = [];

    for(let symbol of sameSymbols){
      let sameType = symbol.typeObj;
      if(sameType.return === true){
        sameReturnableArgsTypes.push(sameType)
      } else if (sameType.return === false) {
        sameMainArgsTypes.push(sameType)
      }
      else {
        break;
      }
    }

    if(mainArgsTypes.length != sameMainArgsTypes.length || returnableArgsTypes.length != sameReturnableArgsTypes.length){
      return false;
    }

    for(let i in mainArgsTypes){
      if(!(mainArgsTypes[i] === sameMainArgsTypes[i]))
        return false;
    }

    for(let i in returnableArgsTypes){
      if(!(returnableArgsTypes[i] === sameReturnableArgsTypes[i]))
        return false;
    }

    return true;
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
    * @param {Object} typeObj int or float or string or bool or user types
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
        }
        break;
      case 'if'||'forloop'||'switch'||'whileloop'||'else':
        this.width = 0;
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