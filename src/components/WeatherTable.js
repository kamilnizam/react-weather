import React from "react";

function WeatherTable({ city, list, selectDetail }) {
  //   handleRowClick = () => {
  //     // Lifting up state - 3) In child, call the props
  //     // Lifting up state - 4) Pass the items to be sent to parent in arguments

  //     this.props.selectWod(this.key);
  //   };

  console.log("weatherTable list:" + JSON.stringify(list));
  return (
    <div className="my-5">
      <h2>7-day Forecast for {city.name + ", " + city.country} </h2>
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr className="bg-info">
            <th className="text-center">Date</th>
            <th className="text-center">Temperature &#8451; (Min / Max)</th>
            <th>Weather Description</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} onClick={() => selectDetail(index)}>
              <td className="text-center">
                {new Date(item.dt * 1000).toDateString()}
              </td>
              <td className="text-center">
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="Weather Icon"
                />
                {item.temp.min} &#8451; / {item.temp.max} &#8451;
              </td>
              <td>
                {item.weather[0].main + " : " + item.weather[0].description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
