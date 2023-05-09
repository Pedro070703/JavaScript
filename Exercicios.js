
//1)
// function NumerosPares() {
//     for (let i = 0; i <= 100; i++) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
  

//   NumerosPares();
  
//2)
// function Soma(array) {
//     let soma = 0;
//     for (let i = 0; i < array.length; i++) {
//       soma += array[i];
//     }
//     return soma;
//   }

// const numeros = [2, 4, 6, 8];
// const resultado = Soma(numeros);
// console.log(`Soma: ${resultado}`); 


//3)
// function removeNegativos(array) {
//     let positivos = [];
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] >= 0) {
//         positivos.push(array[i]);
//       }
//     }
//     return positivos;
//   }

// const numeros = [-1, 1, -2, 2, -3, 3];
// const resultado = removeNegativos(numeros);
// console.log(`Positivos: ${resultado}`);

//4)
// function multiplicarPorDois(array) {
//     const novoArray = [];
//     for (let i = 0; i < array.length; i++) {
//       novoArray.push(array[i] * 2);
//     }
//     return novoArray;
//   }

// const numeros = [1, 2, 3, 4, 5];
// const novoArray = multiplicarPorDois(numeros);
// console.log(novoArray); 



//Bonus
// function soma(num1, num2) {
//     return new Promise((resolve, reject) => {
//       const resultado = num1 + num2;
//       if (resultado % 2 === 0) {
//         resolve("Valor é par");
//       } else {
//         reject("Valor é impar");
//       }
//     });
//   }
//   soma(1, 2).then(res => {
//     console.log(res); 
//   }).catch(err => {
//     console.log(err); 
//   })
  
//   soma(2, 2).then(res => {
//     console.log(res); 
//   }).catch(err => {
//     console.log(err);
//   });
    