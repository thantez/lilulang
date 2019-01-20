const listener = require('./lib/lilu_grammarListener').lilu_grammarListener;
const fs = require('fs');
const SymbolTable = require('./SymbolTable').symbolTable;
const Symbol = require('./SymbolTable').symbol;
const util = require('util');

class Listener extends listener {
  constructor(){
    super();
    this.rootTable = null;
  }
  enterProgram() {
    this.rootTable = new SymbolTable('program', 'root', null);
  }
  exitProgram(){
    //TODO: rootTable size
    fs.writeFileSync('output/symbolTable_output.json',JSON.stringify(this.rootTable, null, 2) , 'utf-8');
  }
}

module.exports = Listener;
