const antlr4 = require('antlr4')
const liluLexer = require('./lib/lilu_grammarLexer')
const liluParser = require('./lib/lilu_grammarParser')
const Listener = require('./Listener')
const fs = require('fs')
const config = require('./.config.json')
const input = fs.readFileSync(`${config.testDir}/${config.testFile}.${config.fileType}`,{encoding: 'utf8'})
const ErrorListener = require('./ErrorListener');

let chars = new antlr4.InputStream(input)
let lexer = new liluLexer.lilu_grammarLexer(chars)
let tokens = new antlr4.CommonTokenStream(lexer)
let parser = new liluParser.lilu_grammarParser(tokens)
let errorListener = new ErrorListener();

parser.removeErrorListeners(); // Remove default ConsoleErrorListener
parser.addErrorListener(errorListener); // Add custom error listener

try{
   let listener = new Listener();
   let tree = parser.program();
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
}
catch (e){
   console.error(e)
}