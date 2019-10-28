
// Fonction appelée lors du click du bouton
function start() {
 
  city = document.getElementById('city-input').value;

  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city);
  
  
  // Appel de la fonction fetchTodayForecast
 
  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
      

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    
      
    })
    
      .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });



    // Appel de la fonction fetch3daysForecast
    apiWeather.fetch3daysForecast()
    .then(function(response){
        // Récupère la donnée d'une API
      const data2 = response.data;
      let compteur=0;

      data2.list.forEach((data2, index) => {
       compteur++;

        document.getElementById(`${compteur}-forecast-main`).innerHTML = data2.weather[0].main;
        document.getElementById(`${compteur}-forecast-more-info`).innerHTML = data2.weather[0].description;
        document.getElementById(`${compteur}-icon-weather-container`).innerHTML = apiWeather.getHTMLElementFromIcon(data2.weather[0].icon);
        document.getElementById(`${compteur}-forecast-temp`).innerHTML = `${data2.temp.day}°C`;


        
      });


    });
    console.log(apiWeather.city);


  }
