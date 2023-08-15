// Create a state change listener for spotify-premium.0.player.trackName and spotify-premium.0.player.artistName
on({ id: 'spotify-premium.0.player.trackName', change: 'ne', ack: true }, function (obj) {
    if (!obj || !obj.state || obj.state.val === null) {
        console.warn('Invalid trackName state object or null value.');
        return;
    }

    const newTrackName = obj.state.val;
    const artistName = getState('spotify-premium.0.player.artistName').val;

    if (!artistName) {
        return;
    }

    // Create the notification text with markup for green color
    const notificationText = [
    { "t": "Now playing: ", "c": "00FF00" }, // "Now playing" in green
    { "t": `${newTrackName} - ${artistName}`, "c": "FFFFFF" }, // Track name and artist name in white (FFFFFF)
    { "t": "    Now playing: ", "c": "00FF00" }, // "Now playing" in green
    { "t": `${newTrackName} - ${artistName}`, "c": "FFFFFF" } // Track name and artist name in white (FFFFFF)
    ];

    // Send the notification to Awtrix display
    sendTo('awtrix-light', 'notification', { text: notificationText, repeat: 1, duration: 5, stack: true, wakeup: true }, (res) => {
        if (res && res.error) {
            console.error(res.error);
        }
    });
});
