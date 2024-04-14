// Initialize total money collected and donated
let totalCollected = 0;
let totalDonated = 0;

// Function to update total money donated
function updateTotalDonated(amount) {
  totalDonated += amount;
  document.getElementById('total-donated').textContent = `$${totalDonated}`;
}

// Function to handle donate button click
function handleDonateButtonClick(event) {
  const amount = parseInt(prompt("Enter amount to donate:"));
  if (!isNaN(amount)) {
    updateTotalDonated(amount);
  } else {
    alert("Invalid amount. Please enter a valid number.");
  }
}

// Add click event listeners to donate buttons
document.getElementById('earthquake-donate').addEventListener('click', handleDonateButtonClick);
document.getElementById('cyclone-donate').addEventListener('click', handleDonateButtonClick);
// Add event listeners for more donate buttons if needed
