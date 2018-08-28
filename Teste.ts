declare function require(msg : string): any;
var readline = require('readline-sync');

let a: string = readline.question(); //raw_input , o usuario escrever algo da tela 

let b: string= readline.question ("digite seu nome:");
console.log(b);

const c = 10; // variavel constante

let x: number = 42; //declarar variavel 
console.log(x); //imprimir informação : tsc nome do arqivo, node nome do arquivo. 


let l1: number[] = [1,2,3,4]; //fazer uma lista declarada number, Array<string> lista tbm

// and && or || not ! 


let d : number = 6;
let e : number = 8;
let f : number = (d == e) ? 7 : 5; // se a for igual a b atribua 7 se não 5 (if e else) 


let q : number = 6; // if e else 
let w : number = 8;
if(q==w){
    f=7;
} else if (q>w){
    f=6;
} else {
    f=5; 
} 


switch{  //estrura de condição
    case 1: // condição 1 
        console.log("A");
        break,
    case 2:
        console.log("B");
        break,
    case 3:
        console.log("C");
        break,
}

let i: number = 0;
while(i<10){
    console.log(i);
    i++
}