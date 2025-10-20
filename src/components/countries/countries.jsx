import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])
    
    const handleVisitedCountries = (country) => {
        console.log("handle visited countries", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        
        
        
    }
    
    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    console.log(countries,);
    return (
        <div>
            <h1>IN THE countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total visited countries: {visitedFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(country  => <li  key={country.cca3.cca3}>{country.name.common}</li>)
                    
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlag.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className='countries' >
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    >
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;