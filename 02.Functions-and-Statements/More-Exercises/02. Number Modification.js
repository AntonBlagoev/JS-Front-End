function solve(num){

    num = num.toString();

    function calculateAvarage(num){
        return num
            .split("")
            .map(Number)
            .reduce((total, curr) => total + curr, 0) / num.length;

    }
    let average = calculateAvarage(num);

    while (average < 5) {
        num += "9";
        average = calculateAvarage(num);
    }

    return num;

}

console.log(solve(5835 ));