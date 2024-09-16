window.onload = function() {
    alert("works");
    captureBackButton();

};


function captureBackButton() {
    // Push an initial history state
    history.pushState(null, null, window.location.href);

    window.addEventListener('popstate', function(event) {
        // This will capture the back button and swipe back events
        event.preventDefault();

        // Send F7 key instead of going back
        setFKey(7);

        // Push a new state to prevent actual back navigation
        history.pushState(null, null, window.location.href);
    });
}

// Initialize back button capture when the page loads
window.onload = function() {
    captureBackButton();
    alert("works");
};