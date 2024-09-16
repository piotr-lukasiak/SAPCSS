alert("WORKS")
window.addEventListener('popstate', function(event) {
    // Prevent the back navigation
    event.preventDefault();

    // Send F7 key instead of going back
    setFKey(7);
})