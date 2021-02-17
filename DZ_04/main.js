/*
Написать функцию которая генерирует массив случайных значений, таким образом что все элементы результирующего массива являются уникальными. Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как положительные так и отрицательными, и еще одним параметром количество значений которые нужно сгенерировать. Если количество генерируемых значений больше чем чисел в диапазоне - отдавать пустой массив.
*/

let addMass = function(num1, num2, param){
    let mass = [];
    let numDiap = 0;
    let aaa = param;

    for(let i = 0; i < param; i++){
       ++numDiap;
       
       mass.push(someNum(num1, num2));
    }
    let newMass = Array.from(new Set(mass));
    if(param > newMass.length){
        newMass.length = 0;
    };
    return newMass;

    function someNum(val1, val2){
        return Math.floor(Math.random() * (val1 - val2)) + val2;
    };
}
    
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
