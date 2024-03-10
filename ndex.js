function checkOppositeSigns(num1, num2) {
    // Check if one number is positive and the other is negative
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const num1 = 5;
const num2 = -3;

if (checkOppositeSigns(num1, num2)) {
    console.log("The two numbers have opposite signs.");
} else {
    console.log("The two numbers do not have opposite signs.");
}