grammar lilu_grammar;

program: dcl def;

//constant values

const_val: (unary_op)? (
		INT_CONST
		| REAL_CONST
		| BOOL_CONST
		| STRING_CONST
	);

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

//names

block: LBRACE ( var_def | stmt)* RBRACE;

//statement

cond_stmt:
	IF expr block (ELSE block)?
	| SWITCH var LBRACE (CASE INT_CONST COLON block)* DEFAULT COLON block RBRACE;

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
	| DESTRUCT ( LBRACK RBRACK)* ID SEMI;

//expressions

// TODO: Modify the orders
parans_id_const:
	LPAREN expr RPAREN
	| ID
	| const_val
	| ALLOCATE handle_call
	| func_call
	| var
	| list
	| NIL;

mul_div_mod:
	mul_div_mod (MUL | DIV | MOD) parans_id_const
	| parans_id_const;

add_sub: add_sub (ADD | SUB) mul_div_mod | mul_div_mod;

relational_than: relational_than (LT | GT) add_sub | add_sub;

relational_equals:
	relational_equals (EQUAL | NOTEQUAL | LE | GE) relational_than
	| relational_than;

bitwise_and:
	bitwise_and BITAND relational_equals
	| relational_equals;

bitwise_caret: bitwise_caret CARET bitwise_and | bitwise_and;

bitwise_or: bitwise_or BITOR bitwise_caret | bitwise_caret;

logical_and: logical_and AND bitwise_or | bitwise_or;

expr: expr OR logical_and | logical_and;

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

//assignment operators

unary_op: SUB | BANG | TILDE; //fixme

ASSIGN: '=';

GT: '>';

LT: '<';

BANG: '!';

TILDE: '~';

//expressions detail

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

INT_CONST: '0' | [1-9] DIGITS | HEX_CONST;

HEX_CONST: '0' [xX] [0-9a-fA-F];

REAL_CONST: (DIGITS DOT DIGITS? | DOT DIGITS) EXPONENT_PART?;

BOOL_CONST: 'true' | 'false';

// TODO: ~["\\\r\n] WHAT DOES IT MEAN?
STRING_CONST: '\'' (~["\\\r\n] | ESCAPE_SEQUENCE)* '\'';

fragment EXPONENT_PART: [eE] [+-]? DIGITS;

fragment ESCAPE_SEQUENCE: '\\' [tnr0'\\];

fragment DIGITS: DIGIT+;

fragment DIGIT: [0-9];

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

//operators

binary_op: arithmetic | relational | bitwise | logical; //fixme

arithmetic: ADD | MUL | DIV | MOD | SUB; //fixme

//add_sub: (ADD | SUB) mul_div_mod?;

//mul_div_mod: MUL | DIV | MOD;

relational: EQUAL | NOTEQUAL | GE | LE | GT | LT; //fixme

bitwise: BITAND | BITOR | CARET; //fixme

logical: OR | AND;

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

fragment LETTER_: [A-Za-z_];

//skip

Whitespace: [ \t]+ -> skip;

Newline: ( '\r' '\n'? | '\n') -> skip;

BlockComment: '%~' .*? '~%' -> skip;

LineComment: '%%' ~[\r\n]* -> skip;