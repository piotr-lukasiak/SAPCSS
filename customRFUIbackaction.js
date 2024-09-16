function captureBackButton() {
    // Push an initial state to prevent default back navigation
    history.pushState(null, null, window.location.href);

    window.addEventListener('popstate', function(event) {
        // Prevent the back navigation
        event.preventDefault();

        // Send F7 key instead of going back
        setFKey(7);

        // Re-push the current state to block the back action
        history.pushState(null, null, window.location.href);
    });
}

// Detect swipe gestures for back navigation (iOS-specific workaround)
function detectSwipeBack() {
    let touchStartX = 0;
    let touchEndX = 0;

    window.addEventListener('touchstart', function(event) {
        touchStartX = event.changedTouches[0].screenX;
    });

    window.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].screenX;

        // Detect swipe back gesture (left to right swipe)
        if (touchEndX - touchStartX > 100) {
            // Block the default swipe back action
            event.preventDefault();

            // Send the F7 key instead
            setFKey(7);

            // Re-push the current state to block navigation
            history.pushState(null, null, window.location.href);
        }
    });
}

// Initialize the back button and swipe capturing when the page loads
window.onload = function() {
    captureBackButton();
    detectSwipeBack();  // Add swipe back gesture detection
};