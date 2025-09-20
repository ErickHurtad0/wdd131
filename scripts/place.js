

const date = document.querySelector("#currentyear")

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;



const temperature = 26;  
const windSpeed = 5;     


function calculateWindChill(tempC, speedKmh) {
    return (13.12 + 0.6215*tempC - 11.37*Math.pow(speedKmh,0.16) + 0.3965*tempC*Math.pow(speedKmh,0.16)).toFixed(2);
}

function displayWindChill() {
    let windChillText;

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillText = calculateWindChill(temperature, windSpeed) + " °C";
    } else {
        windChillText = "N/A";
    }

    const windChillElement = document.querySelector(".weather ul li:last-child");
    if (windChillElement) {
        windChillElement.textContent = "Wind Chill: " + windChillText;
    }
}

window.addEventListener("DOMContentLoaded", displayWindChill);