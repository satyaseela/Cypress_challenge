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
      });
  it.only('Handles Unexpected API Response', () => {
        const city = 'Cairo';
        const apiKey = '300532edc3ad967d8a7995da10cb7d9d';
          // Mock the location API response with an unexpected or invalid payload
          cy.intercept('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
           {
            statusCode: 500, // Simulate a server error
            body: 'Invalid location data', // Unexpected response data
          }).as('locationRequest');
      
          // Visit the page or perform the action that mocks the location
          cy.visit('http://localhost:3000/weather'); // Replace with the actual app URL
      
          // Ensure that the app handles the unexpected response appropriately
          cy.wait('@locationRequest').then((interception) => {
            // Assert that the app displays an error message or handles the error as expected
            expect(interception.response.statusCode).to.equal(500); // Check for the expected status code
            expect(interception.response.body).to.include('Invalid location data'); // Check for the expected error message
            // Add additional assertions as needed
          });
      
          // You can also test other parts of the application to ensure it remains functional after the error
        });
      });
      
    })
 