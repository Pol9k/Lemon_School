
let m1 = [[1,2,3],[4,5,6],[7,8,9]];
function transpMatrix(arr){
    let newArr = [];
    for(let i = 0 ; i < arr.length; i++){
        newArr.push(arr[i]);
        for(let j = 0; j < arr[i].length; j++){
            newArr[i][j] = arr[j][i]
        }
    }
    return newArr;
};
console.log(transpMatrix(m1));