/* Переменная хранит процент кредита, вторая переменная хранит объем тела кредита, третья переменная хранит длительность кредитного договора в годах. Написать скрипт который вычислит:
Сколько процентов заплатит клиент за все время
Сколько процентов заплатит клиент за один календарный год
Какое общее количество денежных средств клиента банка выплатит за все года
 */
var creditPercentMonth = 2;
var creditBody = 20000;
var creditTimeYear = 6;
var rezult;

for(let i = 0; i <= creditTimeYear; i++){
    rezult = i * creditPercentMonth * 12;
}
console.log(rezult + '% заплатит клиент за все время ');

rezult = creditPercentMonth * 12;
console.log(rezult + '% заплатит клиент за один календарный год');


rezult = (creditPercentMonth * creditBody * 12 * creditTimeYear)/100;
console.log(rezult + ' денежных средств клиента банка выплатит за все года')



/* Переменная хранит в себе единицу измерения одно из возможных значений (Byte, KB, MB, GB), Вторая переменная хранит в себе целое число. В зависимости от того какая единица измерения написать скрипт, который выводит количество байт. Для вычисления принимает счет что в каждой последующей единицы измерения хранится 1024 единиц более меньшего измерения.
*/
var unity = 'MB';
var num = 1;
var rez = 0;

if(unity === 'KB') {
     rez = 1024 * num;
} else if(unity === 'MB') {
     rez = 1048576 * num;
} else if(unity === 'GB') {
     rez = 1073741824 * num;
} else {
    rez = 1 * num;
}
console.log(rez + ' количество байт в ' + num + unity);

// 1073741824

// let unity = Byte;
// const KB = 1024;
// const MB = 1048576;
// switch(unity){
//     case 'Byte':
//         rez = 1;
//         console.log(rez + ' количество байт в ' + unity);
//         break;
//     case 'KB':
//         rez = byte * 1024;
//         console.log(rez + ' количество байт в ' + unity);
//         break;
//     case 'MB':
//         rez = 1024 * 1024;
//         console.log(rez + ' количество байт в ' + unity);
//         break;
//     case 'GB':
//         rez = 1024 * 1024 * 1024;
//         console.log(rez + ' количество байт в ' + unity);
//         break;   
// }


/*
Переменная хранит в себе значение, напишите скрипт которое выводит информацию о том, что число является нулевым либо положительным либо отрицательным.
*/
var number = -545;
if(number === 0){
    console.log('число является нулевым!')
} else if(number > 0){
    console.log('число является положительным!')
} else {
    console.log('число является отрицательным!')
}


/*  Переменная хранит в себе значение от 0 до 9. Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1. Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами.

var number = 5;

if (number === 0) {
    console.log('ноль');
} else if (number === 1) {
    console.log('один');
} else if (number === 2) {
    console.log('два');
} else if (number === 3) {
    console.log('три');
} else if (number === 4) {
    console.log('четыри');
} else if (number === 5) {
    console.log('пять');
} else if (number === 6) {
    console.log('шесть');
} else if (number === 7) {
    console.log('семь');
} else if (number === 8) {
    console.log('восемь');
} else if (number === 9) {
    console.log('девять');
} else {
    console.log('введите цифру от 0 до 9');
}

switch(number) {
    case 0: 
        console.log('ноль');
        break;
    case 1: 
        console.log('один');
        break;
    case 2: 
        console.log('два');
        break;
    case 3: 
        console.log('три');
        break;
    case 4: 
        console.log('четыри');
        break;
    case 5: 
        console.log('пять');
        break;
    case 6: 
        console.log('шесть');
        break;
    case 7: 
        console.log('семь');
        break;
    case 8: 
        console.log('восемь');
        break;
    case 9: 
        console.log('девять');
        break;
}

*/