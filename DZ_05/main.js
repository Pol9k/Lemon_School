/*
Задан двумерный массив - объединить каждый внутренний массив с верхнем массивом - только по уникальным значениям. Например [1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], получаем в результате: [1,2,4,8,12,13,29,11,0,5,3,11,6,7,21]
*/
/*
let someArr = [1,2,4,[8,4,12],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3,,[13,29,11],[13,29,11],[0,5,3,11],5,];

function getAllMass(arr){
    return arr.flat();
}

let getUniqueArr = function(arr){
    let newArr = Array.from(new Set(getAllMass(arr)))
    return newArr;
}
// console.log(getUniqueArr(someArr));
*/

/*
Написать функцию которая возвращает true/false в зависимости от того - все ли уникальные значения в массиве или есть не уникальные
*/
/*
let someArray = [40, ['some'], 4, 3, 6, 58545, 4, 7, 0, 0, ['some'], 47, 4]
let getTrueOrFalse = function(arr){
    let newArr = [];
    for(let el of arr){
        if(arr[el]){
            newArr.push("true");
        } else if (!arr[el]){
            newArr.push("false");
        }
    }
    return newArr;
}
console.log(getTrueOrFalse(someArray));
*/

/*
Задан массив объектов студентов вида [{name: “Ivan”, estimate: 4, course: 1, active: true},{name: “Ivan”, estimate: 3, course: 1, active: true},{name: “Ivan”, estimate: 2, course: 4, active: false},{name: “Ivan”, estimate: 5, course: 2, active: true}] - заполнить его более большим количеством студентов. Написать функцию которая возвращает: среднюю оценку студентов в разрезе каждого курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} с учетом только тех студентов которые активны. Посчитать количество неактивных студентов в разрезе каждого курса и общее количество неактивных студентов.
*/

let students = [
    {name: "Ivan", estimate: 4, course: 1, active: true},
    {name: "Vlad", estimate: 3, course: 1, active: true},
    {name: "Andrey", estimate: 2, course: 4, active: false},
    {name: "Mari", estimate: 5, course: 2, active: true},
    {name: "Tanos", estimate: 5, course: 1, active: false},
    {name: "Feniks", estimate: 3, course: 1, active: true},
    {name: "Pereswek", estimate: 2, course: 4, active: false},
    {name: "Akakij", estimate: 1, course: 2, active: true},
]

let averageRating = function(arr){
    let obj = {};
    let some = [];
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].active){
            if(obj[arr[i].course] === undefined){
                obj[arr[i].course] = 0;
            }
            obj[arr[i].course] += arr[i].estimate;
            some.push(arr[i].course);
        }
    }
    console.log(some)    

    return obj;
}
function getTrue(){

}


console.log(averageRating(students));

/*
let averageRating = function(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i].course] === undefined){
            obj[arr[i].course] = 0;
        }
        obj[arr[i].course] += arr[i].estimate;
    }

    return obj;
}
*/

