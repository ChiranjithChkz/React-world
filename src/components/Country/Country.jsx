import React from 'react';

const Country = ({ country }) => {

    console.log(country.languages.languages.ara)
    return (
        <div >
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Name: {country.name.common}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Languages: {country.region.region}</p> 

        </div>
    );
};

export default Country;