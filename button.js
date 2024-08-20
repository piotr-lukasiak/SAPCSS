// Create the button element
const button = document.createElement('button');
button.innerText = 'Back';
button.style.position = 'fixed';
button.style.bottom = '10px';
button.style.right = '10px';
button.style.padding = '10px';
button.style.backgroundColor = '#007BFF';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

// Add the button to the body
document.body.appendChild(button);

// Add an event listener to simulate F7 key press
button.addEventListener('click', () => {
    const event = new KeyboardEvent('keydown', {
        key: 'F7',
        keyCode: 118,
        which: 118,
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(event);
});
