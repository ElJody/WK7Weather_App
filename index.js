//import XMLHttpRequest from 'xmlhttprequest'
const api = '8e19e017aa9847858491e8a7fcacc257'

// document.getElementById('search').onclick = function(event) {
//     event.stopPropagation();
//     event.preventDefault();
//     const  city = document.getElementById('city')[0].value;
//     doAPICall(city);
// }
const doAPICall = async (city)=> {
    let result = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api +"&units=imperial");    
    console.log(result);
    const high = document.getElementById('high');
    high.innerText =  result.data.main.temp_max + ' °F'

    const low = document.getElementById('low');
    low.innerText =  result.data.main.temp_min + ' °F'

    const humidity = document.getElementById('humidity');
    humidity.innerText =  result.data.main.humidity + ' %'

    const forecast = document.getElementById('forecast');
    forecast.innerText =  result.data.weather[0].description

   }

