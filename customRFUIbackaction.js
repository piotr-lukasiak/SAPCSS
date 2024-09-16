    history.pushState(null, null, window.location.href);

    document.addEventListener('popstate', function(event) {
        // This will capture the back button and swipe back events
        alert("TEST");
        event.preventDefault();

        // Send F7 key instead of going back
        setFKey(7);

        // Push a new state to prevent actual back navigation
        history.pushState(null, null, window.location.href);
    })