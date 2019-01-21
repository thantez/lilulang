const listener = require('./lib/lilu_grammarListener').lilu_grammarListener;
const fs = require('fs');
const SymbolTable = require('./SymbolTable').symbolTable;
const Symbol = require('./SymbolTable').symbol;
const util = require('util');

// #region functions
function toText(ctx) {
  if (ctx !== null) {
    return ctx.getText()
  }
  return null
}
// #endregion


class Listener extends listener {
  constructor() {
    super();
    this.rootTable = null;
    this.state = null;
  }

  enterProgram(ctx) {
    this.rootTable = new SymbolTable('program', 'root', null);
    this.state = 'Program';
  }
  exitProgram(ctx) {
    //TODO: rootTable size
    fs.writeFileSync('output/symbolTable_output.json', JSON.stringify(this.rootTable, null, 2), 'utf-8');
    this.state = 'Program';
  }

  // #region program
  // skip dcl grammar
  enterFt_dcl(ctx) {
    this.state = 'declare';
  }
  exitFt_dcl(ctx) {
    this.state = 'declare';
  }

  enterType_dcl(ctx) {
    if (this.state === 'declare') {
      let idCtx = ctx.ID();
      let id = toText(idCtx)
      let typeSymbol = new Symbol(id, 'userType', 4, this.rootTable.getNewOffset());
      this.rootTable.addSymbol(typeSymbol);
    }
  }
  // #endregion
}

module.exports = Listener;
