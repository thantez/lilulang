const listener = require('./lib/lilu_grammarListener').lilu_grammarListener;
const fs = require('fs');
const SymbolTable = require('./SymbolTable').symbolTable;
const Symbol = require('./SymbolTable').symbol;
const util = require('util');


// #region functions

//get text of a node in sample shape
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
    //global symbol table
    this.globalTable = null;
    this.state = '';
  }

  enterProgram(ctx) {
    //define global table
    this.globalTable = new SymbolTable('program', 'root', null);
    this.state = 'Program';
  }
  exitProgram(ctx) {
    //DONE: globalTable size
    //TODO: check start function is in program or not
    //TODO: symbol table of classes and etc ...
    fs.writeFileSync('.temp/symbolTable_output.json', JSON.stringify(this.globalTable, null, 2), 'utf-8');
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
      let typeSymbol = new Symbol(id, typeObj, 4, this.globalTable.getNewOffset());
      this.globalTable.addSymbol(typeSymbol);
    }
  }

  exitVariable_def(ctx){
    let preType = (ctx.CONST()? 'const':'var');
    let type = toText(ctx.type());
    let vars = ctx.variable_val();
    let typeObj = null;

    let table = null;
    if(this.state === 'declare'){
      table = this.globalTable;
    }

    vars.forEach(vr => {
      let id = vr.id;
      let vrType = vr.typeObj;
      if (vrType){
        if (vrType.type != type){
          throw new Error(`type Error: expected ${type} but found ${vrType.type} in ${/* TODO: error address */null}`)
        }
        typeObj = vrType;
      } else {
        typeObj = {
          type: type,
          value: undefined
        }
      }
      let vrSymbol = new Symbol(id, typeObj, table.getNewOffset(), null);
      table.addSymbol(vrSymbol);
    });
    
    //if()
  }

  enterVariable_val(ctx){

  }
  exitVariable_val(ctx){
    let ref = ctx.ref()
    let expr = ctx.expr();
    if (expr){
      ctx.typeObj = {
        type : expr.typeObj.type,
        value : expr.value
      }
    }
    ctx.id = toText(ref);
  }

  enterRef(ctx){

  }
  exitRef(ctx){

  }
  
  // #region expr
  
  enterExprUnary_op(ctx){}
  exitExprUnary_op(ctx){}

  enterExprExprMulDivMod(ctx){}
  exitExprExprMulDivMod(ctx){
    let op1 = ctx.getChild(0);
    let operator = toText(ctx.getChild(1));
    let op2 = ctx.getChild(2);

    if (op1.typeObj.type != op2.typeObj.type){
      // TODO: type checking for type cast
      throw new Error(`type Error: expected ${op1.typeObj.type} but found ${op2.typeObj.type} in ${/* TODO: error address */null}`)
    }

    ctx.typeObj = {
      type : op1.typeObj.type,
      value : toText(ctx)
    }
  }

  enterExprExprAddSub(ctx){}
  exitExprExprAddSub(ctx){
    let op1 = ctx.getChild(0);
    let operator = toText(ctx.getChild(1));
    let op2 = ctx.getChild(2);

    if (op1.typeObj.type != op2.typeObj.type){
      // TODO: type checking for type cast
      throw new Error(`type Error: expected ${op1.typeObj.type} but found ${op2.typeObj.type} in ${/* TODO: error address */null}`)
    }

    ctx.typeObj = {
      type : op1.typeObj.type,
      value : toText(ctx)
    }
  }

  enterExprExprLtGt(ctx){}
  exitExprExprLtGt(ctx){
    let op1 = ctx.getChild(0);
    let operator = toText(ctx.getChild(1));
    let op2 = ctx.getChild(2);

    if (op1.typeObj.type != op2.typeObj.type){
      // TODO: type checking for type cast
      throw new Error(`type Error: expected ${op1.typeObj.type} but found ${op2.typeObj.type} in ${/* TODO: error address */null}`)
    }

    ctx.typeObj = {
      type : 'bool',
      value : toText(ctx)
    }}

  enterExprExprEqualNotequalLeGe(ctx){}
  exitExprExprEqualNotequalLeGe(ctx){
    let op1 = ctx.getChild(0);
    let operator = toText(ctx.getChild(1));
    let op2 = ctx.getChild(2);

    if (op1.typeObj.type != op2.typeObj.type){
      // TODO: type checking for type cast
      throw new Error(`type Error: expected ${op1.typeObj.type} but found ${op2.typeObj.type} in ${/* TODO: error address */null}`)
    }

    ctx.typeObj = {
      type : 'bool',
      value : toText(ctx)
    }
  }

  enterExprExprBitand(ctx){}
  exitExprExprBitand(ctx){}

  enterExprExprCaret(ctx){}
  exitExprExprCaret(ctx){}

  enterExprExprBitor(ctx){}
  exitExprExprBitor(ctx){}

  enterExprExprAnd(ctx){}
  exitExprExprAnd(ctx){}

  enterExprExprOr(ctx){}
  exitExprExprOr(ctx){}

  enterExprParen(ctx){}
  exitExprParen(ctx){
    let typeObj = null;
    if (ctx.const_val()){
      typeObj = ctx.const_val().typeObj
    } else if (ctx.list()){
      typeObj = ctx.list().typeObj
    }
    ctx.typeObj = typeObj;
  }
  // #endregion

  // #region const_val

  exitConst_valINT(ctx){
    ctx.typeObj = {
      type : 'int',
      value : toText(ctx)
    }
  }

  exitConst_valBOOL(ctx){
    ctx.typeObj = {
      type : 'bool',
      value : (toText(ctx) === 'false'? false : true)
    }
  }

  exitConst_valREAL(ctx){
    ctx.typeObj = {
      type : 'float',
      value : toText(ctx)
    }
  }
  
  exitConst_valHEX(ctx){
    ctx.typeObj = {
      type : 'int',
      value : toText(ctx)
    }
  }

  exitConst_valSTRING(ctx){
    ctx.typeObj = {
      type : 'string',
      value : toText(ctx)
    }
  }

  // #endregion
  
  // #region list

  enterList(ctx){}
  exitList(ctx){
    let listType = ctx.getChild(1).typeObj.type;
    // 2 steps because of COMMA in list, skip child(0) and cild(length-1) because of '[]'
    for(let i = 2; i < ctx.children.length-1; i += 2){
      let itemType = ctx.getChild(i).typeObj.type
      if(listType != itemType){
        throw new TypeError(`type Error: expected ${listType} but found ${itemType} in ${/* TODO: error address */null}`)
      }
    }
    ctx.typeObj = {
      type : 'list',
      value: toText(ctx),
      innerType : 'int'
    }
  }

  // #endregion

  // #endregion
}

module.exports = Listener;
