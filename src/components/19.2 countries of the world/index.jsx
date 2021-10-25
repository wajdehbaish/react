import React, { useState, useEffect } from "react";


const CountriesOfTheWorld = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const countries = await response.json();
      setCountries(countries);
      console.log(countries)
    };
    getCountries();
  }, []);
  const handleChange = (e) => {
    const userInput = e.currentTarget.value.toLowerCase();
    const filtered = [...countries].filter((s) =>
      s.name.toLowerCase().includes(userInput)
    );

    setCountries(filtered);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
      />
      <ul>
        {countries.map((country) => (
          <li key={country.alpha2Code}>
            {country.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CountriesOfTheWorld;