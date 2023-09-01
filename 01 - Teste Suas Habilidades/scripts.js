const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// mudar a ordem dos itens noa array
const arrayInverso = frutas.reverse().join(", ");

console.log(arrayInverso);

//remover o primeiro item
frutas.shift();
console.log(frutas);

// remover o ultimo

frutas.pop();
console.log(frutas);

// adicionar melão
frutas.push("Melão");
console.log(frutas);

