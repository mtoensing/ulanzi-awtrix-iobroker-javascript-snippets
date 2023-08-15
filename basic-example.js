
sendTo('awtrix-light', 'notification', {
    text: [
        { "t": "Hello!", "c": "00FF00" }], repeat: 1, sound: 'ff_victory', duration: 5, stack: true, wakeup: true
}, (res) => {
    if (res && res.error) {
        console.error(res.error);
    }
});