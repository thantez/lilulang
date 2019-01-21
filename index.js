const antlr4 = require('antlr4')
const liluLexer = require('./lib/lilu_grammarLexer')
const liluParser = require('./lib/lilu_grammarParser')
const Listener = require('./Listener')
const fs = require('fs')
const input = fs.readFileSync('tests/type_test.ll',{encoding: 'utf8'})

const chars = new antlr4.InputStream(input)
const lexer = new liluLexer.lilu_grammarLexer(chars)
const tokens = new antlr4.CommonTokenStream(lexer)
const parser = new liluParser.lilu_grammarParser(tokens)

let tree = parser.program();   
let listener = new Listener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);