function charsInRange(ch1, ch2){
    
    let startIndex = Math.min(ch1.charCodeAt(0), ch2.charCodeAt(0)) + 1;
    let endIndex = Math.max(ch1.charCodeAt(0), ch2.charCodeAt(0));
    let charsArray= [];
    let arrayIndex = 0;

    for (let index = startIndex; index < endIndex; index++) {

        let currentChar = String.fromCodePoint(index);
        charsArray[arrayIndex] = currentChar;
        arrayIndex++;
    }
    console.log(charsArray.join(" "));
}

charsInRange('C', '#')