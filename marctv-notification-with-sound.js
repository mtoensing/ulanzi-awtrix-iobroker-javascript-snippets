// Create a state change listener for marctvlivevisitors
on({ id: 'marctvlivevisitors', change: 'gt', val: 10, ack: true }, function (obj) {
    if (!obj || !obj.state || obj.state.val === null) {
        console.warn('Invalid marctvlivevisitors state object or null value.');
        return;
    }

    const liveVisitors = obj.state.val;

    // Create the notification text with markup for red color
    const notificationText = [
        { "t": "Attention: ", "c": "00FFFF" }, // "Attention" in blue
        { "t": `Live visitors: ${liveVisitors}`, "c": "FFFFFF" } // Live visitors count in white (FFFFFF)
    ];

    // Send the notification to Awtrix display
    sendTo('awtrix-light', 'notification', { text: notificationText, sound: 'ff_victory', repeat: 1, duration: 5, stack: true, wakeup: true }, (res) => {
        if (res && res.error) {
            console.error(res.error);
        }
    });
});
