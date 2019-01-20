const listener = require('./lib/lilu_grammarListener').lilu_grammarListener;
const fs = require('fs');
const SymbolTable = require('./SymbolTable');

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
    fs.writeFileSync('output/symbolTable_output.json', this.rootTable);
  }
  enterEveryRule(){

  }
  exitEveryRule(){
    
  }
}

module.exports = Listener;
