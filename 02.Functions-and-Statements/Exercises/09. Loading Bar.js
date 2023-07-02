function loadingBar(percentage){

    const percentageNumber = percentage / 10;
    const bar = "%".repeat(percentageNumber) + ".".repeat(10 - percentageNumber);

    // let arrBar = ['.', '.', '.', '.', '.','.', '.', '.', '.', '.'];
    // let index = 0;

    // for (let i = 1; i <= percentageNumber; i ++) {
    //    arrBar[index] = '%';
    //    index++;
    // }
    
    if (percentage >= 100) {
        console.log('100% Complete!');
        console.log(`[%%%%%%%%%%]`)
    }
    else{
       // console.log(`${percentage}% [${arrBar.join("")}]`);
        console.log(`${percentage}% [${bar}]`);
        console.log('Still loading...');
    }
   
}

loadingBar(100);