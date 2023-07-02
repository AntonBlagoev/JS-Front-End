function nxN(num){

    for (let i = 0; i < num; i++) {

        let rowArr = [];
        
        for (let y = 0; y < num; y++) {
            rowArr [y] = num;      
        }
        console.log(...rowArr);
    }
}

nxN(3);