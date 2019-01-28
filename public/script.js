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

let rawCodeText = `(int x, int z)=function twoPower(int a){
  const int c = 2;
  if a == 1 {
     x = 1;
  } else {
     a = a-1;
     (x, z) = twoPower(a)*(2);
  }
  return;
}

(int a) = function start() {
  int x = 2;
  int b;
  read(x);
  (a, b) = twoPower(x);
  write(a);
  return;
}
`;
let presCodeText = '';

editorInput.value = rawCodeText;
updateCodePres(rawCodeText);


editorInput.addEventListener('input', e => {
  updateCodePres(e.target.value);
})

editorInput.addEventListener('scroll', e => {
  editorPres.scrollTop = e.target.scrollTop;
  lineNumbers.scrollTop = e.target.scrollTop;
})

compileBtn.addEventListener('click', handleCompile)

function handleCompile() {
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: rawCodeText
    })
  }).then(res => res.json())
    .then(resolveCompileResult);
}

function resolveCompileResult(result) {
  console.log(result);

  output.innerHTML = '';

  if (result.id) {
    // Successful compile
    output.innerHTML = "Successful compile! (Display Symbol Table?)"
  } else if (result.code) {
    // Generic Syntax Error
    output.innerHTML = `${result.code}: ${result.payload.message}`;

    if (result.payload.line && result.payload.column) {
      output.innerHTML += ` @ ${result.payload.line}:${result.payload.column}`;

      const line = get(`.line:nth-child(${result.payload.line})`, editorPres);
      line.classList.add('error-line');
    }
  } else if (result["0"]) {
    // Compile errors
    for (let key in result) {
      const error = result[key];

      output.innerHTML += `${error.code}: ${error.message}`;

      const topError = error.stack[error.stack.length - 1];
      output.innerHTML += ` @ ${topError.state[0].line}:${topError.state[0].column}\n\n`;

      const line = get(`.line:nth-child(${topError.state[0].line})`, editorPres);
      line.classList.add('error-line');
    }
  } else {
    // Failed to comiple, result = {}
    output.innerHTML = "Ops! Something went wrong in compilation process... :("
  }
}


function updateCodePres(text) {
  lineNumbers.innerHTML = '';

  rawCodeText = text;
  presCodeText = text;

  for (let key in COLORS) {
    const regex = new RegExp(key, 'g');
    presCodeText = presCodeText.replace(regex, `<span style="color: ${COLORS[key]}">${key}</span>`);
  }

  // console.log(presCodeText.match(/'(.*?)'/g));
  // // presCodeText = presCodeText.replace(/'(.*?)'/g, '<span style="color: red !important;">$&</span>');
  // presCodeText = presCodeText.replace(/'(.*?)'/g, (match, p1) => {
  //   let p = p1;
  //   p = p.replace(/style="(.*)?"/g, 'style="color: blue"');
  //   return p;
  // });

  editorPres.innerHTML = presCodeText
    .split("\n")
    .map((line, index) => {
      lineNumbers.innerHTML += `${index + 1}\n`;
      return `<span class="line">${line}</span>`;
    })
    .join("\n");
}

function get(selector, root = document) {
  return root.querySelector(selector);
}