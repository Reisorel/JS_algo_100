// 9.returnLengthofArsPassed.js

function argumentsLength(...args) {
  return args.length;
}


const arguments = [1, 2, 3, 4, 5];
console.log(argumentsLength(arguments)); // 5


// La fonction argumentLenght prend en paramètre un nombre variable d'argument
// Elle utilise le rest oprator pour récupérer tous les arguments
// Elle retourne la longueur du tableau d'arguments
