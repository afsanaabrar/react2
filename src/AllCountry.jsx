import { useState } from "react";

 export default function AllCountry({country,handelVisitedCountries,handelVisitedFlags}){
    // console.log(country)
    const {name, flags,population,area}=country;
      const [visited,setVisited]=useState(false)
      const handelVisited=()=>{
        setVisited(!visited)
      }
   
    return(
        <div className={`country ${visited && 'visited'}`}>
            <h3>Country Name:{name?.common}</h3>
            <img src={flags?.png} height="120px"></img>
            <h5>Population:{population}</h5>
            <h5>Area:{area}</h5>
            <button onClick={()=>handelVisitedFlags(country)}>click me</button>
            <button onClick={()=>handelVisitedCountries(country)}>Mark visited</button>
            <button onClick={handelVisited}> {visited?'GOING':'NOTGOING'}</button>
            {visited?'i have visited':'i want to go'}
           
            

            
        </div>
    )
 }