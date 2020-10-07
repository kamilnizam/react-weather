import React from "react";

const WeatherDetail = (props) => {
  return (
    <div className="card my-5 py-5 px-5">
      <h2>{props.city.name + ", " + props.city.country}</h2>
      <h3>{new Date(props.selectedDetail.dt * 1000).toDateString()}</h3>
      <h4>
        {" "}
        {props.selectedDetail.weather[0].main +
          " : " +
          props.selectedDetail.weather[0].description +
          " "}
        <img
          src={`http://openweathermap.org/img/wn/${props.selectedDetail.weather[0].icon}@2x.png`}
          alt="Weather Icon"
        />
      </h4>
      <h4>Temperature:</h4>
      <ul>
        <li>Day: {props.selectedDetail.temp.day} &#8451; </li>
        <li>Min: {props.selectedDetail.temp.min} &#8451; </li>
        <li>Max: {props.selectedDetail.temp.max} &#8451; </li>
        <li>Night: {props.selectedDetail.temp.night} &#8451; </li>
        <li>Evening: {props.selectedDetail.temp.eve} &#8451; </li>
        <li>Morning: {props.selectedDetail.temp.morn} &#8451; </li>
      </ul>
      <h4>Feels Like:</h4>
      <ul>
        <li>Day: {props.selectedDetail.feels_like.day} &#8451; </li>
        <li>Night: {props.selectedDetail.feels_like.night} &#8451; </li>
        <li>Evening: {props.selectedDetail.feels_like.eve} &#8451; </li>
        <li>Morning: {props.selectedDetail.feels_like.morn} &#8451; </li>
      </ul>
      <h4>Pressure: {props.selectedDetail.pressure}</h4>
      <h4>Humidity: {props.selectedDetail.humidity}</h4>
    </div>
  );
};

export default WeatherDetail;
