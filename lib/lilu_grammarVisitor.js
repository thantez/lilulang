// Generated from lilu_grammar.g4 by ANTLR 4.7.1
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


// Visit a parse tree produced by lilu_grammarParser#const_val.
lilu_grammarVisitor.prototype.visitConst_val = function(ctx) {
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


// Visit a parse tree produced by lilu_grammarParser#args.
lilu_grammarVisitor.prototype.visitArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#args_variable.
lilu_grammarVisitor.prototype.visitArgs_variable = function(ctx) {
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


// Visit a parse tree produced by lilu_grammarParser#cond_stmt.
lilu_grammarVisitor.prototype.visitCond_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#loop_stmt.
lilu_grammarVisitor.prototype.visitLoop_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#list.
lilu_grammarVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#params.
lilu_grammarVisitor.prototype.visitParams = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#handle_call.
lilu_grammarVisitor.prototype.visitHandle_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#func_call.
lilu_grammarVisitor.prototype.visitFunc_call = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#stmt.
lilu_grammarVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#block.
lilu_grammarVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by lilu_grammarParser#expr.
lilu_grammarVisitor.prototype.visitExpr = function(ctx) {
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


// Visit a parse tree produced by lilu_grammarParser#ft_def.
lilu_grammarVisitor.prototype.visitFt_def = function(ctx) {
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