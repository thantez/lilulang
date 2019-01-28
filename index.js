const antlr4 = require('antlr4')
const liluLexer = require('./lib/lilu_grammarLexer')
const liluParser = require('./lib/lilu_grammarParser')
const Listener = require('./Listener')
const fs = require('fs')
const config = require('./.config.json')
const input = fs.readFileSync(`${config.testDir}/${config.testFile}.${config.fileType}`,{encoding: 'utf8'})
const ErrorListener = require('./ErrorListener');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.json())

app.get('/', (req, res) =>{
   res.sendFile('index.html')
})

app.post('/', (req, res) => {
   console.log(req.body.text)
   let chars = new antlr4.InputStream(req.body.text)
   let lexer = new liluLexer.lilu_grammarLexer(chars)

   let errorListener = new ErrorListener();

   lexer.removeErrorListeners(); // Remove default ConsoleErrorListener
   lexer.addErrorListener(errorListener); 

   let tokens = new antlr4.CommonTokenStream(lexer)
   let parser = new liluParser.lilu_grammarParser(tokens)
   
   parser.removeErrorListeners(); // Remove default ConsoleErrorListener
   parser.addErrorListener(errorListener); // Add custom error listener

   try{
      let listener = new Listener();
      let tree = parser.program();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
   }
   catch (e){
      console.error(e)
      fs.writeFileSync('./.temp/symbolTable_output.json', JSON.stringify(e))
   }
   let output = JSON.parse(fs.readFileSync('./.temp/symbolTable_output.json'))

   return res.json(output);
})

//app.post('/', (req, res) => {
   //let body=req.body.text;
   
   let chars = new antlr4.InputStream(input)
   let lexer = new liluLexer.lilu_grammarLexer(chars)

   let errorListener = new ErrorListener();

   lexer.removeErrorListeners(); // Remove default ConsoleErrorListener
   lexer.addErrorListener(errorListener); 

   let tokens = new antlr4.CommonTokenStream(lexer)
   let parser = new liluParser.lilu_grammarParser(tokens)
   
   parser.removeErrorListeners(); // Remove default ConsoleErrorListener
   parser.addErrorListener(errorListener); // Add custom error listener

   try{
      let listener = new Listener();
      let tree = parser.program();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
   }
   catch (e){
      console.error(e)
      fs.writeFileSync('./.temp/symbolTable_output.json', JSON.stringify(e))
   }
   let output = JSON.parse(fs.readFileSync('./.temp/symbolTable_output.json'))

   //res.json(output);
//})

app.listen(8080);