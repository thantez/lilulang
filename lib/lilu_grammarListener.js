// Generated from grammar/lilu_grammar.g4 by ANTLR 4.7.1
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


// Enter a parse tree produced by lilu_grammarParser#const_valINT.
lilu_grammarListener.prototype.enterConst_valINT = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#const_valINT.
lilu_grammarListener.prototype.exitConst_valINT = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#const_valHEX.
lilu_grammarListener.prototype.enterConst_valHEX = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#const_valHEX.
lilu_grammarListener.prototype.exitConst_valHEX = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#const_valREAL.
lilu_grammarListener.prototype.enterConst_valREAL = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#const_valREAL.
lilu_grammarListener.prototype.exitConst_valREAL = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#const_valBOOL.
lilu_grammarListener.prototype.enterConst_valBOOL = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#const_valBOOL.
lilu_grammarListener.prototype.exitConst_valBOOL = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#const_valSTRING.
lilu_grammarListener.prototype.enterConst_valSTRING = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#const_valSTRING.
lilu_grammarListener.prototype.exitConst_valSTRING = function(ctx) {
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


// Enter a parse tree produced by lilu_grammarParser#argsArgs.
lilu_grammarListener.prototype.enterArgsArgs = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#argsArgs.
lilu_grammarListener.prototype.exitArgsArgs = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#argsType.
lilu_grammarListener.prototype.enterArgsType = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#argsType.
lilu_grammarListener.prototype.exitArgsType = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#args_variableType.
lilu_grammarListener.prototype.enterArgs_variableType = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#args_variableType.
lilu_grammarListener.prototype.exitArgs_variableType = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#args_variableArgs_variable.
lilu_grammarListener.prototype.enterArgs_variableArgs_variable = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#args_variableArgs_variable.
lilu_grammarListener.prototype.exitArgs_variableArgs_variable = function(ctx) {
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


// Enter a parse tree produced by lilu_grammarParser#cond_stmtIF.
lilu_grammarListener.prototype.enterCond_stmtIF = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#cond_stmtIF.
lilu_grammarListener.prototype.exitCond_stmtIF = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#cond_stmtSWITCH.
lilu_grammarListener.prototype.enterCond_stmtSWITCH = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#cond_stmtSWITCH.
lilu_grammarListener.prototype.exitCond_stmtSWITCH = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#loop_stmtFOR.
lilu_grammarListener.prototype.enterLoop_stmtFOR = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#loop_stmtFOR.
lilu_grammarListener.prototype.exitLoop_stmtFOR = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#loop_stmtWHILE.
lilu_grammarListener.prototype.enterLoop_stmtWHILE = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#loop_stmtWHILE.
lilu_grammarListener.prototype.exitLoop_stmtWHILE = function(ctx) {
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


// Enter a parse tree produced by lilu_grammarParser#func_callVariable.
lilu_grammarListener.prototype.enterFunc_callVariable = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#func_callVariable.
lilu_grammarListener.prototype.exitFunc_callVariable = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#func_callREAD.
lilu_grammarListener.prototype.enterFunc_callREAD = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#func_callREAD.
lilu_grammarListener.prototype.exitFunc_callREAD = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#func_callWRITE.
lilu_grammarListener.prototype.enterFunc_callWRITE = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#func_callWRITE.
lilu_grammarListener.prototype.exitFunc_callWRITE = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmtAssign.
lilu_grammarListener.prototype.enterStmtAssign = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmtAssign.
lilu_grammarListener.prototype.exitStmtAssign = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmtFunc_call.
lilu_grammarListener.prototype.enterStmtFunc_call = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmtFunc_call.
lilu_grammarListener.prototype.exitStmtFunc_call = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmtCond_stmt.
lilu_grammarListener.prototype.enterStmtCond_stmt = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmtCond_stmt.
lilu_grammarListener.prototype.exitStmtCond_stmt = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmtLoop_stmt.
lilu_grammarListener.prototype.enterStmtLoop_stmt = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmtLoop_stmt.
lilu_grammarListener.prototype.exitStmtLoop_stmt = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmtRETURN.
lilu_grammarListener.prototype.enterStmtRETURN = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmtRETURN.
lilu_grammarListener.prototype.exitStmtRETURN = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmtBREAK.
lilu_grammarListener.prototype.enterStmtBREAK = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmtBREAK.
lilu_grammarListener.prototype.exitStmtBREAK = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmtCONTINUE.
lilu_grammarListener.prototype.enterStmtCONTINUE = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmtCONTINUE.
lilu_grammarListener.prototype.exitStmtCONTINUE = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#stmtDESTRUCT.
lilu_grammarListener.prototype.enterStmtDESTRUCT = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#stmtDESTRUCT.
lilu_grammarListener.prototype.exitStmtDESTRUCT = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#block.
lilu_grammarListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#block.
lilu_grammarListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprParen.
lilu_grammarListener.prototype.enterExprParen = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprParen.
lilu_grammarListener.prototype.exitExprParen = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprCaret.
lilu_grammarListener.prototype.enterExprExprCaret = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprCaret.
lilu_grammarListener.prototype.exitExprExprCaret = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprLtGt.
lilu_grammarListener.prototype.enterExprExprLtGt = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprLtGt.
lilu_grammarListener.prototype.exitExprExprLtGt = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprBitand.
lilu_grammarListener.prototype.enterExprExprBitand = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprBitand.
lilu_grammarListener.prototype.exitExprExprBitand = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprBitor.
lilu_grammarListener.prototype.enterExprExprBitor = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprBitor.
lilu_grammarListener.prototype.exitExprExprBitor = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprOr.
lilu_grammarListener.prototype.enterExprExprOr = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprOr.
lilu_grammarListener.prototype.exitExprExprOr = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprAddSub.
lilu_grammarListener.prototype.enterExprExprAddSub = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprAddSub.
lilu_grammarListener.prototype.exitExprExprAddSub = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprMulDivMod.
lilu_grammarListener.prototype.enterExprExprMulDivMod = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprMulDivMod.
lilu_grammarListener.prototype.exitExprExprMulDivMod = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprUnary_op.
lilu_grammarListener.prototype.enterExprUnary_op = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprUnary_op.
lilu_grammarListener.prototype.exitExprUnary_op = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprEqualNotequalLeGe.
lilu_grammarListener.prototype.enterExprExprEqualNotequalLeGe = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprEqualNotequalLeGe.
lilu_grammarListener.prototype.exitExprExprEqualNotequalLeGe = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#exprExprAnd.
lilu_grammarListener.prototype.enterExprExprAnd = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#exprExprAnd.
lilu_grammarListener.prototype.exitExprExprAnd = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#paranParan.
lilu_grammarListener.prototype.enterParanParan = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#paranParan.
lilu_grammarListener.prototype.exitParanParan = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#paranID.
lilu_grammarListener.prototype.enterParanID = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#paranID.
lilu_grammarListener.prototype.exitParanID = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#paranConst.
lilu_grammarListener.prototype.enterParanConst = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#paranConst.
lilu_grammarListener.prototype.exitParanConst = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#paranAllocate.
lilu_grammarListener.prototype.enterParanAllocate = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#paranAllocate.
lilu_grammarListener.prototype.exitParanAllocate = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#paranFunc.
lilu_grammarListener.prototype.enterParanFunc = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#paranFunc.
lilu_grammarListener.prototype.exitParanFunc = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#paranVar.
lilu_grammarListener.prototype.enterParanVar = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#paranVar.
lilu_grammarListener.prototype.exitParanVar = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#paranList.
lilu_grammarListener.prototype.enterParanList = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#paranList.
lilu_grammarListener.prototype.exitParanList = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#paranNil.
lilu_grammarListener.prototype.enterParanNil = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#paranNil.
lilu_grammarListener.prototype.exitParanNil = function(ctx) {
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


// Enter a parse tree produced by lilu_grammarParser#ft_defType.
lilu_grammarListener.prototype.enterFt_defType = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#ft_defType.
lilu_grammarListener.prototype.exitFt_defType = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#ft_defFun.
lilu_grammarListener.prototype.enterFt_defFun = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#ft_defFun.
lilu_grammarListener.prototype.exitFt_defFun = function(ctx) {
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


// Enter a parse tree produced by lilu_grammarParser#singleAssign.
lilu_grammarListener.prototype.enterSingleAssign = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#singleAssign.
lilu_grammarListener.prototype.exitSingleAssign = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#multiAssign.
lilu_grammarListener.prototype.enterMultiAssign = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#multiAssign.
lilu_grammarListener.prototype.exitMultiAssign = function(ctx) {
};


// Enter a parse tree produced by lilu_grammarParser#unary_op.
lilu_grammarListener.prototype.enterUnary_op = function(ctx) {
};

// Exit a parse tree produced by lilu_grammarParser#unary_op.
lilu_grammarListener.prototype.exitUnary_op = function(ctx) {
};



exports.lilu_grammarListener = lilu_grammarListener;