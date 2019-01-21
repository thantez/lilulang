// Generated from lilu_grammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by lilu_grammarParser.
function lilu_grammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

lilu_grammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
lilu_grammarListener.prototype.constructor = lilu_grammarListener;

// Enter a parse tree produced by lilu_grammarParser#program.
lilu_grammarListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#program.
lilu_grammarListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#const_val.
lilu_grammarListener.prototype.enterConst_val = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#const_val.
lilu_grammarListener.prototype.exitConst_val = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#type.
lilu_grammarListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#type.
lilu_grammarListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#ref.
lilu_grammarListener.prototype.enterRef = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#ref.
lilu_grammarListener.prototype.exitRef = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#variable.
lilu_grammarListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#variable.
lilu_grammarListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#variable_val.
lilu_grammarListener.prototype.enterVariable_val = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#variable_val.
lilu_grammarListener.prototype.exitVariable_val = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#variable_def.
lilu_grammarListener.prototype.enterVariable_def = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#variable_def.
lilu_grammarListener.prototype.exitVariable_def = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#args.
lilu_grammarListener.prototype.enterArgs = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#args.
lilu_grammarListener.prototype.exitArgs = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#args_variable.
lilu_grammarListener.prototype.enterArgs_variable = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#args_variable.
lilu_grammarListener.prototype.exitArgs_variable = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#func_dcl.
lilu_grammarListener.prototype.enterFunc_dcl = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#func_dcl.
lilu_grammarListener.prototype.exitFunc_dcl = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#type_dcl.
lilu_grammarListener.prototype.enterType_dcl = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#type_dcl.
lilu_grammarListener.prototype.exitType_dcl = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#ft_dcl.
lilu_grammarListener.prototype.enterFt_dcl = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#ft_dcl.
lilu_grammarListener.prototype.exitFt_dcl = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#dcl.
lilu_grammarListener.prototype.enterDcl = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#dcl.
lilu_grammarListener.prototype.exitDcl = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#cond_stmt.
lilu_grammarListener.prototype.enterCond_stmt = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#cond_stmt.
lilu_grammarListener.prototype.exitCond_stmt = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#loop_stmt.
lilu_grammarListener.prototype.enterLoop_stmt = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#loop_stmt.
lilu_grammarListener.prototype.exitLoop_stmt = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#list.
lilu_grammarListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#list.
lilu_grammarListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#params.
lilu_grammarListener.prototype.enterParams = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#params.
lilu_grammarListener.prototype.exitParams = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#handle_call.
lilu_grammarListener.prototype.enterHandle_call = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#handle_call.
lilu_grammarListener.prototype.exitHandle_call = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#func_call.
lilu_grammarListener.prototype.enterFunc_call = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#func_call.
lilu_grammarListener.prototype.exitFunc_call = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmt.
lilu_grammarListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmt.
lilu_grammarListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#block.
lilu_grammarListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#block.
lilu_grammarListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#expr.
lilu_grammarListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#expr.
lilu_grammarListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#fun_def.
lilu_grammarListener.prototype.enterFun_def = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#fun_def.
lilu_grammarListener.prototype.exitFun_def = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#access_modifier.
lilu_grammarListener.prototype.enterAccess_modifier = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#access_modifier.
lilu_grammarListener.prototype.exitAccess_modifier = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#component.
lilu_grammarListener.prototype.enterComponent = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#component.
lilu_grammarListener.prototype.exitComponent = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#type_def.
lilu_grammarListener.prototype.enterType_def = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#type_def.
lilu_grammarListener.prototype.exitType_def = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#ft_def.
lilu_grammarListener.prototype.enterFt_def = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#ft_def.
lilu_grammarListener.prototype.exitFt_def = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#def.
lilu_grammarListener.prototype.enterDef = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#def.
lilu_grammarListener.prototype.exitDef = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#assign.
lilu_grammarListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#assign.
lilu_grammarListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#unary_op.
lilu_grammarListener.prototype.enterUnary_op = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#unary_op.
lilu_grammarListener.prototype.exitUnary_op = function(ctx) {
};



exports.lilu_grammarListener = lilu_grammarListener;