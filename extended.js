let payPerHour = 10
let hoursWorked = 40
let payCheck = payPerHour * hoursWorked
let bonusCheck =  (hoursWorked - 40) * (payPerHour * 1.5) + (40 * payPerHour)

if (hoursWorked > 40){
    {console.log(`After ${hoursWorked} hours at $${payPerHour} and a 150% on you overtime hours your paycheck comes out to $${bonusCheck.toFixed(2)}.`)}
} else {
    {console.log(`After ${hoursWorked} hours at $${payPerHour} your paycheck comes out to $${payCheck.toFixed(2)}.`)}
}

let savings = 0
let weeks = 0

while (savings < 1000000){
    savings += bonusCheck || payCheck;
    weeks++;
}

console.log(`After ${weeks} weeks working for $${payPerHour} per hour at ${hoursWorked} hours a week you are finally a millionare!!!`)