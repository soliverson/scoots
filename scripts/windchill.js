document.addEventListener("DOMContentLoaded", function() {
    const temperature = 35; // temperature in Fahrenheit
    const windSpeed = 5; // wind speed in mph
    const windChillResult = document.getElementById('windChillResult');

    if (temperature <= 50 && windSpeed > 3.0) {
        const windchillIndex = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChillResult.textContent = `Wind Chill: ${windchillIndex.toFixed(2)}°F`;
    } else {
        windChillResult.textContent = 'Wind Chill: N/A';
    }
});
