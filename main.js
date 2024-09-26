const form = document.querySelector('#searchLocation');
const searchLocation = document.querySelector('#location');
const tempText = document.querySelector('#temp');
const currentCondition = document.querySelector('#currCond');
const descriptionText = document.querySelector('#description');
const where = document.querySelector('.where a')
const img = document.querySelector('#icon')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let locationURI = encodeURI(searchLocation.value);  
    console.log(locationURI);

    getWeather(locationURI);
})


// const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}`);


async function getWeather(location) {
    const apiKey = 'KVUJK44DM3UHFUNTHD7HVLVKB';
    const googleMapsApi = "https://www.google.com/maps/search/?api=1&query="
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}`, {
        mode:"cors"
    })

    const result = await response.json()

    let weather = {where: result.resolvedAddress, temp: result.currentConditions.temp, condition: result.currentConditions.conditions, description: result.description, icon: result.currentConditions.icon}
    console.log(weather)

    tempText.textContent = `${weather.temp}°C`;
    currentCondition.textContent = weather.condition;
    descriptionText.textContent = weather.description

    let whereURI = encodeURI(weather.where);
    let mapSearch = googleMapsApi + whereURI;
    
    where.textContent = weather.where;
    where.href = mapSearch;
    
    switchBackground(weather.icon);


};


function switchBackground(condition) {
    let icon; 
    
    switch (condition) {
        case "snow":
            icon = "/icons/snow.svg"
            break;
        case "clear-day":
            icon = "/icons/clear-day.svg"
            break;
        case "clear-night":
            icon = "/icons/clear-night.svg"
            break;
        case "cloudy":
            icon = "/icons/cloudy.svg"
            break;
        case "fog":
            icon = "/icons/fog.svg"
            break;
        case "partly-cloudy-day":
            icon = "/icons/partly-cloudy-day.svg"
            break;
        case "partly-cloudy-night":
            icon = "/icons/partly-cloudy-night.svg"
            break;
        case "rain":
            icon = "/icons/rain.svg"
            break;
        case "wind":
            icon = "/icons/wind.svg"
            break;
    
        default:
            icon = "/icons/cloudy.svg"
            break;
    }
    img.src = icon;

}