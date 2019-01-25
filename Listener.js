const listener = require('./lib/lilu_grammarListener').lilu_grammarListener;
const fs = require('fs');
const SymbolTable = require('./SymbolTable').symbolTable;
const Symbol = require('./SymbolTable').symbol;
const json = require('json-stringify-safe')

// #region functions

//get text of a node in sample shape
function toText(ctx) {
    if (ctx !== null) {
        return ctx.getText()
    }
    return null
}

//fixme chain cast?
function relopType(t1, t2, ctx) {
    //go up to find lub
    if (t1 === t2)
        return t1;
    else
        switch (t1) {
            case 'int':
                if (t2 === 'float')
                    return 'float';
                else if (t2 === 'bool')
                    return 'int';
                // else if (t2 === 'string')
                //     return 'string';
                break;

            case 'float':
                if (t2 === 'int')
                    return 'float';
                break;

            case 'string':
                if (t2 === 'bool')
                    return 'string';
                else if (t2 === 'int')
                    return 'string';
                break;
            case 'bool':
                return t1;

        }
    throw new TypeError(`type Error: expected ${t1} but found ${t2} in ${/* TODO: error address */null}`)
}

function widen(a, t, w) {
    if (t === w) return a;
    else //if ()
        return max(t, w);
}

// float x = 1;
// float, int
function assignTypeCheck(left, right, ctx) {
    let exprType = relopType(left, right, ctx);
    if (exprType !== left)
        throw new TypeError(`type Error: expected ${t1} but found ${t2} in ${/* TODO: error address */null}`)
}

// #endregion
class Listener extends listener {
    constructor() {
        super();
        //global symbol table
        this.globalTable = null;
        this.state = [];
    }


    enterProgram(ctx) {
        //define global table
        this.globalTable = new SymbolTable('program', 'root', null);
        this.state.push('program');
    }

    exitProgram(ctx) {
        //DONE: globalTable size
        //TODO: check start function is in program or not
        //TODO: symbol table of classes and etc ...
        fs.writeFileSync('.temp/symbolTable_output.json', json(this.globalTable, null, 2), 'utf-8');
        this.state.pop();
    }

    // #region program

    // #region declare

    // skip dcl grammar
    enterFt_dcl(ctx) {
        this.state.push('declare');
        ctx.table = this.globalTable;
    }

    exitFt_dcl(ctx) {
        this.state.pop();
    }

    enterType_dcl(ctx) {
        let idCtx = ctx.ID();
        let id = toText(idCtx);
        let typeObj = {
            type: 'userType',
            value: id
        };
        if (this.state.top === 'declare') {
            let typeTable = new SymbolTable(id, {type: id}, null)
            let typeSymbol = new Symbol(id, typeObj, this.globalTable.getNewOffset(), typeTable);
            this.globalTable.addSymbol(typeSymbol, ctx);
        }
    }

    // #region function declare

