/*
Написать функцию которая генерирует массив случайных значений, таким образом что все элементы результирующего массива являются уникальными. Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как положительные так и отрицательными, и еще одним параметром количество значений которые нужно сгенерировать. Если количество генерируемых значений больше чем чисел в диапазоне - отдавать пустой массив.
*/

let addMass = function(numFerst, numSecond, param){
    let mass = [];
    let numDiap = 0;
    for(let i = 0; i < param; i++){
       ++numDiap;
       mass.push(someNum(numFerst, numSecond));
    }
    let newMass = Array.from(new Set(mass));
    if(param > newMass.length){
        newMass.length = 0;
    };
    return newMass;
}
function someNum(valFerst, valSecond){
    return Math.floor(Math.random() * (valFerst - valSecond)) + valSecond;
};
    
// console.log(addMass(-10, 20, 5));

/* 
Использовать функцию из предыдущего задания чтобы получить массив из нужного количества значений. Найти процентное соотношение отрицательных, положительных и нулевых элементов массива. */

let getProcRel = function(arr){
    let procRel = [];
    let positiv = 0;
    let negetive = 0;
    let nullAl = 0;

    arr.forEach(el => {
        if(el < 0){
            ++negetive;
        } else if(el > 0){
            ++positiv;
        } else {
            ++nullAl;
        }
    });
    positiv = positiv/arr.length*100;
    negetive = negetive/arr.length*100;
    nullAl = nullAl/arr.length*100;

    procRel.push(positiv, negetive, nullAl)

    return procRel;
}
console.log(getProcRel(addMass(-10, 20, 5)));


/* 
Задано предложение - подсчитать количество вхождений каждого слова в предложении. Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось
*/

let text = "Задано предложение - подсчитать количество вхождений каждого слова в предложении. Вывести список уникальных слов и напротив каждого слова - сколько раз встретилось";

let getNumberWord = function(text){
    let mass = text.split(' ');
    return mass;
};

let getRet = arr => arr.reduce((arr, el) => {
    arr[el] = (arr[el] || 0) + 1;
    return arr;
  }, {});

// console.log(getRet(getNumberWord(text)));



/*
Написать рекурсивную функцию которая выводит абсолютно все элементы ассоциативного массива (объекта) - любого уровня вложенности
*/
let someArr = [12,65,98,[43,434,[1,35],54]];
function searchAll(arr){
    for(let key in arr){
        if(typeof arr[key] === "object"){
            searchAll(arr[key]);
        } else {
            console.log(arr[key])
        }
    }
}
console.log(searchAll(someArr))

/*
Все предыдущий задания на циклы - написать с помощью циклов for in и/или for of
*/
function searchAll(arr){
    for(let key in arr){
        if(typeof arr[key] === "object"){
            searchAll(arr[key]);
        } else {
            console.log(arr[key])
        }
    }
}
// !!!

let numVal = function someVal(number){
    if(number === 0){
        return "zero";
    } else if(number > 0){
        return "positive";
    } else if(number < 0){
        return "negative";
    }
    else {
        return number + 'введите число!!!';
    };
};
let arr = [4,7,8,-2,0];
let sortArr = [];

for(let num in arr){
    sortArr += numVal(arr[num]) + " ";
}
console.log(sortArr);

// !!!
function textBackLetters (text){
    let textLenght = 0;
    let rez = "";

    for(let letter in text){
        textLenght = letter;
    }
    for(let j = textLenght; j >= 0; j--){
        rez += text[j];
    }
    return rez;
}
console.log(textBackLetters("Hi. My name is Andriy!"));

// !!!

let num = 5645479;
let rez = 0;

let sameText = String(num);
for(let el in sameText){
    let sameNumber = Number(sameText[el]);
    if(sameNumber % 2 === 0) {
        rez += sameNumber;
    };
}
console.log(rez);








