let num = 15;
let num2 = 2;

console.log("Primeiro Numero: "+num);
console.log("Segundo Numero: "+num2);
console.log("\n")

function Soma(){
    console.log("Soma: "+(num+num2));
}

Soma();

function Sub(){
    console.log("Subtracao: "+(num-num2));
}

Sub();

function Div(){
    console.log("Divisao: "+(num/num2));
}

Div();

function Multi(){
    console.log("Multiplicacao: "+(num*num2));
}

Multi();

function Par(){
    if(num%2 != 0){
        console.log("É Impar")
    }else {
        console.log("É Par")
    }
}

Par();

