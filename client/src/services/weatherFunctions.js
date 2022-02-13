const getYourLocation = () => {
  window.navigator.geolocation.getCurrentPosition(successfulLookup, unsuccessfulLookup)
}

const successfulLookup = async yourLocation => {
  const latitude = yourLocation.coords.latitude
  const longitude = yourLocation.coords.longitude
  
  try {
    const response = await fetch (`/api/v1/weather/${latitude}&${longitude}`)
    const body = await response.json()
    return (setForecast({
      city: body.city,
      temp: body.temp,
      description: body.description,
      icon: body.icon
    }))
  } catch(error) {
    console.error(error)
  }
}

const unsuccessfulLookup = () => {
  return console.log('Location blocked.  Please allow this site to use your location for local weather')
}

export default getYourLocation