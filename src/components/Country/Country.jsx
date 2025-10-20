import React, { useState } from 'react';
import './country.css';

const Country = ({ country, handleVisitedCountries, handleVisitedFlag}) => {

   // console.log(country.languages.languages.eng)

   const [visited, setVisited] = useState(false);
   console.log(handleVisitedCountries);
   
    const handleVisited = () =>{
       // setVisited(true);

     //basic system
    //    if(visited){
    //     setVisited(false);
    //    }else{
    //     setVisited(true);
    //    }

    //second system
    // setVisited(visited ? false : true);

    //third
    setVisited(!visited);
    handleVisitedCountries(country)

    }
    return (
        <div className={`country ${visited && 'country-visited'}`}> 


            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <p>Name: {country.name.common}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Languages: {country.region.region}</p>
            <p>Area: {country.area.area}   {country.area.area > 3000 ? " ⭐Big country" : "😒Small country"}</p>

            <button onClick={handleVisited}> 
                {visited === true ? "😎Visited" : " 🤔Not visited"  }
            </button>
            <button onClick={()=> { handleVisitedFlag(country?.flags?.flags?.png)}}>
                Add VIsited Flag
            </button>

        </div>
    );
};

export default Country;


/**
 * 1.inline css
 * 2.
 */