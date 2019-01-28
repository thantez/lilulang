const listener = require('./lib/lilu_grammarListener').lilu_grammarListener;
const fs = require('fs');
const SymbolTable = require('./SymbolTable').symbolTable;
const Symbol = require('./SymbolTable').symbol;
const json = require('json-stringify-safe')
const path = require('path');

const {
    SemanticOperandTypeMismatchError,
    SemanticScopeError,
    SemanticDestructError,
    SemanticTypeDeclaredError,
    SemanticNotDeclaredReferenceError,
    SemanticStartError,
    SemanticReDefinedError,
    SemanticNotDeclaredFunctionError,
    SemanticCountOfPartsOfAssignError,
    SemanticTypeOfPartsOfAssignError,
    SemanticConstAssignError,
    SemanticReturnWithoutAssignError,
    SemanticStmtExprError,
    SemanticFunctionAllocatedError,
    SemanticNotImplementedDeclaresError
} = require(path.resolve('error', 'helper'));
const errors = [];


// #region code
function errorOutput() {
    let obj = {}
    for (i in errors) {
        let error = errors[i]
        let obj2 = {
            code: error.code,
            message: error.message,
            fileStack: error.stack,
            stack: error.payload ? error.payload.stack : error.stack,
            symbol: error.symbol
        }
        obj[i] = obj2;
    }
    obj['top'] = undefined;
    return obj;
}

if (!Array.prototype.top) {
    Array.prototype.top = function () {
        return this[this.length - 1];
    };
};
// #endregion

// #region functions

//get text of a node in sample shape
function have(stack, name){
    for(let el of stack){
        if(el.name === name){
            return true;
        }
    }
    return false;
}

function toText(ctx) {
    if (ctx !== null) {
        return ctx.getText()
    }
    return null
}

function start(ctx) {
    return {
        start: ctx.start.start,
        stop: ctx.start.stop,
        line: ctx.start.line,
        column: ctx.start.column
    }
}

function stop(ctx) {
    return {
        start: ctx.stop.start,
        stop: ctx.stop.stop,
        line: ctx.stop.line,
        column: ctx.stop.column
    }
}

function payloadCreator(ctx, stack, message) {
    let obj = {
        message,
        stack: []
    }

    for (let state of stack) {
        obj.stack.push({ name: state.name, state: [{ line: state.cursor.start.line, column: state.cursor.start.column }, { line: state.cursor.stop.line, column: state.cursor.stop.column }] });
    }
    obj.stack.push({ name: toText(ctx), state: [{ line: start(ctx).line, column: start(ctx).column }, { line: stop(ctx).line, column: stop(ctx).column }] });
    return obj
}

//fixme chain cast?
function relopType(t1, t2, ctx, stateStack) {
    if (t1 && t2) {
        //go up to find lub
        if (t1 === t2)
            return t1;
        else
            switch (t1) {
                case 'int':
                    switch(t2){
                        case 'float':
                            return 'float';
                        case 'bool':
                            return 'int';
                        case 'string':
                            return 'string';
                    }
                    break;
                case 'float':
                    switch(t2){
                        case 'int':
                            return 'float';
                        case 'bool':
                            return 'float';
                    }
                    break;
                case 'string':
                    switch(t2){
                        case 'bool':
                            return 'string';
                        case 'int':
                            return 'string';
                    }
                    break;
                case 'bool':
                    switch(t2){
                        case 'float':
                            return 'float';
                        case 'int':
                            return 'int';
                        case 'string':
                            return 'string';
                    }
                    break;

            }
        let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, stateStack, `expected ${t1} but found ${t2}`));
        errors.push(e);
        // throw e;
        return 'error'
    } else {
        throw new Error(`t1: ${t1}, t2: ${t2}; found undefined or null`);
    }
}

function cursorCreator(name, ctx) {
    return {
        name, cursor: {
            start: start(ctx),
            stop: stop(ctx)
        }
    }
}

function numExpr(ctx){
    let op1type = ctx.getChild(0).typeObj;
    let operator = toText(ctx.getChild(1));
    let op2type = ctx.getChild(2).typeObj;
    let multiOp1type = op1type.array ? op1type.array : [op1type];
    let multiOp2type = op2type.array ? op2type.array : [op2type];
    let typeObjArray = [];
    let singleType = multiOp1type.length === 1 ? multiOp1type : (multiOp2type.length === 1 ? multiOp2type : null);
    let multiType = singleType == null ? null : (singleType == multiOp1type ? multiOp2type : multiOp1type);
    if (multiOp1type.length === multiOp2type.length) {
        for (let i = 0; i < multiOp1type.length; i++) {
            typeObjArray.push({
                type: relopType(multiOp1type[i].type, multiOp2type[i].type, ctx, this.state),
                value: toText(ctx)
            })
        }
    } else if (singleType) {
        for (let i = 0; i < multiType.length; i++) {
            typeObjArray.push({
                type: relopType(multiType[i].type, singleType[0].type, ctx, this.state),
                value: toText(ctx)
            })
        }
    } else {
        let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `count of two operand is not equal. (${multiOp1type.length} vs. ${multiOp2type.length}`))
        errors.push(e);
        typeObjArray = [];
    }
    ctx.typeObj = typeObjArray.length === 0 ? {} : (typeObjArray.length === 1 ? typeObjArray[0] : { array: typeObjArray })
}

