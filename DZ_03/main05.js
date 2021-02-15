/*
Найти номер столбца двумерного массива сумма которого является максимальной (аналогично для строки)
*/
let m = [[1,2,3],[4,5,6],[7,8,9]];
let maxColumnSum = function(arr){
    let rez = 0;
    let sum = [];
    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            rez += arr[i][j];
        }
        sum.push(rez);
    }
    return Math.max.apply(null, sum);
}
console.log(maxColumnSum(m));