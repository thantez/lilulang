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
    fs.writeFileSync('.temp/symbolTable_output.txt', util.inspect(this.globalTable), 'utf-8');
    this.state = 'Program';
  }

  // #region program

  // #region declare

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
    let typeObj = {
      type:'userType',
      value: id
    };
    if (this.state === 'declare') {
      let typeTable = new SymbolTable(id, {type: id}, this.globalTable)
      let typeSymbol = new Symbol(id, typeObj, this.globalTable.getNewOffset(), typeTable);
      this.globalTable.addSymbol(typeSymbol);
    }
  }
  // #region function declare

  exitFunc_dcl(ctx){
    let returnableArgs = null;
    let returnableArgsTypes = null;
    let mainArgs = null;
    let mainArgsTypes = null;
    if(ctx.ASSIGN()){
      returnableArgs = ctx.getChild(1);
      returnableArgsTypes = returnableArgs.typeObj;
      if(ctx.children.length == 8){
        mainArgsTypes = [];
      } else {
        mainArgs = ctx.getChild(6);
        mainArgsTypes = mainArgs.typeObj;
      }
    }
    else{
      returnableArgsTypes = [];
      if(ctx.children.length == 4){
        mainArgsTypes = [];
      } else {
        mainArgs = ctx.getChild(2);
        mainArgsTypes = mainArgs.typeObj;
      }
    }
    //TODO: BUG: when place '.' instead of ',' it throw mainArgs is undefined!

    // creation for function table, pointing to global table by parent scope
    let functionTable = new SymbolTable(toText(ctx.ID()), {
      type: 'function',
      defineValue: toText(ctx)
    }, this.globalTable);

    // creation for function symbol that is a way for access to function table, pointing to
    // function table by child scope
    let functionSymbol = new Symbol(toText(ctx.ID()), {
      type: 'function',
      defineValue: toText(ctx)
    }, this.globalTable.getNewOffset(), functionTable)

    // add function symbol to global table
    this.globalTable.addSymbol(functionSymbol)
    
    // add return symbols to function table
    returnableArgsTypes.forEach(typeObj => {
      let argSymbol = new Symbol(typeObj.id, {type: typeObj.type, value: typeObj.value, return: true}, functionTable.getNewOffset(), null);
      functionTable.addSymbol(argSymbol);
    });
    
    // add arguments symbols to function table
    mainArgsTypes.forEach(typeObj => {
      let argSymbol = new Symbol(typeObj.id, {type: typeObj.type, value: typeObj.value, return: false}, functionTable.getNewOffset(), null);
      functionTable.addSymbol(argSymbol);
    });

  }

  exitArgsType(ctx){
    //TODO: arrays
    ctx.typeObj = [ctx.type().typeObj]
  }

  exitArgsArgs(ctx){
    let argsType = ctx.args().typeObj;
    let newArgType = ctx.type().typeObj;
    argsType.push(newArgType)
    ctx.typeObj = argsType;
  }

  exitArgs_variableType(ctx){
    //TODO: arrays
    let typeObj = {
      type: ctx.type().typeObj.type,
      id: toText(ctx.ID())
    };
    ctx.typeObj = [typeObj]
  }

  exitArgs_variableArgs_variable(ctx){
    let argsType = ctx.args_variable().typeObj;
    let newArg = ctx.type();
    let newId = ctx.ID();
    let newArgTypeObj = {
      type: newArg.typeObj.type,
      id: toText(newId)
    };
    argsType.push(newArgTypeObj)
    ctx.typeObj = argsType;
  }
  // #endregion

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
      vrType.preType = preType;
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

  exitType(ctx){
    ctx.typeObj = {
      type: toText(ctx)
    }
  }

  //#endregion declare
  
  // #region def

  enterDcl(ctx){
    this.state='dcl';
  }
  exitDef(ctx){/* skip */}

  enterType_def(ctx){
    let typeName = toText(ctx.getChild(1));
    let typeScope = this.globalTable.getTypeInRoot(typeName);
    let fatherScope = null;
    if(ctx.COLON()){
      let fatherName = toText(ctx.getChild(3));
      fatherScope = this.globalTable.getTypeInRoot(fatherName);
    }
    let typeSymbols = typeScope.symbols;
    let fatherSymbols = fatherScope.symbols;
    //TODO: inheritance

  }

  // #endregion def

  // #endregion
}

module.exports = Listener;
