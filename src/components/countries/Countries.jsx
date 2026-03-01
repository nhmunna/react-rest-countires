import { use } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  console.log(countriesData);
  const countries = countriesData.countries;

  console.log(countries);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-700 underline">
        Total Countries: {countries.length}
      </h2>
      <div className="sm:flex flex-wrap space-y-9 lg:grid grid-cols-3 gap-8">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
