const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // You can add any form submission logic here (e.g., sending data to a server)

    // Show the pop-up message
    showPopup();

    // Reset the form after submission
    document.getElementById("contact-form").reset();
});

function showPopup() {
    // Show the pop-up message
    alert("Thank you for your response! We will get back to you within 24 hours.");
}
