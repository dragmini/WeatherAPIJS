const TOKEN = 'cac8f5b67a00d4b4cb1c5f18d2c23b22'
let btnResult = document.getElementById('btnResult')

btnResult.addEventListener('click', () => {
    getDataWeather()
})

function getDataWeather() {
    let inputValue = document.getElementById('inputCity').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${TOKEN}`

    // Простой fetch вопрос без доп настроек
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        main = data.main
        outPutWeather(main, inputValue)
    });
}

function outPutWeather(main, cityName) {
    let resultCity = document.getElementById('city')
    let resultTemp = document.getElementById('temp')

    console.log(main)
    
    resultCity.innerText = `${cityName}: `
    resultTemp.innerText = Math.ceil(main.temp - 273.15)
}