function solve(groupOfPeople, typeOfGroup, dayOfWeek){
    
    let price;
    let totalPrice;
    let discount = 1;
    
    if (typeOfGroup === 'Students') 
    {
        if (dayOfWeek === 'Friday') {
            price = 8.45;;
        }
        else if (dayOfWeek === 'Saturday') {
            price = 9.80;;
        }
        else if (dayOfWeek === 'Sunday') {
            price = 10.46;;
        }
        if(groupOfPeople >= 30){
            discount = 0.85;
        } 
    }
    else if (typeOfGroup === 'Business') 
    {
        if (dayOfWeek === 'Friday') {
            price = 10.90;
        }
        else if (dayOfWeek === 'Saturday') {
            price = 15.60;
        }
        else if (dayOfWeek === 'Sunday') {
            price = 16;
        }
        if(groupOfPeople >= 100){
            groupOfPeople -= 10;
        } 
        
    }
    else if (typeOfGroup === 'Regular') 
    {
        if (dayOfWeek === 'Friday') {
            price = 15;
        }
        else if (dayOfWeek === 'Saturday') {
            price = 20;
        }
        else if (dayOfWeek === 'Sunday') {
            price = 22.50;
        }
        if(groupOfPeople >= 10 && groupOfPeople <= 20){
            discount = 0.95;
        } 
    }
    else{
        console.log(`Error!`);
    }

    totalPrice = groupOfPeople * price * discount;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

solve(40, "Regular", "Saturday");