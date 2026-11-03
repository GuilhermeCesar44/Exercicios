function ParImpar(numero) {
    if(numero % 2 === 0) {
        console.log("Par")
    } else{
        console.log("Impar")
    }
}

ParImpar(15)


function MaiorDois(a,b) {
    if(a > b) {
        console.log(a)
    } else if (a < b) {console.log(b) }
    else{console.log("São iguais")}
}
MaiorDois(9,12)

function contador10 () {
    for(let i = 0;i <10; i++){
            console.log(i)
    } 
}
contador10(10)

function tabuada(numero) {
    for(let i = 1;i <= 10; i++){
        console.log(numero, "X", i, "=", numero * i)
    }
}
tabuada(7)

function PosiNega(numero) {
    if(numero < 0) {
        console.log("Negativo")
    } else if (  numero > 0) {
        console.log("Positivo")
    } else {
        console.log("Zero")
    }
}
PosiNega(0)