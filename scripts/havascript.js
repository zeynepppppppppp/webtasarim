function showWeather() {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("weatherResult");
  
    const weatherData = {
      paris: { temp: "18°C", condition: "Güneşli" },
      stockholm: { temp: "12°C", condition: "Bulutlu" },
      tokyo: { temp: "25°C", condition: "Parçalı Bulutlu" },
      rome: { temp: "22°C", condition: "Açık" },
      warsaw: { temp: "16°C", condition: "Yağmurlu" }
    };
  
    if (weatherData[city]) {
      resultDiv.innerHTML = `
        <h3>${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
        <p>Sıcaklık: ${weatherData[city].temp}</p>
        <p>Durum: ${weatherData[city].condition}</p>
      `;
    } else {
      resultDiv.innerHTML = "";
    }
  }
  