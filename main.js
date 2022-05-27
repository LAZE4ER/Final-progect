
let btn = document.querySelector(".main__button");
let input = document.querySelector(".main__input");

function exploreHandler() {
    try {
        city = input.value;
        link = `http://api.weatherapi.com/v1/current.json?key=f22b48abdd4943b2af6165250211510&q=${city}&aqi=no`;

        const request = new XMLHttpRequest();
        request.open("GET", link, false);
        request.send();
        let data = JSON.parse(request.responseText);
        console.log(data);

        document.querySelector(".weather__country").innerHTML =
            data.location.country;

        document.querySelector(".weather__city").innerHTML = data.location.name;

        let temp = Math.round(data.current.temp_c);
        document.querySelector(".weather__temp").innerHTML = temp;

        document.querySelector(".weather__comment").innerHTML =
            data.current.condition.text;

        document.querySelector(".wind__speed").innerHTML =
            data.current.wind_kph;
            document.querySelector(".wind__direction").innerHTML =
            data.current.wind_dir
        change_window();
    } catch {
        alert("Incorrect city name!");
    }
}

btn.addEventListener("click", exploreHandler);