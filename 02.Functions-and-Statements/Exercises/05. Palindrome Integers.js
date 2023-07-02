function isPalindrome(array){

    for (let i = 0; i < array.length; i++) {
    
        let currentNum = String(array[i]).split('');
        let isTrue = true;
        for (let y = 0; y < currentNum.length; y++) {
        
            if(currentNum[y] !== currentNum[(currentNum.length - y) - 1]){
                isTrue = 'false';
                break;
            }

            isTrue = 'true';
        }

        console.log(isTrue);
    }
}

isPalindrome([32,2,232,1010]);