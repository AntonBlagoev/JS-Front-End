function passwordValidator(password){

    let patternLetterAndDigits = /^[a-zA-Z0-9]*$/;
    let pattern2Digits = /\d{2}/;
    let passwordIsValid = true;

    if(password.length  < 6 || password.length > 10){
        console.log('Password must be between 6 and 10 characters');
        passwordIsValid = false;
    }

    if (!password.match(patternLetterAndDigits)) {
        console.log('Password must consist only of letters and digits');
        passwordIsValid = false;
    }

    if (!password.match(pattern2Digits)) {
        console.log('Password must have at least 2 digits');
        passwordIsValid = false;
    }

    if (passwordIsValid) {
        console.log('Password is valid');
        passwordIsValid = false;
    }
}





passwordValidator('MyPass123');