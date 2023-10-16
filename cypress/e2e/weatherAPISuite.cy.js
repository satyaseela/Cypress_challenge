//API testing, write a regression suite with validations for 3-4 cities.
describe('Weather Forecast API Test Regression Test', () => {
    it('Should get weather data for 4 cities', () => {
      const cities = ['Cairo', 'Masco', 'Delhi', 'Oslo' ];
      const apiKey = '300532edc3ad967d8a7995da10cb7d9d'; // Replace with your OpenWeatherMap API key
      cities.forEach((city) => {
        cy.request({
          method: 'GET',
          url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        }).then((response) => {
          expect(response.status).to.eq(200); // Checking if the API request was successful with HTTP Code 200
          expect(response.body.name).to.eq(city); // Checking if the city name in the response matches the requested city
          expect(response.body.weather).to.be.an('array'); // Ensure there is weather data
          const weatherDescription = response.body.weather[0].description;
          const temperature = response.body.main.temp;
          const humidity = response.body.main.humidity;
          const sunrise = response.body.sys.sunrise;
          const sunset = response.body.sys.sunset;
          // Log weather details for the city
          cy.log('------------------------------------------');
          cy.log(`Weather in ${city}: ${weatherDescription}`)
          cy.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%`)
          cy.convertSunrise(sunrise).then((convertSunrise) => {
            cy.log(`Sunrise at: ${convertSunrise}`);
          })
          cy.convertSunset(sunset).then((convertSunset) => {
            cy.log(`Sunset at: ${convertSunset}`);
          })
          /* cy.log (`Sunrise: ${sunrise}, Sunset:${sunset}`) */
          cy.log('------------------------------------------');
          
        });
      })
    })
  });