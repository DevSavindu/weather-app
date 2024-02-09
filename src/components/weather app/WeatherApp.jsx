import React from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import drizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import wind from "../assets/wind.png";
import snow from "../assets/snow.png";
import humidity from "../assets/humidity.png";
import sky from "../assets/Timelapse clouds Full HD Free stock footage _ Relaxing morning sky.mp4";

const WeatherApp = () => {
  let api_key = "7a82e7145e2a38e50a64ffc8ae4abf5d";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value==="") {
      return 0;
    }
    let url =`https://api.openweathermap.org/data/2.5/weather?id=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temprature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temprature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
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
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity-precent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">17 kmph</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
