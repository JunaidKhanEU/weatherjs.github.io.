console.log(' Weather JS ')
const cityForm = document.querySelector('form');
const cardDiv = document.querySelector('.card')
const detailsDiv = document.querySelector('.details')
const timePicture = document.querySelector('.time')
const icon = document.querySelector('.icon > img')


const renderHtml = (data)=>{
    const cityDetails= data.cityDetails
    const weather = data.weather
    // update UI
    detailsDiv.innerHTML = `<h5 class="my-3"> ${cityDetails.EnglishName} </h5>
      <div class="my-3"> ${weather.WeatherText} </div>
      <div class="display-4 my-4">
        <span> ${weather.Temperature.Metric.Value} </span>
        <span>&deg;C</span>
      </div>`
    //remove d-none class if it exists
    if(cardDiv.classList.contains('d-none')){

      cardDiv.classList.remove('d-none')

    }
  
    // update Time image and icon

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    let timeSrc = null
    if(weather.IsDayTime){
      timeSrc = `img/day.svg`
    }else{
      timeSrc = `img/night.svg`
    }

    timePicture.setAttribute('src', timeSrc)
    icon.setAttribute('src', iconSrc)
}

const updateCity = async (city)=>{
  const cityId = await getCity(city)
  const weather = await getWeather(cityId.Key)
  return {
    cityDetails: cityId,
    weather:weather
  }
}


cityForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const city = cityForm.city.value.toLowerCase().trim()
  cityForm.reset()
  updateCity(city).then(data=>{
    renderHtml(data)
  }).catch(err=>console.log(err.message))
})