/* Переменная хранит процент кредита, вторая переменная хранит объем тела кредита, третья переменная хранит длительность кредитного договора в годах. Написать скрипт который вычислит:
Сколько процентов заплатит клиент за все время
Сколько процентов заплатит клиент за один календарный год
Какое общее количество денежных средств клиента банка выплатит за все года


let rez = 0;

function creditPercYear(percentMonth) {
    rez = percentMonth * 12;
    return rez +"% заплатит клиент за один календарный год";
};
function creditPercAll(creditTime){
    rez = creditTime * rez;
    return rez +"% заплатит клиент за все время";
};
function creditMoneyAll(credBody){
    rez = credBody * rez;
    return rez + "$ клиент банка выплатит за все время кредита";
};

console.log(creditPercYear(2));
console.log(creditPercAll(6));
console.log(creditMoneyAll(2000));
 */

/* Переменная хранит в себе единицу измерения одно из возможных значений (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число. В зависимости от того какая единица измерения написать скрипт, который выводит количество байт. Для вычисления принимает счет что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения.


function answerByti(unity, num){
    let rez = 0;
    if(unity === 'KB') {
        rez = 1024 * num;
   } else if(unity === 'MB') {
        rez = 1048576 * num;
   } else if(unity === 'GB') {
        rez = 1073741824 * num;
   } else {
       rez = 1 * num;
   }
   return rez + ' количество байт в ' + num +' '+ unity;
};
console.log(answerByti('GB',20))
*/


/*
Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том, что число является нулевым либо положительным либо отрицательным.


function numberValue(number){
    if(number === 0){
        return number +' число является нулевым!';
    } else if(number > 0){
        return number +' число является положительным!';
    } else if(number < 0){
        return number +' число является отрицательным!';
    }
    else {
        return number + ' :( введите число!!!';
    };
};
console.log(numberValue());
*/

/*  Переменная хранит в себе значение от 0 до 9. Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами.

function answerNumber(number){
    if (number === 0) {
        return 'ноль';
    } else if (number === 1) {
        return 'один';
    } else if (number === 2) {
        return 'два';
    } else if (number === 3) {
        return 'три';
    } else if (number === 4) {
        return 'четыри';
    } else if (number === 5) {
        return 'пять';
    } else if (number === 6) {
        return 'шесть';
    } else if (number === 7) {
        return 'семь';
    } else if (number === 8) {
        return 'восемь';
    } else if (number === 9) {
        return 'девять';
    } else {
        return 'введите цифру от 0 до 9';
    }
};
console.log(answerNumber(9));
*/

/* Переменная содержит в себе строку. Вывести строку в обратном порядке.

function textBackLetters (text){
    let textLenght = 0;
    let rez = "";
    for(let i = 0; i < text.length; i++) {
        textLenght = i;
    };
    for(let j = textLenght; j >= 0; j--){
        rez += text[j];
    }
    return rez;
}
console.log(textBackLetters("Hi. My name is Andriy!"));
*/
/*
Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

 function factorialNumber(number){
    let rez = 1;
    for(let i = 0; i < number; i++){
        rez *= number-i;
    };
    return rez + " is factorial of Number "+ number;
 }
 console.log(factorialNumber(4));
 */
/* Дано число - вывести первые N делителей этого числа нацело. 
*/
function ferstDivisor(num, someNum){
    let j = 0;
    for(let i = 2; i < num; i++){  
        if(num % i === 0 && j < 2) {
           console.log(i);
             j++;
        }
    }
};
ferstDivisor(15);


/* Найти сумму цифр числа которые кратны двум

function sumNumber(num){
    let rez = 0;
    let sameText = String(num);
    for(let i = 0; i <= sameText.length; i++){
        let sameNumber = Number(sameText[i]);
        if(sameNumber % 2 === 0) {
            rez += sameNumber;
        };
    }
    return rez;
};
console.log(sumNumber(4343))
*/
/*Найти минимальное число которое больше 300 и нацело делиться на 17 

function minNumber(num, proc){
    let rez  = 0;
    for(let i = num; i % proc; i++){
        rez = i + 1;
    }
    return rez;
};
console.log(minNumber(300, 17));
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
console.log(maxNumber(64551,85251));
*/