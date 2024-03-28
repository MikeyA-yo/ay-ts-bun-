#!/usr/bin/env bun
const out = __dirname+'/out.js';
const programName = Bun.argv[2];
const bunfile = Bun.file(programName);
const program = await bunfile.text();
let code:string;

// this function breaks the whole program into lines
function parse(codes:any): string[]{
    return codes.split('\n');
}  
// thus function breaks a line into words by white space
function tokenize(code:string): string[]{
   return code.split(/\s+/);
}
// this function breaks a quote statement apart
function parseStatement(statement: any): string[] {
    const regex =/"([^"]+)"|(\w+)|([=\[\]\(\){}÷*+\-])/g ; // Matches either a quoted string or a word /("[^"]+"|\w+)/g
    const matches = statement.match(regex);
    return matches;
  }
function generateCode(program:any){
     code = "";
     let lines = parse(program)
     let newLines = lines.filter(line => {
       return line !== '\r'
     })
     if(newLines[0].includes('#')){
        newLines[0] = ''
     }
    
    newLines.forEach(el => {
        el.includes('}') ? el += '' : el.includes(';') ? el += '': el.includes('}') ? el += '' : el += ';' ;
        const values = tokenize(el);
        values[values.length] = '\n';
        for(let i = 0; i < values.length; i++){
            if(values[i] == 'l'){
                values[i] = 'let'
            }
            if(values[i] == 'print'){
                values[i] = `console.log(${values[i + 1]})`
                values[i + 1] = ' '
            }
            if ( values[i] == 'f'){
                values[i] = 'function'
            }
        }
        // switch case will only be used for error handling
        switch(values[0]){
            case 'l':
                values[0] = 'let';
                
                break;
            case 'print':
                values[0] = `console.log(${values[1]});`;
                values[1] = ' '
                break; 
            case 'f':
                values[0] = `function`;
                break;    
            default:
                values[0] = values[0];    
        }
        code += values.join(" ");
    })
    return code;
}
const math = `import { rand, round, PI, floor, exp, degToRad, radToDeg } from './math';\n`;
const utils = `import { print, timer, Day, interval, read, write, appendFile, dirname } from './utils';\n`
const m = './objects'+'/'+'AY'
const AY = `import {AY} from '${m}'\n`
const exec= ` ${AY} ${math} ${utils}  try {\n${generateCode(program)}}catch(e){\n console.error(e.message);\n}`
await Bun.write(out, exec );
require(out);

interface ASTNode{
    kind:string;
}
interface VariableDeclarationNode extends ASTNode {
    kind: "VariableDeclaration";
    identifier: string;
    expression: ExpressionNode;
  }
  
  // Represents an expression (currently just a string literal)
  interface ExpressionNode extends ASTNode {
    kind: "StringLiteral";
    value: string;
  }
  
  // Represents a print statement (print + expression)
  interface PrintStatementNode extends ASTNode {
    kind: "PrintStatement";
    expression: ExpressionNode;
  }
