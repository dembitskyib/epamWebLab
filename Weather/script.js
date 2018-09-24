function getWeatherInfo(cityName, currentSection) {
    var request = new XMLHttpRequest();
    var id = "1cbb9d3c2d3d13f34be51c51afe4b6cb";
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&APPID=" + id;
    request.open('GET', url, true);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState != 4) return;
        if (request.status == 200) {
            var data = JSON.parse(this.response);
            console.log(currentSection);
            currentSection.getElementsByClassName("card-temp box-highlight")[0].innerHTML = data.main.temp.toFixed(1);
            currentSection.getElementsByClassName("card-info")[0].innerHTML = data.weather[0].main + ", " + data.weather[0].description;
        } else {
            console.log("error");
            document.getElementsByClassName("card-wrapper")[0].removeChild(currentSection);
        }
    }
}

function renewIcons(currentSection) {
    var defaultClassName = "weather-pic icon";
    var cardInfo = currentSection.getElementsByClassName("card-info")[0].innerText;
    cardInfo = cardInfo.substring(0, cardInfo.indexOf(","));
    var weatherPictureContainer = currentSection.getElementsByClassName("weather-pic")[0];
    weatherPictureContainer.innerHTML = "";
    switch (cardInfo.toLowerCase()) {
        case "clear":
            setSunnyWeather(weatherPictureContainer, defaultClassName);
            break;
        case "clouds":
            setCloudyWeather(weatherPictureContainer, defaultClassName);
            break;
        case "rain":
            setRainyWeather(weatherPictureContainer, defaultClassName);
            break;
        case "snow":
            setSnowyWeather(weatherPictureContainer, defaultClassName);
            break;
        case "extreme":
            setExtremeWeather(weatherPictureContainer, defaultClassName);
            break;
        default:
            setSunnyWeather(weatherPictureContainer, defaultClassName);
    }
}

function setSunnyWeather(weatherPictureContainer, defaultClassName) {
    var sunClass = document.createElement("div");
    sunClass.className = "sun";
    var raysClass = document.createElement("div");
    raysClass.className = "rays";
    weatherPictureContainer.className = defaultClassName + " sunny";
    sunClass.appendChild(raysClass);
    weatherPictureContainer.appendChild(sunClass);
}

function setCloudyWeather(weatherPictureContainer, defaultClassName) {
    var firstCloudClass = document.createElement("div");
    firstCloudClass.className = "cloud";
    var secondCloudClass = document.createElement("div");
    secondCloudClass.className = "cloud";
    weatherPictureContainer.className = defaultClassName + " cloudy";
    weatherPictureContainer.appendChild(firstCloudClass);
    weatherPictureContainer.appendChild(secondCloudClass);
}

function setRainyWeather(weatherPictureContainer, defaultClassName) {
    var cloudClass = document.createElement("div");
    cloudClass.className = "cloud";
    var rainClass = document.createElement("div");
    rainClass.className = "rain";
    weatherPictureContainer.className = defaultClassName + " rainy";
    weatherPictureContainer.appendChild(cloudClass);
    weatherPictureContainer.appendChild(rainClass);
}
function setSnowyWeather(weatherPictureContainer, defaultClassName) {
    var cloudClass = document.createElement("div");
    cloudClass.className = "cloud";
    var firstFlakeClass = document.createElement("div");
    firstFlakeClass.className = "flake";
    var secondFlakeClass = document.createElement("div");
    secondFlakeClass.className = "flake";
    var snowClass = document.createElement("div");
    snowClass.className = "snow";
    weatherPictureContainer.className = defaultClassName + " flurries";
    snowClass.appendChild(firstFlakeClass);
    snowClass.appendChild(secondFlakeClass);
    weatherPictureContainer.appendChild(snowClass);
    weatherPictureContainer.appendChild(cloudClass);
}
function setExtremeWeather(weatherPictureContainer, defaultClassName) {
    var cloudClass = document.createElement("div");
    cloudClass.className = "cloud";
    var firstBoltClass = document.createElement("div");
    firstBoltClass.className = "bolt";
    var secondBoltClass = document.createElement("div");
    secondBoltClass.className = "bolt";
    var lightningClass = document.createElement("div");
    lightningClass.className = "lightning";
    weatherPictureContainer.className = defaultClassName + " thunder-storm";
    lightningClass.appendChild(firstBoltClass);
    lightningClass.appendChild(secondBoltClass);
    weatherPictureContainer.appendChild(cloudClass);
    weatherPictureContainer.appendChild(lightningClass);
}


function renewWeather() {
    let nameHeadersList = document.getElementsByClassName("card-header");
    for (var i = 0; i < nameHeadersList.length; i++) {
        getWeatherInfo(nameHeadersList[i].innerHTML, document.getElementsByClassName("card anim-flip")[i]);
        renewIcons(document.getElementsByClassName("card anim-flip")[i]);
    }
}

function addCity() {
    let citiesContainer = document.getElementsByClassName("card-wrapper")[0];
    let citySection = document.createElement("section");
    citySection.className = "card anim-flip anim-flip-card-2";
    let cityHeader = document.createElement("header");
    let cityName = document.createElement("h1");
    let cityNameValue = document.getElementById("cityInput");
    cityName.innerText = cityNameValue.value;
    cityNameValue.value = "";
    cityName.className = "card-header";
    cityHeader.appendChild(cityName);
    let tempParagraph = document.createElement("p");
    tempParagraph.className = "card-temp box-highlight";
    let weatherIcon = document.createElement("div");
    weatherIcon.className = "weather-pic";
    let infoParagraph = document.createElement("p");
    infoParagraph.className = "card-info";
    citySection.appendChild(cityHeader);
    citySection.appendChild(tempParagraph);
    citySection.appendChild(weatherIcon);
    citySection.appendChild(infoParagraph);
    citiesContainer.appendChild(citySection);
    renewWeather();
}


setInterval(renewWeather, 1000 * 60 * 5);
renewWeather();