function bitExpr(ctx){
    let op1type = ctx.getChild(0).typeObj;
    let operator = toText(ctx.getChild(1));
    let op2type = ctx.getChild(2).typeObj;
    let multiOp1type = op1type.array ? op1type.array : [op1type];
    let multiOp2type = op2type.array ? op2type.array : [op2type];
    let typeObjArray = [];
    let singleType = multiOp1type.length === 1 ? multiOp1type : (multiOp2type.length === 1 ? multiOp2type : null);
    let multiType = singleType == null ? null : (singleType == multiOp1type ? multiOp2type : multiOp1type);
    if (multiOp1type.length === multiOp2type.length) {
        for (let i = 0; i < multiType.length; i++) {
            let t3 = relopType(multiOp1type[i].type, multiOp2type[i].type, ctx, this.state)
            if (relopType(t3, 'int', ctx, this.state) === 'int') {
                typeObjArray.push({
                    type: 'bool',
                    value: toText(ctx)
                })
            } else {
                let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected int but found ${t3}`))
                errors.push(e);
                typeObjArray = [];
                break;
            }
        }
    } else if (singleType) {
        for (let i = 0; i < multiType.length; i++) {
            let t3 = relopType(multiType[i].type, singleType[0].type, ctx, this.state)
            if (relopType(t3, 'int', ctx, this.state) === 'int') {
                typeObjArray.push({
                    type: 'bool',
                    value: toText(ctx)
                })
            } else {
                let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected int but found ${t3}`))
                errors.push(e);
                typeObjArray = [];
                break;
            }
        }
    }
    else {
        let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `count of two operand is not equal. (${multiOp1type.length} vs. ${multiOp2type.length}`))
        errors.push(e);
        typeObjArray = [];
    }
    ctx.typeObj = typeObjArray.length === 0 ? {} : (typeObjArray.length === 1 ? typeObjArray[0] : { array: typeObjArray })
}

function compareExpr(ctx){
    let op1type = ctx.getChild(0).typeObj;
    let operator = toText(ctx.getChild(1));
    let op2type = ctx.getChild(2).typeObj;
    let multiOp1type = op1type.array ? op1type.array : [op1type];
    let multiOp2type = op2type.array ? op2type.array : [op2type];
    let typeObjArray = [];
    let singleType = multiOp1type.length === 1 ? multiOp1type : (multiOp2type.length === 1 ? multiOp2type : null);
    let multiType = singleType == null ? null : (singleType == multiOp1type ? multiOp2type : multiOp1type);
    if (multiOp1type.length === multiOp2type.length) {
        for (let i = 0; i < multiType.length; i++) {
            relopType(multiOp1type[i].type, multiOp2type[i].type, ctx, this.state)
            typeObjArray.push({
                type: 'bool',
                value: toText(ctx)
            })
        }
    } else if (singleType) {
        for (let i = 0; i < multiType.length; i++) {
            relopType(multiType[i].type, singleType[0].type, ctx, this.state)
            typeObjArray.push({
                type: 'bool',
                value: toText(ctx)
            })
        }
    }
    else {
        let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `count of two operand is not equal. (${multiOp1type.length} vs. ${multiOp2type.length}`))
        errors.push(e);
        typeObjArray = [];
    }
    ctx.typeObj = typeObjArray.length === 0 ? {} : (typeObjArray.length === 1 ? typeObjArray[0] : { array: typeObjArray })
}

function boolExpr(ctx){
    let op1type = ctx.getChild(0).typeObj;
    let operator = toText(ctx.getChild(1));
    let op2type = ctx.getChild(2).typeObj;
    let multiOp1type = op1type.array ? op1type.array : [op1type];
    let multiOp2type = op2type.array ? op2type.array : [op2type];
    let typeObjArray = [];
    let singleType = multiOp1type.length === 1 ? multiOp1type : (multiOp2type.length === 1 ? multiOp2type : null);
    let multiType = singleType == null ? null : (singleType == multiOp1type ? multiOp2type : multiOp1type);
    if (multiOp1type.length === multiOp2type.length) {
        for (let i = 0; i < multiType.length; i++) {
            let t3 = relopType(multiOp1type[i].type, 'bool', ctx, this.state)
            let t4 = relopType(multiOp2type[i].type, 'bool', ctx, this.state)
            if (relopType(t3, t4, ctx, this.state) === 'bool') {
                typeObjArray.push({
                    type: 'bool',
                    value: toText(ctx)
                })
            } else {
                let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected bool but found ${t3} and ${t4}`))
                errors.push(e);
                typeObjArray = [];
                break;
            }
        }
    } else if (singleType) {
        for (let i = 0; i < multiType.length; i++) {
            let t3 = relopType(multiType[i].type, 'bool', ctx, this.state)
            let t4 = relopType(singleType[0].type, 'bool', ctx, this.state)
            if (relopType(t3, t4, ctx, this.state) === 'bool') {
                typeObjArray.push({
                    type: 'bool',
                    value: toText(ctx)
                })
            } else {
                let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected int but found ${t3} and ${t4}`))
                errors.push(e);
                typeObjArray = [];
                break;
            }
        }
    }
    else {
        let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `count of two operand is not equal. (${multiOp1type.length} vs. ${multiOp2type.length}`))
        errors.push(e);
        typeObjArray = [];
    }
    ctx.typeObj = typeObjArray.length === 0 ? {} : (typeObjArray.length === 1 ? typeObjArray[0] : { array: typeObjArray })

    let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, 'bool', ctx, this.state);
        let t4 = relopType(op2.typeObj.type, 'bool', ctx, this.state);
        if (relopType(t3, t4, ctx, this.state) === 'bool') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
            throw new Error(`type Error: expected int but found ${t3} in ${/* TODO: error address */null}`);
        }
}
// #endregion
class Listener extends listener {
    constructor(address) {
        super();
        //global symbol table
        this.globalTable = null;
        this.state = [];
        this.address = address;
    }


