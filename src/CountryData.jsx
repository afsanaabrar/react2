import AllCountry from "./AllCountry";
import { useEffect } from "react";
import { useState } from "react"

export default  function  CountryData(){
 const [countries,setCountries]=useState([]);
 const [visitedCountries,setVisitedCountries]=useState([]);
 const [visitedFlags,setVisitedFlags]=useState([]);

 const handelVisitedFlags=(country)=>{
   const newFlags=[...visitedFlags,country]
   setVisitedFlags( newFlags)
 }

 const handelVisitedCountries=(country)=>{
    // console.log(country)
    const newVisitedCountris=[...visitedCountries,country]
    setVisitedCountries(newVisitedCountris)
 }


 useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data=>setCountries(data));
 },[])


    return(
        <div>
            <h1>AllCountry:{countries.length}</h1>
           <div>
            <h3>Visited Countries:{visitedCountries.length}</h3>
            <ul>
              {
               visitedCountries .map(tr=><li>{tr.name.common}</li>)
              }
            </ul>
           </div>
           {/* flages showing */}
           <div>
            <ul>
               {
                  visitedFlags.map(ty=><img src={ty.flags.png} height='10px'></img>)
               }
            </ul>
           </div>
           <div className="gride">
           {
              countries.map(country=><AllCountry country={country} key={country.cca3} handelVisitedCountries={handelVisitedCountries}  handelVisitedFlags={handelVisitedFlags}></AllCountry>)  
               
            }
           </div>

          
        </div>
    )
}