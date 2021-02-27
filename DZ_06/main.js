/* Посчитать количество ссылок на странице, вывести их содержимое */

let getLin = document.querySelectorAll("a");
let linksCounter = getLin.length;
function getText(arr){
    let answerText = "";
    for(let i = 0; i < arr.length; i++){
        answerText += arr[i].innerText + "; ";
    }
    return answerText;
};

let addLenght = document.querySelector(".answerFirstTask");
addLenght.innerHTML = linksCounter;

let addTextToPage = document.querySelector(".answerTextFirstTask");
addTextToPage.innerHTML = getText(getLin);


/*
Посчитать количество тегов “p” на странице которые имеют класс “phrase” - вывести их содержимое
*/
let getParagr = document.querySelectorAll(".phrase");
let getParagrCounter = getParagr.length;
let getParagrText = [];


let addParagrCounter = document.querySelector(".answerSecondTask");
addParagrCounter.innerHTML = getParagrCounter;

let addParagrafToPage = document.querySelector(".answerTextSecondTask");
addParagrafToPage.innerHTML = getText(getParagr);