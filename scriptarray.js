
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
   
    const countriesasia = data.filter(country => country.region === "Asia");
    console.log("Countries in Asia:", countriesasia);

    
    const countriespopulationlessthan2lakhs = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriespopulationlessthan2lakhs);

    
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
    });

  
    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    
    const countryWithUSDCurrency = data.find(country => {
      return country.currencies && country.currencies.USD;
    });
    console.log("Country that uses US dollars as currency:", countryWithUSDCurrency);
  })
  .catch(error => console.error("Error fetching data:", error));
