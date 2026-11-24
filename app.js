
// =====================================
// ACTIVITY 7: BOOKING SUMMARY
// =====================================

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

    if (!selectedMatch || !selectedStand) {
        showToast("Please select a match and stand category!");
        return;
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        showToast("Please select 1 to 10 tickets!");
        return;
    }

    const price = ticketPrices[selectedStand];
    const total = price * quantity;

    summaryMatch.textContent = selectedMatch;
    summaryStand.textContent = selectedStand;
    summaryPrice.textContent = price;
    summaryQuantity.textContent = quantity;
    totalAmount.textContent = total;

    showToast("Booking Summary Updated Successfully!");
}

// Select Match from Schedule
function selectMatch(matchName) {

    matchSelect.value = matchName;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    if (standSelect.value) {
        updateSummary();
    } else {
        showToast("Match selected! Choose your stand category.");
    }
}

// Booking Event Listeners
matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
quantityInput.addEventListener("input", updateSummary);


// =====================================
// ACTIVITY 8: TEAM FILTER
// =====================================

const teamFilter = document.getElementById("teamFilter");
const matchContainer = document.getElementById("matchContainer");
const noMatches = document.getElementById("noMatches");

teamFilter.addEventListener("change", function () {

    const selectedTeam = teamFilter.value;
    const matchCards = document.querySelectorAll(".match-card");

    let visibleCount = 0;

    matchCards.forEach(function (card) {

        const teams = card.dataset.team.split(" ");

        if (selectedTeam === "all" ||
            teams.includes(selectedTeam)) {

            card.style.display = "";
            visibleCount++;

        } else {

            card.style.display = "none";
        }
    });

    noMatches.hidden = visibleCount !== 0;

    showToast("Match filter updated!");
});


// =====================================
// ACTIVITY 8: GRID AND LIST VIEW
// =====================================

const gridViewBtn = document.getElementById("gridViewBtn");
const listViewBtn = document.getElementById("listViewBtn");

// Grid View
gridViewBtn.addEventListener("click", function () {

    matchContainer.classList.remove("list-view");

    showToast("Grid View Activated!");
});

// List View
listViewBtn.addEventListener("click", function () {

    matchContainer.classList.add("list-view");

    showToast("List View Activated!");
});


// =====================================
// ACTIVITY 8: HAMBURGER MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and Close Mobile Menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close Menu After Clicking Navigation Link
const navigationLinks = document.querySelectorAll("#navLinks a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";
    });
});


// =====================================
// ACTIVITY 8: INITIAL SETTINGS
// =====================================

matchContainer.classList.remove("list-view");

console.log("Activity 7 and Activity 8 JavaScript Loaded Successfully!");
