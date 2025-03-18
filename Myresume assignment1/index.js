// Function to reverse a string
function reverseString() {
    let input = document.getElementById("stringInput").value;
    let reversed = input.split("").reverse().join(""); // Reverse the string
    document.getElementById("reversedOutput").innerText = "Reversed: " + reversed;
}

// Function to check if a number is a palindrome
function checkPalindrome() {
    let input = document.getElementById("numberInput").value;
    let reversed = input.split("").reverse().join(""); // Reverse the input
    if (input === reversed) {
        document.getElementById("palindromeOutput").innerText = "Yes, it's a palindrome!";
    } else {
        document.getElementById("palindromeOutput").innerText = "No, it's not a palindrome.";
    }
}

// Function to calculate the total bill including tip
function calculateTotal() {
    let bill = parseFloat(document.getElementById("billAmount").value);
    let tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(bill) || isNaN(tipPercentage)) {
        document.getElementById("totalAmount").innerText = "Please enter valid numbers.";
        return;
    }

    let tipAmount = (bill * tipPercentage) / 100;
    let total = bill + tipAmount;

    document.getElementById("totalAmount").innerText = "Total Amount: $" + total.toFixed(2);
}
