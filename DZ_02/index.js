/* Переменная содержит в себе строку. Вывести строку в обратном порядке.
let someText = "Hi, my name is Andrey.";
let textLenght = 0;
let rez = [];

for(let i = 0; i < someText.length; i++) {
    textLenght = i;
};
for(let j = textLenght; j >= 0; j--){
    rez += someText[j];
}

console.log(rez);
*/
/*
Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

 let number = 8;
 let factorial = 1;

 for(let i = 0; i < number; i++){
     factorial *= number-i;
 };
 console.log(factorial);
  */
/* Дано число - вывести первые N делителей этого числа нацело. 

let number = 200;
let j = 0;
for(let i = 0; i < number; i++){  
    if(number % i === 0 && j < 2) {
        console.log(i);
        j++;
    }
}
*/

/* Найти сумму цифр числа которые кратны двум 
let num = 5645479;
let rez = 0;

let sameText = String(num);
for(let i = 0; i <= sameText.length; i++){
    let sameNumber = Number(sameText[i]);
    if(sameNumber % 2 === 0) {
        rez += sameNumber;
    };
}
console.log(rez);

*/

/*Найти минимальное число которое больше 300 и нацело делиться на 17 
let number = 0;
for(let i = 300; i % 17; i++) {
    number = i + 1;
}
console.log(number);
*/

/* Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа. 
*/
let a=15;
let b=20;
let rez = 0;

for(let i = a; i <= a && i <= b ; i--) {
    if(a%i === 0 && b%i === 0) {
        rez = i;
        break;
    }
}
console.log(rez);

