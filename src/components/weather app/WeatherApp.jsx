import React from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import wind_icon from "../assets/wind.png"; // Renamed wind to wind_icon
import snow from "../assets/snow.png";
import humidity_icon from "../assets/humidity.png"; // Renamed humidity to humidity_icon
import sky from "../assets/Timelapse clouds Full HD Free stock footage _ Relaxing morning sky.mp4";

const WeatherApp = () => {
  let api_key = "7a82e7145e2a38e50a64ffc8ae4abf5d";

  const search = async () => {
    try {
      const element = document.getElementsByClassName("cityInput");
      if (element.length === 0 || element[0].value === "") {
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(element[0].value)}&units=metric&appid=${api_key}`;
  
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      let data = await response.json();
      console.log("Data received:", data);
  
      const humidityElement = document.getElementsByClassName("humidity-percent");
      const windElement = document.getElementsByClassName("wind-rate");
      const temperatureElement = document.getElementsByClassName("weather-temp");
      const locationElement = document.getElementsByClassName("weather-location");
  
      humidityElement[0].innerHTML = data.main.humidity;
      windElement[0].innerHTML = data.wind.speed;
      temperatureElement[0].innerHTML = data.main.temp;
      locationElement[0].innerHTML = data.name;
    } catch (error) {
      console.error('Error occurred while fetching or processing data:', error);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  };
  
  
  

  return (
    <div className="container">
      <video autoPlay loop muted className="video-bg">
        <source src={sky} type="video/mp4" />
        {/* Add additional source tags for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" /> {/* Updated image src */}
          <div className="data">
            <div className="humidity-percent">64%</div> {/* Updated class name */}
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" /> {/* Updated image src */}
          <div className="data">
            <div className="wind-rate">17 kmph</div> {/* Updated class name */}
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