    exitFunc_dcl(ctx) {
        let returnableArgs = null;
        let returnableArgsTypes = null;
        let mainArgs = null;
        let mainArgsTypes = null;
        if (ctx.ASSIGN()) {
            returnableArgs = ctx.getChild(1);
            returnableArgsTypes = returnableArgs.typeObj;
            if (ctx.children.length === 8) {
                mainArgsTypes = [];
            } else {
                mainArgs = ctx.getChild(6);
                mainArgsTypes = mainArgs.typeObj;
            }
        } else {
            returnableArgsTypes = [];
            if (ctx.children.length === 4) {
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
        this.globalTable.addSymbol(functionSymbol, ctx)

        // add return symbols to function table
        returnableArgsTypes.forEach(typeObj => {
            let argSymbol = new Symbol(typeObj.id, {
                type: typeObj.type,
                value: typeObj.value,
                return: true
            }, functionTable.getNewOffset(), null);
            functionTable.addSymbol(argSymbol, ctx);
        });

        // add arguments symbols to function table
        mainArgsTypes.forEach(typeObj => {
            let argSymbol = new Symbol(typeObj.id, {
                type: typeObj.type,
                value: typeObj.value,
                return: false
            }, functionTable.getNewOffset(), null);
            functionTable.addSymbol(argSymbol, ctx);
        });

    }

    exitArgsType(ctx) {
        //TODO: arrays
        ctx.typeObj = [ctx.type().typeObj]
    }

    exitArgsArgs(ctx) {
        let argsType = ctx.args().typeObj;
        let newArgType = ctx.type().typeObj;
        argsType.push(newArgType)
        ctx.typeObj = argsType;
    }

    exitArgs_variableType(ctx) {
        //TODO: arrays
        let typeObj = {
            type: ctx.type().typeObj.type,
            id: toText(ctx.ID())
        };
        ctx.typeObj = [typeObj]
    }

    exitArgs_variableArgs_variable(ctx) {
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

    exitVariable_def(ctx) {
        let preType = (ctx.CONST() ? 'const' : 'var');
        let type = toText(ctx.type());
        let vars = ctx.variable_val();
        let typeObj = null;

        let table = ctx.parentCtx.table;

        vars.forEach(vr => {
            let id = vr.id;
            let vrType = vr.typeObj;
            vrType.preType = preType;
            if (vrType) {
                if (vrType.type !== type) {
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
            table.addSymbol(vrSymbol, ctx);
        });

        //if()

    }

    enterVariable_val(ctx) {

    }

    exitVariable_val(ctx) {
        let ref = ctx.ref()
        let expr = ctx.expr();
        if (expr) {
            ctx.typeObj = {
                type: expr.typeObj.type,
                value: expr.value
            }
        }
        ctx.id = toText(ref);
    }

    enterRef(ctx) {

    }

    exitRef(ctx) {

    }

    // #region expr

    enterExprUnary_op(ctx) {
    }

    exitExprUnary_op(ctx) {
        let op = ctx.getChild(1);
        let operator = ctx.getChild(0);

        switch (toText(operator)) {
            case '-':
                return {type: op.typeObj.type}
            case '!':
                return {type: (relopType(op.typeObj.type, 'bool', ctx) ? 'bool' : '')};
            case '~':
                return {type: (relopType(op.typeObj.type, 'int', ctx) ? 'int' : '')};

        }
    }

    enterExprExprMulDivMod(ctx) {
    }

    exitExprExprMulDivMod(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);

        ctx.typeObj = {
            type: relopType(op1.typeObj.type, op2.typeObj.type, ctx),
            value: toText(ctx)
        }

        //TODO: find value
    }

    enterExprExprAddSub(ctx) {
    }

    exitExprExprAddSub(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);

        ctx.typeObj = {
            type: relopType(op1.typeObj.type, op2.typeObj.type, ctx),
            value: toText(ctx)
        }

        //TODO: find value
    }

    enterExprExprLtGt(ctx) {
    }

    exitExprExprLtGt(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        relopType(op1.typeObj.type, op2.typeObj.type, ctx);
        ctx.typeObj = {
            type: 'bool',
            value: toText(ctx)
        }

        //TODO: find value

    }

    enterExprExprEqualNotequalLeGe(ctx) {
    }

    exitExprExprEqualNotequalLeGe(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        relopType(op1.typeObj.type, op2.typeObj.type, ctx);
        ctx.typeObj = {
            type: 'bool',
            value: toText(ctx)
        }
    }

    enterExprExprBitand(ctx) {
    }

    exitExprExprBitand(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, op2.typeObj.type, ctx);
        if (relopType(t3, 'int', ctx) === 'int') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
            throw new Error(`type Error: expected int but found ${t3} in ${/* TODO: error address */null}`);
        }
        ;

    }

    enterExprExprCaret(ctx) {
    }

    exitExprExprCaret(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, op2.typeObj.type, ctx);
        if (relopType(t3, 'int', ctx) === 'int') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
            throw new Error(`type Error: expected int but found ${t3} in ${/* TODO: error address */null}`);
        }
        ;
    }

    enterExprExprBitor(ctx) {
    }

    exitExprExprBitor(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, op2.typeObj.type, ctx);
        if (relopType(t3, 'int', ctx) === 'int') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
            throw new Error(`type Error: expected int but found ${t3} in ${/* TODO: error address */null}`);
        }
        ;
    }

    enterExprExprAnd(ctx) {
    }

    exitExprExprAnd(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, 'bool', ctx);
        let t4 = relopType(op2.typeObj.type, 'bool', ctx);
        if (relopType(t3, t4, ctx) === 'bool') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
            throw new Error(`type Error: expected int but found ${t3} in ${/* TODO: error address */null}`);
        }
        ;
    }

    enterExprExprOr(ctx) {
    }

    exitExprExprOr(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, 'bool', ctx);
        let t4 = relopType(op2.typeObj.type, 'bool', ctx);
        if (relopType(t3, t4, ctx) === 'bool') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
            throw new Error(`type Error: expected int but found ${t3} in ${/* TODO: error address */null}`);
        }
    }

    enterExprParen(ctx) {
    }

    exitExprParen(ctx) {
        let typeObj = null;
        if (ctx.const_val()) {
            typeObj = ctx.const_val().typeObj
        } else if (ctx.list()) {
            typeObj = ctx.list().typeObj
        }
        ctx.typeObj = typeObj;
    }

    // #endregion

    // #region const_val

    exitConst_valINT(ctx) {
        ctx.typeObj = {
            type: 'int',
            value: toText(ctx)
        }
    }

    exitConst_valBOOL(ctx) {
        ctx.typeObj = {
            type: 'bool',
            value: (toText(ctx) !== 'false')
            // value: (toText(ctx) === 'false' ? false : true)
        }
    }

    exitConst_valREAL(ctx) {
        ctx.typeObj = {
            type: 'float',
            value: toText(ctx)
        }
    }

    exitConst_valHEX(ctx) {
        ctx.typeObj = {
            type: 'int',
            value: toText(ctx)
        }
    }

    exitConst_valSTRING(ctx) {
        ctx.typeObj = {
            type: 'string',
            value: toText(ctx)
        }
    }

    // #endregion

    // #region list

    enterList(ctx) {
    }

    exitList(ctx) {
        let listType = ctx.getChild(1).typeObj.type;
        // 2 steps because of COMMA in list, skip child(0) and cild(length-1) because of '[]'
        for (let i = 2; i < ctx.children.length - 1; i += 2) {
            let itemType = ctx.getChild(i).typeObj.type
            if (listType !== itemType) {
                throw new TypeError(`type Error: expected ${listType} but found ${itemType} in ${/* TODO: error address */null}`)
            }
        }
        ctx.typeObj = {
            type: 'list',
            value: toText(ctx),
            innerType: 'int'
        }
    }

    // #endregion

    exitType(ctx) {
        ctx.typeObj = {
            type: toText(ctx)
        }
    }

    //#endregion declare

    // #region def

    enterExprExprMulDivMod(ctx) {

    }

    exitExprExprMulDivMod(ctx) {
        let var1 = ctx.getChild(0);
        let var2 = ctx.getChild(2);
        // let op = ctx.getChild(1);
        // let value;


        //todo value
        // if (var1.type === var2.type && (var1.type === 'int' || var1.type === 'float'))
        //     switch (op) {
        //         case '*':
        //             return var1 * var2;
        //         case '/':
        //             return var1 / var2;
        //         case '%':
        //             return var1 % var2;
        //
        //
        //     }
    }

    enterDcl(ctx) {
        this.state.push('dcl');
    }

    exitDef(ctx) {/* skip */
        this.state.pop();
    }

    enterType_def(ctx) {
        this.state.push('typedef');
        let typeName = toText(ctx.getChild(1));
        let typeScope = this.globalTable.getTypeInRoot(typeName);
        let fatherScope = null;
        if (ctx.COLON()) {
            let fatherName = toText(ctx.getChild(3));
            fatherScope = this.globalTable.getTypeInRoot(fatherName);
            if (!fatherScope.isImplemented) {
                ctx.addErrorNode(`class ${fatherName} not implemented.`);
                console.error(ctx.children[ctx.children.length - 1].symbol);
            }
        }
        typeScope.isImplemented = true;
        typeScope.addParentScope(fatherScope);
        ctx.table = typeScope;
    }

    exitType_def(ctx) {
        this.state.pop();
    }

    enterComponent(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitComponent(ctx) {
    }

    enterFun_def(ctx) {
        let functionSymbol, functionTable;
        if (this.state === 'typedef') {
            let parentTable = ctx.parentCtx.table
            // creation for function table, pointing to global table by parent scope
            functionTable = new SymbolTable(toText(ctx.ID()), {
                type: 'function',
                defineValue: toText(ctx)
            }, parentTable);

            // creation for function symbol that is a way for access to function table, pointing to
            // function table by child scope
            functionSymbol = new Symbol(toText(ctx.ID()), {
                type: 'function',
                defineValue: toText(ctx)
            }, parentTable.getNewOffset(), functionTable)

            // add function symbol to type table
            parentTable.addSymbol(functionSymbol, ctx)
        } else {
            let parentTable = this.globalTable;
            functionTable = parentTable.getChildTable(toText(ctx.ID()));
        }


        ctx.table = functionTable;
        this.state.push('fundef');
    }

    exitFun_def(ctx) {
        this.state.pop();
    }

    enterBlock(ctx) {
        if (this.state.top === 'fundef') {
            ctx = ctx.parentCtx;
            let returnableArgsTypes, mainArgsTypes = null;
            if (ctx.ASSIGN()) {
                returnableArgsTypes = ctx.getChild(1).typeObj;
                mainArgsTypes = ctx.getChild(7).typeObj;
            } else {
                returnableArgsTypes = [];
                mainArgsTypes = ctx.getChild(3).typeObj;
            }
            if (mainArgsTypes === undefined) {
                mainArgsTypes = [];
            }
            let functionTable = ctx.table;
            //TODO: BUG: when place '.' instead of ',' it throw mainArgs is undefined!

            // add return symbols to function table
            returnableArgsTypes.forEach(typeObj => {
                let argSymbol = new Symbol(typeObj.id, {
                    type: typeObj.type,
                    value: typeObj.value,
                    return: true
                }, functionTable.getNewOffset(), null);
                functionTable.addSymbol(argSymbol, ctx);
            });

            // add arguments symbols to function table
            mainArgsTypes.forEach(typeObj => {
                let argSymbol = new Symbol(typeObj.id, {
                    type: typeObj.type,
                    value: typeObj.value,
                    return: false
                }, functionTable.getNewOffset(), null);
                functionTable.addSymbol(argSymbol, ctx);
            });

        }

    }

    enterStmtAssign(ctx) {
        this.state.push('stmt');
    }

    exitStmtAssign(ctx) {
        this.state.pop();
    }

    enterAssign(ctx) {
    }

    exitAssign(ctx) {
        // console.log(ctx.getChild(1));
        console.log(toText(ctx.variable().id));
        if (ctx.children.length === 3) {

            assignTypeCheck(ctx.variable().typeObj.type, ctx.expr().typeObj.type, ctx);
        }
        // else {
        //
        // }
    }

    enterCond_stmtIF(ctx) {
    }

    exitCond_stmtIF(ctx) {
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx);
    }

    enterCond_stmtSWITCH(ctx) {
    }

    exitCond_stmtSWITCH(ctx) {
        let valueType = ctx.variable().typeObj.type;
        relopType(valueType, 'int', ctx);
    }

    enterLoop_stmtFOR(ctx) {
        this.state.push('loop');
    }

    exitLoop_stmtFOR(ctx) {
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx);
        this.state.pop();
    }

    enterLoop_stmtWHILE(ctx) {
        this.state.push('loop');
    }

    exitLoop_stmtWHILE(ctx) {
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx);
        this.state.pop();
    }

    exitStmtBREAK(ctx) {
        if (this.state.top !== 'loop') {
            throw new ScopeError(`scope Error: break must be used inside loop`)
        }
    }

    exitStmtCONTINUE(ctx) {
        if (this.state.top !== 'loop') {
            throw new ScopeError(`scope Error: continue must be used inside loop`)
        }
    }

    exitStmtDESTRUCT(ctx) {
        let type = ctx.ID.typeObj.type;
        if (type.typeObj.type !== 'userType')
            throw new typeError(`type Error: destruct can be used with userTypes`);
        //todo array
        // else if (type === 'array')
        // if ((ctx.children.length - 3) / 2 !== arrayDimension)
        //     throw new typeError(`type Error: type mismatch`);
    }


    // #region funcs and stmts

    // #endregion

    // #endregion def

    // #endregion
}

module.exports = Listener;
