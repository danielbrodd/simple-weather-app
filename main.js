const form = document.querySelector('#searchLocation');
const searchLocation = document.querySelector('#location');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let locationURI = encodeURI(searchLocation.value);  
    console.log(locationURI);
})

const apiKey = 'KVUJK44DM3UHFUNTHD7HVLVKB';
const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}`);