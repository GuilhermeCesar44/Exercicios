function ClassIdade(idade) {
 
    if(idade < 0) {
        console.log("idade invalida")
    } else if (idade <= 13) {
        console.log("Criança")
    } else if (idade <= 18) { 
        console.log("Adolescente")
    } else if (idade <= 59) {
        console.log("Adulto")
    }  else {
        console.log("Idoso")
    }
}
ClassIdade(15)

const nume2 = [12, 2, 4, 5, 8, 34, 64, 99, 0];
const filtro = nume2.filter(numero => numero > 9);
console.log(filtro)



function MediaNota() {

    const valor1 = 5
    const valor2 = 8
    const valor3 = 4
    

    const notaF =  (valor1 + valor2 + valor3) / 3   

    if(notaF >= 7) {
        console.log("APROVADO!!")
    } else {
        console.log("Reprovado!")
    }

    return notaF
}

console.log(MediaNota())

function somarInfi() {
    for(let i = 0;i <10; i++){
        console.log(i)
    } 
}