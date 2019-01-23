grammar lilu_grammar;

program: dcl def;

//constant values

const_val:
	INT_CONST		# const_valINT
	| HEX_CONST		# const_valHEX
	| REAL_CONST	# const_valREAL
	| BOOL_CONST	# const_valBOOL
	| STRING_CONST	# const_valSTRING;

//types

type: INT | BOOL | FLOAT | STRING | ID;

// variable def var def

ref: ID ( LBRACK expr RBRACK)*;

variable: ( ( THIS | SUPER) DOT)? ref ( DOT ref)*;

variable_val: ref ( ASSIGN expr)?;

variable_def:
	CONST? type variable_val (COMMA variable_val)* SEMI;

//declare

args:
	type (LBRACK RBRACK)*						# argsType
	| args COMMA type ( LBRACK RBRACK)*		# argsArgs;

args_variable:
	type (LBRACK RBRACK)* ID								# args_variableType
	| args_variable COMMA type (LBRACK RBRACK)* ID	# args_variableArgs_variable;

func_dcl:
	(LPAREN args RPAREN ASSIGN)? ID LPAREN (args | args_variable)? RPAREN SEMI;

type_dcl: ID SEMI;

ft_dcl:
	DECLARE LBRACE (func_dcl | type_dcl | variable_def)+ RBRACE;

dcl: ft_dcl?;

//statement

cond_stmt:
	IF expr block (ELSE block)? # cond_stmtIF
	| SWITCH variable LBRACE (
		CASE (INT_CONST | HEX_CONST) COLON block
	)* DEFAULT COLON block RBRACE # cond_stmtSWITCH;

loop_stmt:
	FOR (type? assign)? SEMI expr SEMI assign? block	# loop_stmtFOR
	| WHILE expr block											# loop_stmtWHILE;

list: LBRACK ( expr | list) ( COMMA ( expr | list))* RBRACK;

params: expr # paramsExpr | expr COMMA params 	# paramsExprCOMMA;

handle_call: ID LPAREN params? RPAREN;

func_call: (variable DOT)? handle_call	# func_callVariable
	| READ LPAREN variable RPAREN			# func_callREAD
	| WRITE LPAREN variable RPAREN		# func_callWRITE;

stmt:
	assign SEMI										# stmtAssign
	| func_call SEMI								# stmtFunc_call
	| cond_stmt										# stmtCond_stmt
	| loop_stmt										# stmtLoop_stmt
	| RETURN SEMI									# stmtRETURN
	| BREAK SEMI									# stmtBREAK
	| CONTINUE SEMI								# stmtCONTINUE
	| DESTRUCT (LBRACK RBRACK)* ID SEMI		# stmtDESTRUCT;

//block

block: LBRACE (variable_def | stmt)* RBRACE;

expr:
	unary_op expr										# exprUnary_op
	| expr (MUL | DIV | MOD) expr					# exprExprMulDivMod
	| expr (ADD | SUB) expr							# exprExprAddSub
	| expr (LT | GT) expr							# exprExprLtGt
	| expr (EQUAL | NOTEQUAL | LE | GE) expr	# exprExprEqualNotequalLeGe
	| expr BITAND expr								# exprExprBitand
	| expr CARET expr									# exprExprCaret
	| expr BITOR expr									# exprExprBitor
	| expr AND expr									# exprExprAnd
	| expr OR expr										# exprExprOr
	| (
		LPAREN expr RPAREN
		| ID
		| const_val
		| ALLOCATE handle_call
		| func_call
		| variable
		| list
		| NIL
	) # exprParen;

//functions

fun_def:
	(LPAREN args_variable RPAREN ASSIGN)? FUNCTION ID LPAREN args_variable? RPAREN block;

access_modifier: PRIVATE | PUBLIC | PROTECTED;

component: access_modifier? ( variable_def | fun_def);

type_def: TYPE ID ( COLON ID)? LBRACE component+ RBRACE;

ft_def: type_def # ft_defType 
| fun_def # ft_defFun;

def: ft_def+;

//assignment

assign: (variable | LPAREN variable ( COMMA variable)* RPAREN) ASSIGN expr;

unary_op: SUB | BANG | TILDE;

ASSIGN: '=';
GT: '>';
LT: '<';
BANG: '!';
TILDE: '~';

//keywords

ALLOCATE: 'allocate';
BOOL: 'bool';
BREAK: 'break';
CASE: 'case';
CONST: 'const';
CONTINUE: 'continue';
DECLARE: 'declare';
DEFAULT: 'default';
DESTRUCT: 'destruct';
ELSE: 'else';
FLOAT: 'float';
FOR: 'for';
IF: 'if';
INT: 'int';
NIL: 'nil';
OF: 'of';
PRIVATE: 'private';
PROTECTED: 'protected';
PUBLIC: 'public';
READ: 'read';
RETURN: 'return';
STRING: 'string';
SUPER: 'super';
SWITCH: 'switch';
THIS: 'this';
TYPE: 'type';
WHILE: 'while';
WRITE: 'write';
FUNCTION: 'function';

// Literals

REAL_CONST: (INT_CONST | HEX_CONST) DOT (
		INT_CONST EXPONENT_PART?
	)?
	| DOT INT_CONST EXPONENT_PART?;
fragment EXPONENT_PART: [eE] [+-]? DIGIT+;

HEX_CONST: '0' [xX] HEX_DIGIT+;
HEX_STR: '\\' [xX] HEX_DIGIT HEX_DIGIT;
fragment HEX_DIGIT: [0-9a-fA-F];

INT_CONST: DIGIT+;
fragment DIGIT: [0-9];

BOOL_CONST: 'true' | 'false';

STRING_CONST: '\'' (~['\\] | HEX_STR | ESCAPE_SEQUENCE)* '\'';
fragment ESCAPE_SEQUENCE: '\\' [tnr0'\\];
//separators
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';
SEMI: ';';
COMMA: ',';
DOT: '.';
COLON: ':';
EQUAL: '==';
LE: '<=';
GE: '>=';
NOTEQUAL: '!=';
AND: '&&';
OR: '||';
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
BITAND: '&';
BITOR: '|';
CARET: '^';
MOD: '%';
//ID
ID: LETTER_ ( LETTER_ | DIGIT)*;
fragment LETTER_: [A-Za-z_#];
//skips and channels
WHITESPACE: [ \t]+ -> skip;
NEWLINE: ( '\r' '\n'? | '\n') -> skip;
BLOCKCOMMENT: '%~' .*? '~%' -> channel(HIDDEN);
LINECOMMENT: '%%' ~[\r\n]* -> channel(HIDDEN);