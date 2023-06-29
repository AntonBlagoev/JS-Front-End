function solve(speed, area){

    let speedLimit = 0;
    let difference = 0;
    let status;
    let result;

    if (area === 'motorway') {
        speedLimit = 130;
        difference = speed - speedLimit;
    }
    else if(area === 'interstate') {
        speedLimit = 90;
        difference = speed - speedLimit;
    }
    else if(area === 'city') {
        speedLimit = 50;
        difference = speed - speedLimit;
    }    
    else if(area === 'residential') {
        speedLimit = 20;
        difference = speed - speedLimit;
    }
    
    if (difference <= 0) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    }
    else {
        if (difference <= 20) {
            status = 'speeding';
        }
        else if(difference <= 40){
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }
        result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    console.log(result);

}

solve(21, 'residential')