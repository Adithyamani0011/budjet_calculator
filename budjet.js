// Initialize variables for storing total income, total expenditure, and balance
let totalIncome = 0;
let totalExpenditure = 0;
let balance = 0;

// Function to add income
function addIncome() {
    // Get input values
    let incomeType = document.getElementById("incometype").value;
    let incomeAmount = parseFloat(document.getElementById("incomeAmount").value);

    // Update total income
    totalIncome += incomeAmount;

    // Update balance
    balance += incomeAmount;

    // Update the UI with new values
    updateUI();
}

// Function to add expenditure
function addExpenditure() {
    // Get input values
    let expenditureType = document.getElementById("expendituretype").value;
    let expenditureAmount = parseFloat(document.getElementById("expenditureAmount").value);

    // Update total expenditure
    totalExpenditure += expenditureAmount;

    // Update balance
    balance -= expenditureAmount;

    // Update the UI with new values
    updateUI();
}

// Function to update the UI with new values
function updateUI() {
    // Update total income display
    document.getElementById("totalIncome").textContent = totalIncome.toFixed(2);

    // Update total expenditure display
    document.getElementById("totalExpenditure").textContent = totalExpenditure.toFixed(2);

    // Update balance display
    document.getElementById("balance").textContent = balance.toFixed(2);
}
