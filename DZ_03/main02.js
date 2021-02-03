/*
Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

let rez = 1;
function factorialRecursion(n){
    if(n === 0) {
        return console.log(rez);
    };
    rez *= n;
    factorialRecursion(--n);
}
factorialRecursion(6);
 */

/* Найти сумму цифр числа которые кратны двум 

let rez = 0;
function sumNumRecursion(n){
    if(n === 0){
        return console.log(rez);
    } else if(n % 2 === 0) {
        rez += n;
        sumNumRecursion(--n);
    } else {
        sumNumRecursion(--n)
    };
};
sumNumRecursion(8);
*/
/*Найти минимальное число которое больше 300 и нацело делиться на 17 

let rez = 0;
function minNumRecursion(n){
    if (n % 17 === 0) {
        return console.log(rez = n);
    } 
    minNumRecursion(++n);
}
minNumRecursion(1);
*/
/* Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа. 

function maxNumber(num1, num2){
    let rez = 0;
    for(let i = num1; i <= num1 && i <= num2 ; i--) {
        if(num1 % i === 0 && num2 % i === 0) {
            rez = i;
            break;
        }
    }
    return rez;
};
console.log(maxNumber(54,7554));
*/
let num1 = 5;
let num2 = 51515;

function maxNumRecursion(rez){
    if(num1 % rez === 0 && num2 % rez === 0){
        return console.log(rez);
    }
    maxNumRecursion(++rez);
}
maxNumRecursion(2)