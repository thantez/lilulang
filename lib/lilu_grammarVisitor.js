// Generated from grammar/lilu_grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by lilu_grammarParser.

function lilu_grammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

lilu_grammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
lilu_grammarVisitor.prototype.constructor = lilu_grammarVisitor;

// Visit a parse tree produced by lilu_grammarParser#program.
lilu_grammarVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#const_valINT.
lilu_grammarVisitor.prototype.visitConst_valINT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#const_valHEX.
lilu_grammarVisitor.prototype.visitConst_valHEX = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#const_valREAL.
lilu_grammarVisitor.prototype.visitConst_valREAL = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#const_valBOOL.
lilu_grammarVisitor.prototype.visitConst_valBOOL = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#const_valSTRING.
lilu_grammarVisitor.prototype.visitConst_valSTRING = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#type.
lilu_grammarVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#ref.
lilu_grammarVisitor.prototype.visitRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#variable.
lilu_grammarVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#variable_val.
lilu_grammarVisitor.prototype.visitVariable_val = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#variable_def.
lilu_grammarVisitor.prototype.visitVariable_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#argsArgs.
lilu_grammarVisitor.prototype.visitArgsArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#argsType.
lilu_grammarVisitor.prototype.visitArgsType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#args_variableType.
lilu_grammarVisitor.prototype.visitArgs_variableType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#args_variableArgs_variable.
lilu_grammarVisitor.prototype.visitArgs_variableArgs_variable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#func_dcl.
lilu_grammarVisitor.prototype.visitFunc_dcl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#type_dcl.
lilu_grammarVisitor.prototype.visitType_dcl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#ft_dcl.
lilu_grammarVisitor.prototype.visitFt_dcl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#dcl.
lilu_grammarVisitor.prototype.visitDcl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#cond_stmtIF.
lilu_grammarVisitor.prototype.visitCond_stmtIF = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#cond_stmtSWITCH.
lilu_grammarVisitor.prototype.visitCond_stmtSWITCH = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#loop_stmtFOR.
lilu_grammarVisitor.prototype.visitLoop_stmtFOR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#loop_stmtWHILE.
lilu_grammarVisitor.prototype.visitLoop_stmtWHILE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#list.
lilu_grammarVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#paramsExpr.
lilu_grammarVisitor.prototype.visitParamsExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#paramsExprCOMMA.
lilu_grammarVisitor.prototype.visitParamsExprCOMMA = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#handle_call.
lilu_grammarVisitor.prototype.visitHandle_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#func_callVariable.
lilu_grammarVisitor.prototype.visitFunc_callVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#func_callREAD.
lilu_grammarVisitor.prototype.visitFunc_callREAD = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#func_callWRITE.
lilu_grammarVisitor.prototype.visitFunc_callWRITE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmtAssign.
lilu_grammarVisitor.prototype.visitStmtAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmtFunc_call.
lilu_grammarVisitor.prototype.visitStmtFunc_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmtCond_stmt.
lilu_grammarVisitor.prototype.visitStmtCond_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmtLoop_stmt.
lilu_grammarVisitor.prototype.visitStmtLoop_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmtRETURN.
lilu_grammarVisitor.prototype.visitStmtRETURN = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmtBREAK.
lilu_grammarVisitor.prototype.visitStmtBREAK = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmtCONTINUE.
lilu_grammarVisitor.prototype.visitStmtCONTINUE = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmtDESTRUCT.
lilu_grammarVisitor.prototype.visitStmtDESTRUCT = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#block.
lilu_grammarVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprParen.
lilu_grammarVisitor.prototype.visitExprParen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprCaret.
lilu_grammarVisitor.prototype.visitExprExprCaret = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprLtGt.
lilu_grammarVisitor.prototype.visitExprExprLtGt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprBitand.
lilu_grammarVisitor.prototype.visitExprExprBitand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprBitor.
lilu_grammarVisitor.prototype.visitExprExprBitor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprOr.
lilu_grammarVisitor.prototype.visitExprExprOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprAddSub.
lilu_grammarVisitor.prototype.visitExprExprAddSub = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprMulDivMod.
lilu_grammarVisitor.prototype.visitExprExprMulDivMod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprUnary_op.
lilu_grammarVisitor.prototype.visitExprUnary_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprEqualNotequalLeGe.
lilu_grammarVisitor.prototype.visitExprExprEqualNotequalLeGe = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#exprExprAnd.
lilu_grammarVisitor.prototype.visitExprExprAnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#fun_def.
lilu_grammarVisitor.prototype.visitFun_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#access_modifier.
lilu_grammarVisitor.prototype.visitAccess_modifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#component.
lilu_grammarVisitor.prototype.visitComponent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#type_def.
lilu_grammarVisitor.prototype.visitType_def = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#ft_defType.
lilu_grammarVisitor.prototype.visitFt_defType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#ft_defFun.
lilu_grammarVisitor.prototype.visitFt_defFun = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#def.
lilu_grammarVisitor.prototype.visitDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#assign.
lilu_grammarVisitor.prototype.visitAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#unary_op.
lilu_grammarVisitor.prototype.visitUnary_op = function(ctx) {
  return this.visitChildren(ctx);
};



exports.lilu_grammarVisitor = lilu_grammarVisitor;