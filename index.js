const antlr4 = require('antlr4')
const liluLexer = require('./lib/lilu_grammarLexer')
const liluParser = require('./lib/lilu_grammarParser')
const fs = require('fs')
const input = fs.readFileSync('./tests/syntax_test.ll',{encoding: 'utf8'})

const chars = new antlr4.InputStream(input)
const lexer = new liluLexer.lilu_grammarLexer(chars)
const tokens = new antlr4.CommonTokenStream(lexer)
const parser = new liluParser.lilu_grammarParser(tokens)
const tree = parser.program()

console.log(tree.toStringTree(parser.ruleNames))