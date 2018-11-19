grammar lilu_grammar;

program: dcl def;

//constant values

const_val:
	INT_CONST
	| HEX_CONST
	| REAL_CONST
	| BOOL_CONST
	| STRING_CONST;

//types

type: INT | BOOL | FLOAT | STRING | ID;

// var def

ref: ID ( LBRACK expr RBRACK)*;

var: ( ( THIS | SUPER) DOT)? ref ( DOT ref)*;

var_val: ref ( ASSIGN expr)?;

var_def: CONST? type var_val ( COMMA var_val)* SEMI;

//declare

args: type ( LBRACK RBRACK)* | args COMMA type ( LBRACK RBRACK)*;

args_var:
	type (LBRACK RBRACK)* ID
	| args_var COMMA type ( LBRACK RBRACK)* ID;

func_dcl:
	(LPAREN args RPAREN ASSIGN)? ID LPAREN (args | args_var)? RPAREN SEMI;

type_dcl: ID SEMI;

ft_dcl: DECLARE LBRACE ( func_dcl | type_dcl | var_def)+ RBRACE;

dcl: ft_dcl?;

//statement

cond_stmt:
	IF expr block (ELSE block)?
	| SWITCH var LBRACE (CASE (INT_CONST|HEX_CONST) COLON block)* DEFAULT COLON block RBRACE;

loop_stmt:
	FOR (type? assign)? SEMI expr SEMI assign? block
	| WHILE expr block;

list: LBRACK ( expr | list) ( COMMA ( expr | list))* RBRACK;

params: expr | expr COMMA params;

handle_call: ID LPAREN params? RPAREN;

func_call: (var DOT)? handle_call
	| READ LPAREN var RPAREN
	| WRITE LPAREN var RPAREN;

stmt:
	assign SEMI
	| func_call SEMI
	| cond_stmt
	| loop_stmt
	| RETURN SEMI
	| BREAK SEMI
	| CONTINUE SEMI
	| DESTRUCT (LBRACK RBRACK)* ID SEMI;

//block

block: LBRACE (var_def | stmt)* RBRACE;


//expressions

// parans_id_const:
// 	LPAREN expr RPAREN
// 	| unary_op parans_id_const
// 	| ID
// 	| const_val
// 	| ALLOCATE handle_call
// 	| func_call
// 	| var
// 	| list
// 	| NIL;

// mul_div_mod:
// 	parans_id_const ((MUL | DIV | MOD) parans_id_const)*;

// add_sub: mul_div_mod ((ADD | SUB) mul_div_mod)*;

// relational_than: add_sub ((LT | GT) add_sub)*;

// relational_equals: relational_than ((EQUAL | NOTEQUAL | LE | GE) relational_than)*;

// bitwise_and: relational_equals (BITAND relational_equals)*;

// bitwise_caret: bitwise_and (CARET bitwise_and)*;

// bitwise_or: bitwise_caret (BITOR bitwise_caret)*;

// logical_and: bitwise_or (AND bitwise_or)*;

// expr: logical_and (OR logical_and)*;

// ANTLR auto ambiguty fix!!
expr: 
 unary_op expr 
| expr (MUL | DIV | MOD) expr 
| expr (ADD | SUB) expr 
| expr (LT | GT) expr 
| expr (EQUAL | NOTEQUAL | LE | GE) expr 
| expr BITAND expr 
| expr CARET expr 
| expr BITOR expr 
| expr AND expr 
| expr OR expr 
| (LPAREN expr RPAREN | ID 
| const_val 
| ALLOCATE handle_call 
| func_call 
| var 
| list 
| NIL) ;


//functions

fun_def:
	(LPAREN args_var RPAREN ASSIGN)? FUNCTION ID LPAREN args_var? RPAREN block;

access_modifier: PRIVATE | PUBLIC | PROTECTED;

component: access_modifier? ( var_def | fun_def);

type_def: TYPE ID ( COLON ID)? LBRACE component+ RBRACE;

ft_def: type_def | fun_def;

def: ft_def+;

//assignment

assign: ( var | LPAREN var ( COMMA var)* RPAREN) ASSIGN expr;

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
fragment ESCAPE_SEQUENCE:
	'\\' [tnr0'\\]
	;
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