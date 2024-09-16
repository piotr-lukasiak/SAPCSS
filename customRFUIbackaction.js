function createF7Button() {
    const button = document.createElement('button');  // Create a button element
    button.innerText = 'BACK';  // Set button text
    button.style.position = 'fixed';  // Position the button fixed to the viewport
    button.style.bottom = '20px';     // Position 20px from the bottom
    button.style.right = '20px';      // Position 20px from the right
    button.style.padding = '10px 20px';  // Add padding for better appearance
    button.style.backgroundColor = '#007bff';  // Set background color
    button.style.color = 'white';  // Set text color to white
    button.style.border = 'none';  // Remove borders
    button.style.borderRadius = '5px';  // Add rounded corners
    button.style.cursor = 'pointer';  // Change cursor to pointer on hover
    button.style.fontSize = '16px';  // Set font size

    // Add a hover effect by changing background color
    button.onmouseover = function() {
        button.style.backgroundColor = '#0056b3';  // Darker color on hover
    };
    button.onmouseout = function() {
        button.style.backgroundColor = '#007bff';  // Original color when not hovered
    };

    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Call the setFKey function from mobile.js to simulate F7 key press
        setFKey(7);  // This calls the function defined in mobile.js
    });

    // Append the button to the body
    document.body.appendChild(button);
}

createF7Button();