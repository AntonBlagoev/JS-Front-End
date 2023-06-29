function solve(arr, number){

let tmpArr = [];

    for (let index = 0; index < arr.length; index) {
        
        tmpArr[tmpArr.length] = arr[index]
        
        index += number;
    }
    return(tmpArr);   
}

solve(['5','20','31','4','20'],2);

//solve(['dsa','asd','test','tset'],2);