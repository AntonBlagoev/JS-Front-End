function reverse(n, inputArr) {
    let arr = [];
    let i = 0
    for (let index = 0; index < n; index++) {
       
        arr.push(inputArr[index]);
    }
    console.log(arr.reverse().join(" "));
}

reverse (3, [5, 10, 15, 20, 25, 30, 35]);

