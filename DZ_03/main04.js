// Написать функцию, которая умножает(скдадывает) две матрицы
let m1 = [[1,2,3],[4,5,6],[7,8,9]];
let m2 = [[1,1,1],[2,2,2,],[3,3,3]]
function transpMatrix(arr1, arr2){
    let newArr = [];
    for(let i = 0 ; i < arr1.length && i < arr2.length; i++){
        newArr.push(arr1[i]);
        for(let j = 0; j < arr1[i].length && j < arr2[i].length; j++){
        newArr[i][j] = arr1[i][j] * arr2[i][j]
        }
    }
    return newArr;
};
console.log(transpMatrix(m1,m2));