document.getElementById('openPopupBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('locationInfo').innerText = "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            const state = data.state;
            document.getElementById('locationInfo').innerHTML = `
                Coordinates: (${latitude}, ${longitude})<br>
                City: ${city}<br>
                State: ${state}
            `;
        })
        .catch(error => {
            document.getElementById('locationInfo').innerText = "Unable to retrieve location data.";
        });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('locationInfo').innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('locationInfo').innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('locationInfo').innerText = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('locationInfo').innerText = "An unknown error occurred.";
            break;
    }
}
