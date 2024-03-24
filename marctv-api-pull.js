function fetchDataFromAPI() {
    const link = "https://api.marc.tv/";
    const request = require('request');

    request(link, function(error, response, body) {
        if (error) {
            log('Error from API:' + error, 'error');
        } else {
            try {
                const data = JSON.parse(body);
                if (data.row && data.row.visitors !== undefined) {
                    const visitors = parseInt(data.row.visitors);
                    // Read the current value of "marctvlivevisitors" state
                    getState("marctvlivevisitors", function (err, state) {
                        if (err) {
                            log('Error reading state:' + err, 'error');
                        } else {
                            if (!state || state.val !== visitors) {
                                // Update the "marctvlivevisitors" state only if it's different from the current value
                                setState("marctvlivevisitors", visitors, true, function (err) {
                                    if (err) {
                                        log('Error updating state:' + err, 'error');
                                    }
                                });
                            }
                        }
                    });
                } else {
                    log('Error: No "visitors" property in the API response.', 'error');
                }
            } catch (parseError) {
                log('Error parsing API response: ' + parseError, 'error');
            }
        }
    });
}

schedule('*/2 * * * * *', fetchDataFromAPI);
fetchDataFromAPI();
