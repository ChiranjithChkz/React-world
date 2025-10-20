import React from 'react';
import './country.css';

const Country = ({ country }) => {

    console.log(country.languages.languages.eng)

    const handleVisited = () =>{
        console.log("Button Clicked");
    }
    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <p>Name: {country.name.common}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Languages: {country.region.region}</p>
            <p>Area: {country.area.area}   {country.area.area > 3000 ? " ⭐Big country" : "😒Small country"}</p>

            <button onClick={handleVisited}>👩 Not visited</button>

        </div>
    );
};

export default Country;


/**
 * 1.inline css
 * 2.
 */