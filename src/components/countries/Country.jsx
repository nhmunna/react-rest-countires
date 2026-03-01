import { useState } from "react";

const Country = ({ country }) => {
  console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    console.log("Clicked on");
    setVisited(!visited);
  };
  return (
    <div className="border-4 border-double outline-4 outline-offset-1 shadow-lg inset-shadow-sm inset-shadow-indigo-500/50 text-shadow-lg/20 text-xl font-stretch-expanded text-wrap bg-linear-65 from-purple-500 to-pink-500 text-white border-purple-500 drop-shadow-xl leading-8 rounded-b-lg p-4 ">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3 className="pt-4">Name: {country.name.common}</h3>
      <h3>Capital: {country.capital.capital[0]}</h3>
      <p>Continents: {country.continents.continents[0]}</p>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area}</p>
      {Object.keys(country.currencies.currencies).map((key) => (
        <p key={key}>
          Currency: {country.currencies.currencies[key].symbol}{" "}
          {country.currencies.currencies[key].name}
        </p>
      ))}
      <p>Language:</p>
      {Object.keys(country.languages.languages).map((key) => (
        <ol key={key}>
          <li>{country.languages.languages[key]}</li>
        </ol>
      ))}
      <p>Region: {country.region.region}</p>
      <button
        onClick={handleVisited}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
