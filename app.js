
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.style.cssText = `
        position: fixed !important;
        bottom: 25px !important;
        right: 25px !important;
        background: #222 !important;
        color: white !important;
        padding: 15px 25px !important;
        border-radius: 8px !important;
        z-index: 999999 !important;
        font-size: 16px !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
    `;

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(button => {
        button.addEventListener("click", function (event) {

            event.preventDefault();

            const bookingForm = document.getElementById("booking");

            if (bookingForm) {
                bookingForm.scrollIntoView({
                    behavior: "smooth"
                });

                showToast("Ready to book your IPL tickets!");
            }
        });
    });

});
