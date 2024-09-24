const form = document.querySelector('#searchLocation');
const searchLocation = document.querySelector('#location');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let locationURI = encodeURI(searchLocation.value);  
    console.log(locationURI);
})