    enterProgram(ctx) {
        //define global table
        this.globalTable = new SymbolTable('program', 'root', null);
        this.state.push(cursorCreator('program', ctx));
    }

    exitProgram(ctx) {
        
        let start = this.globalTable.getSymbolInheritance('start', false, false)
        if(start === 'error'){
            let e = new SemanticStartError(payloadCreator(ctx, this.state, `start should define`))
            fs.writeFileSync('.temp/symbolTable_output.json', json(e, null, 2), 'utf-8');
        } else {
            for(let symbol of this.globalTable.symbols){
                if(symbol.getChildScope() && !symbol.getChildScope().isImplemented){
                    let e = new SemanticNotImplementedDeclaresError(payloadCreator(ctx, this.state, `${symbol.id} is declared bot has not implementation`))
                    errors.push(e);
                }
            }
            let startScope = start.getChildScope();
            if (!(start !== 'error' && start.typeObj.type === 'function' && !startScope.symbols[1].typeObj.return && startScope.symbols[0].typeObj.type === 'int' && startScope.symbols[0].typeObj.return == true)) {
                let e = new SemanticStartError(payloadCreator(ctx, this.state, `'(int)=function start()' is not defined`))
                fs.writeFileSync('.temp/symbolTable_output.json', json(e, null, 2), 'utf-8');
            } else {
                if (errors.length != 0) {
                    let outputError = errorOutput()
                    fs.writeFileSync('.temp/symbolTable_output.json', json(outputError, null, 2), 'utf-8');
                } else {
                    fs.writeFileSync('.temp/symbolTable_output.json', json(this.globalTable, null, 2), 'utf-8');
                }
            }
        }
        
        this.state.pop();
    }

    // #region program

    // #region declare

