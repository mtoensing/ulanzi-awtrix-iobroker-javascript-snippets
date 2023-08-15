// Create a state change listener for the garage door status
on({ id: 'meross.0.2106159027479136101748e1e9728458.0-garageDoor', change: 'ne', ack: true }, function (obj) {
    if (!obj || !obj.state || obj.state.val === null) {
        console.warn('Invalid garage door status state object or null value.');
        return;
    }

    const isGarageOpen = obj.state.val; // true when the garage is open, false when the garage is closed

    // Determine if the garage is opening or closing
    const isGarageOpening = isGarageOpen;
    const isGarageClosing = !isGarageOpen;

    if (isGarageOpening) {
        // Create the notification for garage opening
        const notificationText = [
            { "t": "Garage Door is Opening", "c": "00FFFF" }, // "Garage Door is Opening" in bright blue
            { "t": "   Garage Door is Opening", "c": "00FFFF" }, // "Garage Door is Opening" in bright blue
            { "t": "   Garage Door is Opening", "c": "00FFFF" } // "Garage Door is Opening" in bright blue
            ];
        sendNotification(notificationText);
    } else if (isGarageClosing) {
        // Create the notification for garage closing
        const notificationText = [
            { "t": "Garage Door is Closing", "c": "00FFFF" }, // "Garage Door is Closing" in bright blue
            { "t": "   Garage Door is Closing", "c": "00FFFF" },  // Show the message twice
            { "t": "   Garage Door is Closing", "c": "00FFFF" }
        ];
        sendNotification(notificationText);
    }
});

// Function to send the notification to Awtrix display
function sendNotification(notificationText) {
    sendTo('awtrix-light', 'notification', { text: notificationText, repeat: 1, duration: 5, stack: true, wakeup: true }, (res) => {
        if (res && res.error) {
            console.error(res.error);
        }
    });
}
