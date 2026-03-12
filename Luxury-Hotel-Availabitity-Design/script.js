function handleBooking() {
    const btn = document.querySelector('.book-btn');
    const msg = document.getElementById('statusMsg');
    
    // UI Feedback Architecture
    btn.disabled = true;
    btn.innerText = "SEARCHING...";
    msg.style.display = "block";

    // Simulate Server Connection
    setTimeout(() => {
        btn.disabled = false;
        btn.innerText = "CHECK AVAILABILITY";
        msg.innerText = "✔ Rooms found for these dates. Redirecting...";
        msg.style.color = "green";
    }, 2000);
}
