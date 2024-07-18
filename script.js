const button = document.getElementById('search-button')
const city = document.getElementById('city-name')
const cityNam = document.getElementById('city-Name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

async function getData(cityName){
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=1c2fc8e96a7d42bc93e115325241807&q=${cityName}&aqi=yes`
    )
    return await promise.json()
}
button.addEventListener('click', async ()=>{
 const value = city.value
 const result = await getData(value)
 cityNam.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
 cityTime.innerText = result.location.localtime
 cityTemp.innerText = result.current.temp_c
})

