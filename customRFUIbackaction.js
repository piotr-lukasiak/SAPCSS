function captureAndroidBackButton() {
    // Push an initial state to prevent back navigation
    history.pushState(null, null, window.location.href);

    window.addEventListener('popstate', function(event) {
        // Prevent the default back navigation action (including swipe back)
        event.preventDefault();

        // Send F7 key instead of navigating back
        setFKey(7);

        // Re-push the current state to ensure the back button is intercepted again
        history.pushState(null, null, window.location.href);
    });
}

// Initialize the back button capture when the page loads
window.onload = function() {
    captureAndroidBackButton();
};