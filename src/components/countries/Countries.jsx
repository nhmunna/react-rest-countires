import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  console.log(countriesData);
  const countries = countriesData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (country) => {
    console.log("Visited country:", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  console.log(countries);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700 underline">
        Total Countries: {countries.length}
      </h2>
      <p className="text-xl font-bold mb-4 text-center text-purple-700 underline">
        Total visited Countries: {visitedCountries.length}
      </p>
      <ol>
        {
        visitedCountries.map((country) => (
          <li key={country.cca3.cca3} className="text-lg font-medium mb-2 text-center text-green-700">
            {country.name.common}
          </li>
        ))  
      }
      </ol>
      
      <div className="sm:flex flex-wrap space-y-9 lg:grid grid-cols-3 gap-8">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
