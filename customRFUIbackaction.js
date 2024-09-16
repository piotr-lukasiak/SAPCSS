function captureBackButton() {
    // Push an initial state to prevent the default back navigation
    history.pushState(null, null, window.location.href);

    window.addEventListener('popstate', function(event) {
        // Prevent the back navigation
        event.preventDefault();

        // Send F7 key instead of going back
        setFKey(7);

        // Re-push the current state to ensure the back button still works
        history.pushState(null, null, window.location.href);
    });
}

// Initialize the back button capturing when the page loads
window.onload = function() {
    captureBackButton();
};