const readlineSync = require ("readline-sync");

//Get the total amount of the bill. Wait for user's response.
const totalAmount = readlineSync.questionFloat(
    "What's the total amount of the bill: $"
  );

// Get the party size from the user
const totalPartySize = readlineSync.questionInt("How many people are in your party?");

// Get the % of the tip from the user
const tipPercentage = readlineSync.questionFloat(
    "What % would you like to tip? "
  );

// Repeat all of those things back to the user.
console.log(`The total amount of your bill is $${totalAmount.toFixed(2)}`);
console.log(`The total party size is ${totalPartySize}`);
console.log(`With a tip of ${tipPercentage}`);


// The bill tip is the (totalAmount * tipPercentage divided by 100)
let precentage = tipPercentage/100;
let totalAmountToTip = totalAmount * precentage;

// Total bill is the bill plus the tip
let billWithTip = totalAmount + totalAmountToTip;

// Get the total amount of the bill divided by the # of people

let totalPerPerson = billWithTip/totalPartySize;

// Calculate how much everyone is paying
console.log(`The tip should be $${totalAmountToTip.toFixed(2)}`);
console.log(`The total check should be $${billWithTip.toFixed(2)}`);
console.log(`Each person should pay $${totalPerPerson.toFixed(2)}`);
