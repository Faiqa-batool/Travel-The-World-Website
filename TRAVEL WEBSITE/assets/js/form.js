// script.js
function submitForm(event) {
    event.preventDefault();

    // Get form values
    const cardName = document.getElementById('cardName').value;
    const stayDuration = document.getElementById('stayDuration').value;
    const travelDate = document.getElementById('travelDate').value;
    const ticketCount = document.getElementById('ticketCount').value;
    const email = document.getElementById('email').value;

    // Store form data in local storage
    localStorage.setItem('cardName', cardName);
    localStorage.setItem('stayDuration', stayDuration);
    localStorage.setItem('travelDate', travelDate);
    localStorage.setItem('ticketCount', ticketCount);
    localStorage.setItem('email', email);

    // Redirect to another page to display the form data
    window.location.href = 'booking_info.html';
}
