/*
Найти номер столбца двумерного массива сумма которого является максимальной (аналогично для строки)
*/
let m = [[1,2,3],[4,5,6],[7,8,9]];
let maxColumnSum = function(){
    let rez = 0;
    let sum = [];
    for(let i = 0 ; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            rez += m[i][j]
        }
        sum.push(rez);
    }
    return Math.max.apply(null, sum);
}
console.log(maxColumnSum(m));