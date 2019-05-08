const API = 'mAR6uxsraaU09th4C4mB1ltW6s223QsK';


//get weather 

const getWeather = async (cityId)=>{
  const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${cityId}?apikey=${API}`
  const response  = await fetch(baseUrl+query)
  const data = await response.json()
  return data[0]
}

// get city info with key
const getCity = async (city)=>{
  const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search'
  let query = `?apikey=${API}&q=${city}`
  const response = await fetch(baseUrl+query)
  const cityData = await response.json()
  
  return cityData[0]

}




