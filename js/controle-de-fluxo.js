// altura * altura / peso

var altura = 1.62;
var peso = 70;

var imc = peso / (altura * altura);
console.log(imc)

if (imc >= 45) {
    console.log("Acima do peso")
} else if (peso >= 30 || peso < 45) {
    console.log("Gordinho")
} else if (peso >= 25 || peso < 30) {
    console.log("Abaixo do peso")
} else {
    console.log("Morreu de fome")
}


// TABELA VERDADE

// OPERATOR &&
// (1 > 2) && (2 > 3)  F
// (2 >= 2) && (2 < 3) V
// (2 >= 2) && (2 > 3) F


// OPERATOR ||
// (1 > 2) || (2 > 3) F
// (1 >= 1) || ( 2 < 3) V
// (1 > 2) || (2 < 4) V

const data = new Date();
console.log(data.getDay())


switch(data.getDay()) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda Feira');
        break;
    case 2:
        console.log('Terça Feira');
        break;
    case 3:
        console.log('Quarta Feira');
        break;
    case 4:
        console.log('Quinta Feira');
        break;
    case 5:
        console.log('Sexta Feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
    console.log('Esse número não faz parte da semana')
}



