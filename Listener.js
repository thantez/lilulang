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

function jsonConcat(o1, o2) {
  for (var key in o2) {
   o1[key] = o2[key];
  }
  return o1;
 }

function typeObjCreator(isConst, type, value, options){
  obj = {};
  if (isConst){
    obj.preType = 'const'
  } else{
    obj.preType = 'var'
  }
  if(obj.type){
    obj.type = type;
  } else {
    obj.type = 'userType';
  }
  if(obj.value){
    obj.value = value;
  }
  if(options){
    obj.options = jsonConcat(obj, options);
  }
  return obj;
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
    fs.writeFileSync('.temp/symbolTable_output.json', JSON.stringify(this.rootTable, null, 2), 'utf-8');
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
    let idCtx = ctx.ID();
    let id = toText(idCtx);
    let typeObj = typeObjCreator(false);
    if (this.state === 'declare') {
      let typeSymbol = new Symbol(id, typeObj, 4, this.rootTable.getNewOffset());
      this.rootTable.addSymbol(typeSymbol);
    }
  }
  exitVariable_def(ctx){
    // let constCtx = ctx.CONST();
    // let typeObj = typeObjCreator(constCtx, toText(ctx.type()), );
    // if (this.state = 'declare'){

    // }
  }

  enterVariable_val(ctx){

  }
  exitVariable_val(ctx){

  }

  enterRef(ctx){

  }
  exitRef(ctx){

  }
  
  enterExpr(ctx){
    let children = ctx.children;
    children.forEach(e => {
      console.log(toText(e))
    });
  }
  exitExpr(){

  }
  // #endregion
}

module.exports = Listener;
