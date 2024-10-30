var main = prompt("What do you want to do: " + " 1. Book a Hotel room " + " 2. Order Food " + " 3. Report a problem " + "(Enter a number)");

if(main === "1"){
    var nightCharges = 100;
    var nights = prompt("How many nights do you want to stay?  ( Enter a number ) " );
    if (nights <= "0"){
        alert("Invalid input! Please re-run the program.");
    }
    
    else{
        var hotelTotal = "$" + nightCharges * nights;
        alert(`Room Booked! Your total will be ${hotelTotal}.`);
    }
}

else if(main === "2"){
    var food = prompt(" 1. Pizza " + " 2. Burger " + " 3. Sandwich " + " 4. Chicken Roll " + " 5. Nuggets " + " 6. IceCream " + " 7. Donuts ")
    var drink = prompt("Would you like to add a drink? (y/n)");
    var foodTotal = 6;
    if (drink === "y"){
        ++foodTotal
    }
    alert(`Order Confirmed! Your total will be $${foodTotal}.`)

}

else if(main === "3"){
    var problem = prompt(" 1. Air Conitioner isn't working " + " 2. Refregerator isn't working " + " 3. Electricity gone " + " 4. Other " + "(Enter a number)" )
    if(problem === "3"){
        alert("You're experiencing known outage, your electricity will be restored in few hours! Sorry for the inconvenience.");
    }
    else if(problem === "4"){
        alert(`Sorry for any inconvenience! Please contact the management on "+923012345678"`)
    }
    else{
        alert("Sorry for any inconveniences! We'll send someone to check and fix the issue  as soon as possible.");
    }
}

else{
    alert("Invalid input! Please re-run the program.");
}