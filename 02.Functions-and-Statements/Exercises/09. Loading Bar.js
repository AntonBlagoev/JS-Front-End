function loadingBar(num){

    let arrBar = ['.', '.', '.', '.', '.','.', '.', '.', '.', '.'];
    let arrLength = num / 10;
    let index = 0;

    for (let i = 1; i <= arrLength; i ++) {
       arrBar[index] = '%';
       index++;
    }
    if (num >= 100) {
        console.log('100% Complete!');
        console.log(`[%%%%%%%%%%]`)
    }
    else{
        console.log(`${num}% [${arrBar.join("")}]`);
        console.log('Still loading...');
    }
   
}

loadingBar(185);