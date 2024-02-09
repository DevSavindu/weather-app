import React from 'react'
import './WeatherApp.css'
import search from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
import drizzle from "../assets/drizzle.png"
import rain from "../assets/rain.png"
import wind from "../assets/wind.png"
import snow from "../assets/snow.png"
import humidity from "../assets/humidity.png"


const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='top-bar'>  
        <input type="text" className='cityInput' placeholder='Search' /> 
            <div className='search-icon'>
                <img src={search} alt="" />

            </div>
      </div>
      <div className='weather-image'>
        <img src={cloud} alt="" />
      </div>
      <div className='weather-temp'>24c</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        
      </div>
    </div>
  )
}

export default WeatherApp
