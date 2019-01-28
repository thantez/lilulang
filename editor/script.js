function get(selector, root = document) {
  return root.querySelector(selector);
}

// const COLORS = {
//   'allocate': 'yellow',
//   'bool': 'yellow',
//   'break': 'yellow',
//   'case': 'yellow',
//   'const': 'yellow',
//   'continue': 'yellow',
//   'declare': 'yellow',
//   'default': 'yellow',
//   'destruct': 'yellow',
//   'else': 'yellow',
//   'false': 'yellow',
//   'function': 'yellow',
//   'float': 'yellow',
//   'for': 'yellow',
//   'if': 'yellow',
//   'int': 'yellow',
//   'nil': 'yellow',
//   'of': 'yellow',
//   'private': 'yellow',
//   'protected': 'yellow',
//   'public': 'yellow',
//   'read': 'yellow',
//   'return': 'yellow',
//   'string': 'yellow',
//   'super': 'yellow',
//   'switch': 'yellow',
//   'this': 'yellow',
//   'true': 'yellow',
//   'type': 'yellow',
//   'while': 'yellow',
//   'write': 'yellow',
// };

const COLORS = {
  'allocate': 'deepskyblue',
  'declare': 'deepskyblue',
  'destruct': 'deepskyblue',
  'function': 'deepskyblue',
  'type': 'deepskyblue',

  'bool': 'orange',
  'float': 'orange',
  'int': 'orange',
  'string': 'orange',

  'break': 'green',
  'continue': 'green',
  'for': 'green',
  'while': 'green',

  'case': 'pink',
  'default': 'pink',
  'switch': 'pink',

  'const': 'mediumorchid',

  'if': 'red',
  'else': 'red',

  'false': 'yellow',
  'true': 'yellow',

  'nil': 'white',
  'of': 'white',

  'private': 'darkturquoise',
  'protected': 'darkturquoise',
  'public': 'darkturquoise',

  'read': 'peru',
  'write': 'peru',

  'return': 'mediumspringgreen',

  'super': 'purple',
  'this': 'purple',
};





const editorInput = get('#editor-input');
const editorPres = get('#editor-pres');
const compileBtn = get('#compile-btn');
const output = get('#output');
const lineNumbers = get('#line-numbers');

let codeText = `declare {
  start();
  myType;
  fatherType;
  float a =  'ascas';
}
type fatherType{
  float b = 3;
  string s = 'salam return salmareturn';
  (int a) = function add(float c){
  }
}
type myType : fatherType{
 int a = 2;
}
(int a) = function start() {}`;

editorInput.value = codeText;
updateCodePres(codeText);


let autoCompileTimeout;


editorInput.addEventListener('input', e => {
  clearTimeout(autoCompileTimeout);
  updateCodePres(e.target.value);
  autoCompileTimeout = setTimeout(handleCompile, 1000);
})

editorInput.addEventListener('scroll', e => {
  editorPres.scrollTop = e.target.scrollTop;
  lineNumbers.scrollTop = e.target.scrollTop;
})

compileBtn.addEventListener('click', handleCompile)

function handleCompile() {
  output.innerHTML = '';

  console.log(codeText);

  // get('span:nth-child(2)',editorPres).style.background = 'red'

  for (let e in response) {
    const err = response[e];


    const line = err.stack[err.stack.length - 1];
    const lineNumber = line.state[0]
    const lineNode = get(`.line:nth-child(${lineNumber.line})`, editorPres);
    lineNode.style.background = 'red';

    const msg = `Code: ${err.code}
Message: ${err.message}\n\n`;

    output.innerHTML += msg;
  }
}


function updateCodePres(text) {
  lineNumbers.innerHTML = '';
  codeText = text;

  for (let key in COLORS) {
    const regex = new RegExp(key, 'g');
    codeText = codeText.replace(regex, `<span style="color: ${COLORS[key]}">${key}</span>`);
  }

  // console.log(codeText.match(/'(.*?)'/g));
  // // codeText = codeText.replace(/'(.*?)'/g, '<span style="color: red !important;">$&</span>');
  // codeText = codeText.replace(/'(.*?)'/g, (match, p1) => {
  //   let p = p1;
  //   p = p.replace(/style="(.*)?"/g, 'style="color: blue"');
  //   return p;
  // });

  editorPres.innerHTML = codeText
    .split("\n")
    .map((line, index) => {
      lineNumbers.innerHTML += `${index+1}\n`;
      return `<span class="line">${line}</span>`;
    })
    .join("\n");
}



const response = {
  "0": {
    "code": "E_SEMANTIC_OPERANDTYPEMISMATCH",
    "message": "expected float but found string",
    "fileStack": "Error: expected float but found string\n    at vars.forEach.vr (/home/sajad/Projects/Lulu_ph2/lilulang/Listener.js:344:27)\n    at Array.forEach (<anonymous>)\n    at Listener.exitVariable_def (/home/sajad/Projects/Lulu_ph2/lilulang/Listener.js:338:14)\n    at Variable_defContext.exitRule (/home/sajad/Projects/Lulu_ph2/lilulang/lib/lilu_grammarParser.js:1212:18)\n    at ParseTreeWalker.exitRule (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:216:6)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:199:8)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:197:9)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:197:9)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:197:9)\n    at Object.<anonymous> (/home/sajad/Projects/Lulu_ph2/lilulang/index.js:40:43)",
    "stack": [
      {
        "name": "program",
        "state": [
          {
            "line": 1,
            "column": 0
          },
          {
            "line": 15,
            "column": 28
          }
        ]
      },
      {
        "name": "declare",
        "state": [
          {
            "line": 1,
            "column": 0
          },
          {
            "line": 6,
            "column": 0
          }
        ]
      },
      {
        "name": "floata='ascas';",
        "state": [
          {
            "line": 5,
            "column": 4
          },
          {
            "line": 5,
            "column": 22
          }
        ]
      }
    ],
    "symbol": ""
  },
  "1": {
    "code": "E_SEMANTIC_OPERANDTYPEMISMATCH",
    "message": "expected float but found int",
    "fileStack": "Error: expected float but found int\n    at vars.forEach.vr (/home/sajad/Projects/Lulu_ph2/lilulang/Listener.js:344:27)\n    at Array.forEach (<anonymous>)\n    at Listener.exitVariable_def (/home/sajad/Projects/Lulu_ph2/lilulang/Listener.js:338:14)\n    at Variable_defContext.exitRule (/home/sajad/Projects/Lulu_ph2/lilulang/lib/lilu_grammarParser.js:1212:18)\n    at ParseTreeWalker.exitRule (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:216:6)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:199:8)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:197:9)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:197:9)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:197:9)\n    at ParseTreeWalker.walk (/home/sajad/Projects/Lulu_ph2/lilulang/node_modules/antlr4/tree/Tree.js:197:9)",
    "stack": [
      {
        "name": "program",
        "state": [
          {
            "line": 1,
            "column": 0
          },
          {
            "line": 15,
            "column": 28
          }
        ]
      },
      {
        "name": "def",
        "state": [
          {
            "line": 7,
            "column": 0
          },
          {
            "line": 15,
            "column": 28
          }
        ]
      },
      {
        "name": "typedef",
        "state": [
          {
            "line": 7,
            "column": 0
          },
          {
            "line": 11,
            "column": 0
          }
        ]
      },
      {
        "name": "floatb=3;",
        "state": [
          {
            "line": 8,
            "column": 4
          },
          {
            "line": 8,
            "column": 15
          }
        ]
      }
    ],
    "symbol": ""
  }
};