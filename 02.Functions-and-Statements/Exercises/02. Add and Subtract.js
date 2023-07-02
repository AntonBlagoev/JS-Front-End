function sumAddOrSubstract(x, y, z){

    function sum(a, b){
        return a + b;
    }
    function substract(a, b){
        return a - b;
    }

    let result = substract(sum(x, y), z);

    console.log(result);
}

sumAddOrSubstract(1, 17, 30) 