    // skip dcl grammar
    enterFt_dcl(ctx) {
        this.state.push(cursorCreator('declare', ctx));
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
        if (this.state.top().name === 'declare') {
            let typeTable = new SymbolTable(id, { type: id }, null)
            let typeSymbol = new Symbol(id, typeObj, this.globalTable.getNewOffset(), typeTable);
            let result = this.globalTable.addSymbol(typeSymbol, ctx);
            if (result === 'error') {
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `identifier ${symbol.id} has already been declared before`));
                errors.push(e);
            }
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
        let result = this.globalTable.addSymbol(functionSymbol, ctx);
        if (result === 'error') {
            let resultSymbol = this.globalTable.getSymbolInheritance(toText(ctx.ID()), false, false)
            let checkSigniture = resultSymbol.getChildScope().sameDefine(mainArgsTypes, returnableArgsTypes);
            if(checkSigniture === true){
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `identifier ${toText(ctx.ID())} has already been declared before`));
                errors.push(e);
            } else {
                this.globalTable.addSymbol(functionSymbol, true);
            }
        }

        // add return symbols to function table
        returnableArgsTypes.forEach(typeObj => {
            let argSymbol = new Symbol(typeObj.id, {
                type: typeObj.type,
                value: typeObj.value,
                return: true
            }, functionTable.getNewOffset(), null);
            let result = functionTable.addSymbol(argSymbol, ctx);
            if (result === 'error') {
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `identifier ${toText(ctx.ID())} has already been declared before`));
                errors.push(e);
            }
        });

        // add arguments symbols to function table
        mainArgsTypes.forEach(typeObj => {
            let argSymbol = new Symbol(typeObj.id, {
                type: typeObj.type,
                value: typeObj.value,
                return: false
            }, functionTable.getNewOffset(), null);
            let result = functionTable.addSymbol(argSymbol, ctx);
            if (result === 'error') {
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `identifier ${toText(ctx.ID()).id} has already been declared before`));
                errors.push(e);
            }
        });

    }

    exitArgsType(ctx) {
        if(ctx.LBRACK()){
            
        } else {
            ctx.typeObj = [ctx.type().typeObj]
        }
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
    enterVariable_def(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitVariable_def(ctx) {
        let preType = (ctx.CONST() ? 'const' : 'var');
        let type = toText(ctx.type());
        let vars = ctx.variable_val();
        let typeObj = null;
        let accmod = ctx.parentCtx.accmod;
        let table = ctx.table;

        vars.forEach(vr => {
            if(preType === 'const' && !vr.ASSIGN()){
                let e = new SemanticConstAssignError(payloadCreator(ctx, this.state, `you should define a constant with a value`));
                errors.push(e);
                return;
            }
            let id = vr.id;
            let vrType = vr.typeObj;
            vrType.preType = preType;
            if (vrType.type) {
                if (vrType.type !== type) {
                    let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected ${type} but found ${vrType.type}`))
                    errors.push(e);
                }
                typeObj = vrType;
            } else {
                typeObj = {
                    type,
                    value: undefined
                }
            }
            let childScope = null;
            if(typeObj.value && typeObj.value.includes('allocate')){
                let result = this.globalTable.getTypeInRoot(typeObj.type)
                if(result != 'error'){
                    childScope = result;
                }
            }
            let vrSymbol = new Symbol(id, typeObj, table.getNewOffset(), childScope);
            if(type === 'string' && vrType.value){
                vrSymbol.width = ((vrType.value.length) - 1) * 2;
            }
            vrSymbol.accmod = accmod;
            let result = table.addSymbol(vrSymbol, ctx);
            if (result === 'error') {
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `identifier ${symbol.id} has already been declared before`));
                errors.push(e);
            }
        });
    }

    enterVariable_val(ctx) {
        this.state.push(cursorCreator('vardef', ctx))
        ctx.table = ctx.parentCtx.table
    }

    exitVariable_val(ctx) {
        if (ctx.expr()) {
            ctx.typeObj = ctx.expr().typeObj
            ctx.alloc = ctx.expr().alloc
        } else {
            ctx.typeObj = {}
        }
        ctx.id = toText(ctx.ref());
        this.state.pop();
    }

    enterRef(ctx) {
        ctx.table = ctx.table || ctx.parentCtx.table;
        ctx.alloc = ctx.parentCtx.alloc;
        ctx.thisi = ctx.parentCtx.thisi;
        ctx.superi = ctx.parentCtx.superi;
    }

    exitRef(ctx) {
        let id = toText(ctx.ID());
        let table = ctx.table
        let symbol = table.getSymbolInheritance(id, ctx.thisi, ctx.superi);
        ctx.typeObj = {
            type: symbol.type,
            value: toText(ctx.ID())
        }
        if(this.state[this.state.length-2].name === 'forloop' && symbol === 'error' && toText(ctx.parentCtx.parentCtx.parentCtx.parentCtx.getChild(0))==='for'){
            symbol = new Symbol(id, {
                type: toText(ctx.parentCtx.parentCtx.parentCtx.parentCtx.type()),
                value: toText(ctx.parentCtx.parentCtx.parentCtx.expr())
            }, table.getNewOffset(), table)
            table.addSymbol(symbol, ctx);
        }
        if (this.state.top().name === 'vardef' && symbol != 'error') {
            let e = new SemanticReDefinedError(payloadCreator(ctx, this.state, `variable ${id} has already been declared in the current scope`))
            errors.push(e)
        } else if (this.state.top().name === 'var' && symbol === 'error') {
            let e = new SemanticNotDeclaredReferenceError(payloadCreator(ctx, this.state, `reference ${id} has not been declared`))
            errors.push(e)
        }
        if(ref.expr()){
            let arrayType = ref.expr()[0].typeObj.type
            let dim = ref.expr().length;
            let mainTypeObj = {dimension: dim, type:'list', width:ref.expr()[0].typeObj.value}
            let innerTypeObj = mainTypeObj;
            for(let ex of ref.expr()){
                if(ex.typeObj.type != arrayType){
                    let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expression in array should be as same type`));
                    errors.push(e)
                    return;
                }
                innerTypeObj.innerType = {
                    dimension: --dim,
                    type: ref.expr().top() == ex? ex.type: 'list',
                    width: ex.typeObj.value
                }
                innerTypeObj = innerTypeObj.innerType;
            }
            if(symbol != 'error'){
                if(mainTypeObj === symbol.typeObj){
                    ctx.typeObj = mainTypeObj;
                } else {
                    let e = new SemanticTypeOfPartsOfAssignError(payloadCreator(ctx, this.state, `identifier ${id} is not list`))
                    errors.push(e)
                }
            }
            ctx.typeObj = mainTypeObj;
        }
        ctx.symbol = symbol;
        if (ctx.postRef)
            ctx.postRef.table = symbol.getChildScope()
    }

    // #region expr

    enterExprUnary_op(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprUnary_op(ctx) {
        let op = ctx.getChild(1);
        let opType = op.typeObj.array ? op.typeObj.array : [op.typeObj];
        let operator = ctx.getChild(0);
        let typeObjArray = [];
        switch (toText(operator)) {
            case '-':
                ctx.typeObj = { array: opType }
                break;
            case '!':
                for (let i = 0; i < opType.length; i++) {
                    typeObjArray.push({
                        type: (relopType(opType.typeObj.type, 'bool', ctx, this.state) ? 'bool' : 'error'),
                        value: opType.typeObj.value
                    })
                }
                ctx.typeObj = { array: typeObjArray }
                break;
            case '~':
                for (let i = 0; i < opType.length; i++) {
                    typeObjArray.push({
                        type: (relopType(opType.typeObj.type, 'int', ctx, this.state) ? 'int' : 'error'),
                        value: opType.typeObj.value
                    })
                }
                ctx.typeObj = { array: typeObjArray }
                break;
        }
    }

    enterExprExprMulDivMod(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitExprExprMulDivMod(ctx) {
        numExpr(ctx);
    }

    enterExprExprAddSub(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprExprAddSub(ctx) {
        numExpr(ctx);
    }

    enterExprExprLtGt(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprExprLtGt(ctx) {
        compareExpr(ctx);
    }

    enterExprExprEqualNotequalLeGe(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprExprEqualNotequalLeGe(ctx) {
        compareExpr(ctx);
    }

    enterExprExprBitand(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprExprBitand(ctx) {
        bitExpr(ctx);
    }

    enterExprExprCaret(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprExprCaret(ctx) {
        bitExpr(ctx);
    }

    enterExprExprBitor(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprExprBitor(ctx) {
        bitExpr(ctx);
    }

    enterExprExprAnd(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprExprAnd(ctx) {
        boolExpr(ctx);
    }

    enterExprExprOr(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitExprExprOr(ctx) {
        boolExpr(ctx);
    }

    enterExprParan(ctx) {
        ctx.alloc = ctx.parentCtx.alloc
        ctx.table = ctx.parentCtx.table;
    }
    exitExprParan(ctx) {
        ctx.typeObj = ctx.getChild(0).typeObj;
        ctx.symbol = ctx.getChild(0).symbol;
        ctx.id = ctx.getChild(0).id;
        ctx.alloc = ctx.getChild(0).alloc;
    }

    enterParanNil(ctx) {
        ctx.typeObj = {
            type: 'nil',
            value: 'nil'
        }
    }
    exitParanNil(ctx) { }

    enterParanList(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitParanList(ctx) {
        let exprs = ctx.expr();
        let mainTypeObj = exprs[0].typeObj;
        let mainType = mainTypeObj.type
        let subDim = mainTypeObj.dimension;
        exprs.forEach(expr => {
            let exType = expr.typeObj.type;
            if (exType != mainType) {
                let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected ${mainType} but found ${exType}`))
                errors.push(e);
            }
        })
        ctx.typeObj = {
            dimension: subDim + 1,
            width: exprs.length,
            innerType: mainTypeObj,
            type: 'list'
        }
    }

    enterParanVar(ctx) {
        ctx.alloc = ctx.parentCtx.alloc
        ctx.table = ctx.parentCtx.table
    }
    exitParanVar(ctx) {
        ctx.typeObj = ctx.getChild(0).typeObj;
    }

    enterParanFunc(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitParanFunc(ctx) {
        ctx.typeObj = ctx.getChild(0).typeObj;
    }

    enterParanAllocate(ctx) {
        ctx.alloc = 'yes'
        ctx.table = ctx.parentCtx.table;
    }
    exitParanAllocate(ctx) {
        let allocatedType = ctx.getChild(1);
        let id = toText(allocatedType.ID());
        let result = this.globalTable.getTypeInRoot(id);
        if(result != 'error'){
            ctx.typeObj = {
                type: id,
                value: toText(ctx)
            }
        } else if (allocatedType.typeObj.type === 'function') {
            let e = new SemanticFunctionAllocatedError(payloadCreator(ctx, this.state, `function ${id} can't allocate.`))
            errors.push(e);
        }
    }

    enterParanConst(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitParanConst(ctx) {
        ctx.typeObj = ctx.getChild(0).typeObj;
        ctx.dimension = 0;
    }

    enterParanParan(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitParanParan(ctx) {
        ctx.typeObj = ctx.getChild(1).typeObj
        ctx.id = ctx.getChild(1).id
        ctx.symbol = ctx.getChild(1).symbol
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
                let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected ${listType} but found ${itemType}`))
                errors.push(e);
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

    enterDcl(ctx) {
    }
    exitDcl(ctx) {
    }

    enterDef(ctx) {
        this.state.push(cursorCreator('def', ctx))
    }
    exitDef(ctx) {/* skip */
        this.state.pop();
    }

    enterType_def(ctx) {
        this.state.push(cursorCreator('typedef', ctx));
        let typeName = toText(ctx.getChild(1));
        let typeScope = this.globalTable.getTypeInRoot(typeName);
        if(!typeScope){
            typeScope = new SymbolTable(typeName, {
                type: typeName
            }, null)
            let typeSymbol = new Symbol(typeName, {
                type: 'userType',
                value: typeName
            }, this.globalTable.getNewOffset(), typeScope)
            let result = this.globalTable.addSymbol(typeSymbol, ctx);
            if(result === 'error'){
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `type ${typeName} has been implemented before!`))
                errors.push(e);
            }
        }
        let fatherScope = null;
        if (ctx.COLON()) {
            let fatherName = toText(ctx.getChild(3));
            fatherScope = this.globalTable.getTypeInRoot(fatherName);
            if (!fatherScope) {
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `type ${fatherName} not declared.`))
                errors.push(e);
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
        ctx.accmod = ctx.access_modifier()? toText(ctx.access_modifier()): 'private';
    }
    exitComponent(ctx) {}

    enterFun_def(ctx) {
        let functionSymbol, functionTable, parentTable;
        let accmod = ctx.parentCtx.accmod;
        if (this.state.top().name === 'typedef') {
            parentTable = ctx.parentCtx.table
        } else {
            parentTable = this.globalTable;
        }
        // creation for function table, pointing to global table by parent scope

        functionSymbol = parentTable.getSymbolInheritance(toText(ctx.ID()), true, false);
        if (functionSymbol === 'error') {
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

            functionSymbol.accmod = accmod;
            // add function symbol to type table
            let result = parentTable.addSymbol(functionSymbol, ctx);
            if (result === 'error') {
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `identifier ${symbol.id} has already been declared before`));
                errors.push(e);
            }
        } else {
            functionTable = functionSymbol.getChildScope();
        }
        ctx.symbol = functionSymbol;
        ctx.table = functionTable;
        this.state.push(cursorCreator('fundef', ctx));
    }

    exitFun_def(ctx) {
        this.state.pop();
    }

    enterBlock(ctx) {
        if (this.state.top().name === 'fundef') {
            let ctxP = ctx.parentCtx;
            let returnableArgsTypes, mainArgsTypes = null;
            if (ctxP.ASSIGN()) {
                returnableArgsTypes = ctxP.getChild(1).typeObj;
                mainArgsTypes = ctxP.getChild(7).typeObj;
            } else {
                returnableArgsTypes = [];
                mainArgsTypes = ctxP.getChild(3).typeObj;
            }
            if (mainArgsTypes === undefined) {
                mainArgsTypes = [];
            }
            let functionTable = ctxP.table;

            let checkSigniture = functionTable.sameDefine(mainArgsTypes, returnableArgsTypes);
            if(checkSigniture == true){
                let e = new SemanticReDefinedError(payloadCreator(ctx, this.state, `a function same as ${functionTable.id} with this signiture is defined in this type`))
                errors.push(e);
                return;
            } else {
                functionTable = new SymbolTable(functionTable.id, functionTable.typeObj, functionTable.parentScope);
                ctx.parentCtx.symbol.addChildScope(functionTable, true);
            }

            // add return symbols to function table
            returnableArgsTypes.forEach(typeObj => {
                let argSymbol = new Symbol(typeObj.id, {
                    type: typeObj.type,
                    value: typeObj.value,
                    return: true
                }, functionTable.getNewOffset(), null);
                let result = functionTable.addSymbol(argSymbol, ctxP);
                if (result === 'error') {
                    let e = new SemanticTypeDeclaredError(payloadCreator(ctxP, this.state, `identifier ${argSymbol.id} has already been declared before`));
                    errors.push(e);
                    return;
                }
            });

            // add arguments symbols to function table
            mainArgsTypes.forEach(typeObj => {
                let argSymbol = new Symbol(typeObj.id, {
                    type: typeObj.type,
                    value: typeObj.value,
                    return: false
                }, functionTable.getNewOffset(), null);
                argSymbol.width = 4;
                let result = functionTable.addSymbol(argSymbol, ctxP);
                if (result === 'error') {
                    let e = new SemanticTypeDeclaredError(payloadCreator(ctxP, this.state, `identifier ${argSymbol.id} has already been declared before`));
                    errors.push(e);
                    return;
                }
            });
            functionTable.isImplemented = true;
            ctx.table = functionTable;
        } else if (this.state.top().name === 'forloop') {
            let blockParent = ctx.parentCtx.table;
            let type = this.state.top().name;
            let blockTable = new SymbolTable(type, {
                type,
                value: toText(ctx)
            }, blockParent)
            let forstmt = ctx.parentCtx;
            if(forstmt.assign() && forstmt.type()){
                let vars = forstmt.assign()[0].getChild(0).variable();
                if(vars.length == undefined){
                    vars = [vars];
                }
                vars.forEach(v =>{
                    let result = blockParent.getSymbolInheritance(toText(v), true, false)
                    if (result != 'error'){
                        blockTable.addSymbol(new Symbol(result.id, result.typeObj, blockTable.getNewOffset(), result.childScope), ctx);
                        blockParent.symbols.pop()
                    }
                })
            }
            let blockSymbol = new Symbol(`${type}-${blockParent.size}`, { type }, blockParent.getNewOffset(), blockTable)
            blockParent.addSymbol(blockSymbol, ctx);
            ctx.table = blockTable;


        } else {
            let blockParent = ctx.parentCtx.table;
            let type = this.state.top().name;
            let blockTable = new SymbolTable(type, {
                type,
                value: toText(ctx)
            }, blockParent)
            let blockSymbol = new Symbol(`${type}-${blockParent.size}`, { type }, blockParent.getNewOffset(), blockTable)
            blockParent.addSymbol(blockSymbol, ctx);
            ctx.table = blockTable;
        }
        this.state.push(cursorCreator('block', ctx))
    }
    exitBlock(ctx) {
        this.state.pop()
    }

    enterStmtAssign(ctx) {
        ctx.table = ctx.parentCtx.table
        this.state.push(cursorCreator('assign', ctx));
    }
    exitStmtAssign(ctx) {
        this.state.pop();
    }

    enterAssign(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitAssign(ctx) {
        let symbols = ctx.leftAssign().symbols;
        let leftTypes = ctx.leftAssign().typeObj.array? ctx.leftAssign().typeObj.array: [ctx.leftAssign().typeObj]
        let exprTypes = ctx.expr().typeObj.array? ctx.expr().typeObj.array: [ctx.expr().typeObj];
        if(leftTypes.length === exprTypes.length){
            for(let i = 0; i < leftTypes.length; i++){
                if(leftTypes[i].preType==='const'){
                    let e = new SemanticConstAssignError(payloadCreator(ctx, this.state, `you cant assign a new value to constant`))
                    errors.push(e);
                    return;
                }
                let lType = leftTypes[i].type;
                let eType = exprTypes[i].type;
                if(lType != eType){
                    let e = new SemanticTypeOfPartsOfAssignError(payloadCreator(ctx, this.state, `The type of parties of assign are not equal in ${toText(ctx)}`));
                    errors.push(e);
                    return;
                }
                symbols[i].typeObj.value = exprTypes[i].value || 'value'
                if(lType === 'string' && exprTypes[i].value){
                    let dif = symbols[i].width;
                    symbols[i].width=((exprTypes[i].value.length-1)*2);
                    dif -= symbols[i].width
                    ctx.table.size -= dif;
                }
            }
        } else {
            let e = new SemanticCountOfPartsOfAssignError(payloadCreator(ctx, this.state, `The count of parties of assign are not equal in ${toText(ctx)}`));
            errors.push(e)
        }
    }

    enterVariable(ctx) {
        let refs = ctx.ref();
        if (ctx.THIS()) {
            ctx.table = ctx.parentCtx.parentCtx.table;
            if(!have(this.state, 'typedef')){
                let e = new SemanticScopeError(payloadCreator(ctx, this.state, `this should use in type defination`))
                errors.push(e);
                return;
            }
            ctx.thisi = true;
        } else if (ctx.SUPER()) {
            ctx.table = ctx.parentCtx.parentCtx.table;
            if(!have(this.state, 'typedef')){
                let e = new SemanticScopeError(payloadCreator(ctx, this.state, `this should use in type defination`))
                errors.push(e);
                return;
            }
            ctx.superi = true;
        } else {
            if(have(this.state, 'typedef')){
                ctx.superi = true;
            }
            let funcScope = ctx.parentCtx.table;
            refs[0].table = funcScope;
        }
        for (let i = 0; i < refs.length - 1; i++) {
            refs[i].postRef = refs[i + 1];
        }
        this.state.push(cursorCreator('var', ctx))
    }
    exitVariable(ctx) {
        let refs = ctx.ref();
        let symbol = refs.top().symbol;
        ctx.symbol = symbol;
        ctx.typeObj = symbol.typeObj;
        if (ctx.handleCtx) {
            ctx.handleCtx.table = symbol.getChildScope();
        }
        this.state.pop()
    }

    enterStmtAssign(ctx) {
        this.state.push(cursorCreator('assign', ctx));
        ctx.table = ctx.parentCtx.table;
    }
    exitStmtAssign(ctx) {
        this.state.pop()
    }

    enterSingleAssign(ctx) {
        ctx.table = ctx.parentCtx.table
    }
    exitSingleAssign(ctx) {
        ctx.typeObj = ctx.variable().typeObj;
        ctx.symbols = [ctx.variable().symbol];
    }

    enterMultiAssign(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitMultiAssign(ctx) {
        let variables = ctx.variable();
        let symbols = [];
        let typeObjArray = [];
        variables.forEach(vr => {
            typeObjArray.push(vr.typeObj)
            symbols.push(vr.symbol);
        });
        ctx.symbols = symbols;
        ctx.typeObj = {array: typeObjArray};
    }

    enterStmtCond_stmt(ctx) {
        ctx.table = ctx.parentCtx.table;
        this.state.push(cursorCreator('cond_stmt', ctx))
    }
    exitStmtCond_stmt(ctx) {
        this.state.pop();
    }

    enterCond_stmtIF(ctx) {
        ctx.table = ctx.parentCtx.table;
        this.state.push(cursorCreator('if',ctx))
    }
    exitCond_stmtIF(ctx) {
        if(ctx.expr().typeObj.array){
            let e = new SemanticStmtExprError(payloadCreator(ctx, this.state, `you can't use multi value in expressions of statement statement`))
            errors.push(e)
        }
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx, this.state);
        this.state.pop();
    }

    enterElse_stmt(ctx){
        ctx.table = ctx.parentCtx.table;
        this.state.push(cursorCreator('else', ctx))
    }
    exitElse_stmt(ctx){
        this.state.pop();
    }

    enterCond_stmtSWITCH(ctx) {
        ctx.table = ctx.parentCtx.table;
        this.state.push(cursorCreator('switch',ctx))
    }

    exitCond_stmtSWITCH(ctx) {
        let valueType = ctx.variable().typeObj.type;
        relopType(valueType, 'int', ctx, this.state);
        this.state.pop();
    }

    enterLoop_stmtFOR(ctx) {
        ctx.table = ctx.parentCtx.table
        this.state.push(cursorCreator('forloop', ctx));
    }

    exitLoop_stmtFOR(ctx) {
        if(ctx.expr().typeObj.array){
            let e = new SemanticStmtExprError(payloadCreator(ctx, this.state, `you can't use multi value in expressions of statement statement`))
            errors.push(e)
        }
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx, this.state);
        this.state.pop();
    }

    enterLoop_stmtWHILE(ctx) {
        ctx.table = ctx.parentCtx.table
        this.state.push(cursorCreator('whileloop', ctx));
    }

    exitLoop_stmtWHILE(ctx) {
        if(ctx.expr().typeObj.array){
            let e = new SemanticStmtExprError(payloadCreator(ctx, this.state, `you can't use multi value in expressions of statement statement`))
            errors.push(e)
        }
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx, this.state);
        this.state.pop();
    }

    enterStmtLoop_stmt(ctx) {
        ctx.table = ctx.parentCtx.table
        this.state.push(cursorCreator('loop', ctx))
    }
    exitStmtLoop_stmt(ctx) {
        this.state.pop();
    }

    exitStmtBREAK(ctx) {
        if (this.state.top().name !== 'forloop' || this.state.top().name !== 'whileloop') {
            let e = new SemanticScopeError(payloadCreator(ctx, this.state, `break must be used inside loop`))
            errors.push(e);
        }
    }

    exitStmtCONTINUE(ctx) {
        if (this.state.top().name !== 'forloop' || this.state.top().name !== 'whileloop') {
            let e = new SemanticScopeError(payloadCreator(ctx, this.state, `continue must be used inside loop`))
            errors.push(e);
        }
    }

    enterStmtDESTRUCT(ctx) {
        ctx.table = ctx.parentCtx.table
    }
    exitStmtDESTRUCT(ctx) {
        let symbol = ctx.table.getSymbolInheritance(toText(ctx.ID()), false, false)
        if (symbol === 'error') {
            let e = new SemanticNotDeclaredReferenceError(payloadCreator(ctx, this.state, `identifier ${id} has not been declared`))
            errors.push(e);
            return;
        }
        let type = symbol.typeObj.type;
        let LBRACK = ctx.LBRACK()
        if (!LBRACK) {
            LBRACK = [];
        }
        if (ctx.LBRACK().length != symbol.typeObj.dimension) {
            let e = new SemanticDestructError(payloadCreator(ctx, this.state, `destruct can be used with same type about array`));
            errors.push(e)
            return;
        }
        let userType = this.globalTable.getTypeInRoot(id)
        if (userType.typeObj.type !== 'userType') {
            let e = new SemanticDestructError(payloadCreator(ctx, this.state, `destruct can be used with userTypes`));
            errors.push(e)
        }
    }

    enterStmtRETURN(ctx){
        ctx.table = ctx.parentCtx.table;
    }
    exitStmtRETURN(ctx){
        let symbols = ctx.table.symbols;
        symbols.forEach(s => {
            if(s.typeObj.return === true && !s.typeObj.value){
                let e = new SemanticReturnWithoutAssignError(payloadCreator(ctx, this.state, `you should assign a value to your return variables of function`))
                errors.push(e);
                return;
            }
        })
    }

    enterStmtFunc_call(ctx) {
        this.state.push(cursorCreator('func_call', ctx))
        ctx.table = ctx.parentCtx.table;
    }
    exitStmtFunc_call(ctx) {
        this.state.pop();
    }

    enterFunc_callREAD(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitFunc_callREAD(ctx) {
        let variable = ctx.getChild(2);
        let vrType = variable.typeObj;
        ctx.type = vrType;
    }

    enterFunc_callWRITE(ctx) {
        ctx.table = ctx.parentCtx.table;
    }
    exitFunc_callWRITE(ctx) {
        ctx.type = {
            type: 'int',
            value: ctx.getChild(2).typeObj.value
        }
    }

    enterHandle_call(ctx) {
        ctx.alloc = ctx.parentCtx.alloc
        ctx.table = ctx.table || ctx.parentCtx.table;
        let vr = ctx.parentCtx.alloc==='yes'? {}:( ctx.parentCtx.variable()? ctx.parentCtx.variable(): {});
        ctx.thisi = vr.thisi;
        ctx.superi = vr.superi;
    }
    exitHandle_call(ctx) {
        if (ctx.table == undefined)
            throw new Error();
        let params = [];
        if (ctx.params()) {
            params = ctx.params().expr()
        }
        let id = toText(ctx.ID())
        let table = ctx.table;
        let scope;
        let symbol = table.getSymbolInheritance(id, ctx.superi, ctx.thisi);
        if (symbol === 'error') {
            scope = this.globalTable.getTypeInRoot(toText(ctx.ID()))
            if (scope === 'error') {
                let e = new SemanticNotDeclaredFunctionError(payloadCreator(ctx, this.state, `function ${id} have been not declared in this scope (in scope of ${table.id})`))
                errors.push(e);
                symbol = new Symbol(id, {}, -1, { symbols: [] })
                scope = { symbols: [] };
            }
        } else {
            scope = symbol.getChildScope();
        }
        let typeObjArray = [];
        let i = 0;
        scope.symbols.forEach(s => {
            let symbolType = s.typeObj.type;
            ctx.typeObj = {}
            if (i == params.length) {
                return;
            }
            let paramType = params[i].typeObj.type;
            if (s.typeObj.return == false) {
                if (symbolType != paramType) {
                    let e = new SemanticNotDeclaredFunctionError(payloadCreator(ctx, this.state, `function ${id} have been not declared in this scope with this signiture (in scope of ${table.id})`))
                    errors.push(e)
                }
                i += 1;
            } else if (s.typeObj.return === undefined && i === params.length) {
                return;
            } else if (s.typeObj.return == true) {
                typeObjArray.push(s.typeObj)
            }
            else {
                let e = new SemanticNotDeclaredFunctionError(payloadCreator(ctx, this.state, `function ${id} have been not declared in this scope with this signiture (in scope of ${table.id})`))
                errors.push(e)
                return;
            }
        });
        ctx.symbol = symbol;
        ctx.typeObj = typeObjArray.length === 0 ? {} : (typeObjArray.length === 1 ? typeObjArray[0] : { array: typeObjArray })
    }

    

    enterParams(ctx) {
        ctx.alloc = ctx.parentCtx.alloc
        ctx.table = ctx.parentCtx.table;
    }
    exitParams(ctx) {

    }

    enterFunc_callVariable(ctx) {
        ctx.table = ctx.parentCtx.table;
        if (ctx.variable()) {
            ctx.variable().handleCtx = ctx.handle_call();
        }
        this.state.push(cursorCreator('funccall', ctx))
    }
    exitFunc_callVariable(ctx) {
        ctx.typeObj = ctx.handle_call().typeObj;
        this.state.pop();
    }
    // #region funcs and stmts

    // #endregion

    // #endregion def

    // #endregion
}

module.exports = Listener;
