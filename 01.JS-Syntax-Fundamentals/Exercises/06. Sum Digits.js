function solve(num){
    let total = 0;
    let arr = num.toString().split('');
   
    
    for (let index = 0; index < arr.length; index++) {
        total += parseInt(arr[index]);
        //total += Number(arr[index]);

    }
    console.log(total);
}

solve(245678)