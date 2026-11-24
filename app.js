
// Ticket Prices
const ticketPrices = {
    General: 500,
    Premium: 1500,
    VIP: 3000
};

// DOM Selectors
const matchSelect = document.getElementById("match");
const standSelect = document.querySelector("#stand");
const quantityInput = document.getElementById("quantity");

// Booking Summary Elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const totalAmount = document.getElementById("totalAmount");

// Toast Notification
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}

// Update Booking Summary
function updateSummary() {

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;
    const quantity = Number(quantityInput.value);

    // Validate selections
    if (!selectedMatch || !selectedStand) {
        showToast("Please select a match and stand category!");
        return;
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        showToast("Please select 1 to 10 tickets!");
        return;
    }

    // Calculate price
    const price = ticketPrices[selectedStand];
    const total = price * quantity;

    // Display summary
    summaryMatch.textContent = selectedMatch;
    summaryStand.textContent = selectedStand;
    summaryPrice.textContent = price;
    summaryQuantity.textContent = quantity;
    totalAmount.textContent = total;

    showToast("Booking Summary Updated Successfully!");
}

// Select match from schedule
function selectMatch(matchName) {
    matchSelect.value = matchName;
    updateSummary();

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

// Change Event Listeners
matchSelect.addEventListener("change", updateSummary);

standSelect.addEventListener("change", updateSummary);

quantityInput.addEventListener("input", updateSummary);
