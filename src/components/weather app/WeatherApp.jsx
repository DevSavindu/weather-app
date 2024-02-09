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
import sky from "../assets/Timelapse clouds Full HD Free stock footage _ Relaxing morning sky.mp4"

const WeatherApp = () => {
  return (
    <div className='container'>
        <video autoPlay loop muted className="video-bg">
        <source src={sky} type="video/mp4" />
        {/* Add additional source tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
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
        <div className='element'>
            <img src="" alt=""  className='icon'/>
            <div className='data'>
                <div className='humidity-precent'>64%</div>
                <div className='text'>Humidity</div>
            </div>
        </div>
        <div className='element'>
            <img src="" alt=""  className='icon'/>
            <div className='data'>
                <div className='humidity-precent'>17 kmph</div>
                <div className='text'>Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
