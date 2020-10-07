import React from "react";
import WeatherSearch from "./WeatherSearch";
import WeatherTable from "./WeatherTable";
import WeatherDetail from "./WeatherDetail";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      country: "",
      city: [],
      list: [],
      selectedIndex: null,
      selectedDetail: null,
      isLoaded: false,
    };
  }

  handleSearch = (name, country) => {
    console.log("handleSearch " + name + ", " + country);
    this.setState({
      name: name,
      country: country,
      isLoaded: false,
    });

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${name}&appid=9fd7a449d055dba26a982a3220f32aa2&units=metric`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            city: result.city, // result["city"] for square bracket notation
            list: result.list, // result["list"]
            isLoaded: true,
          });
          console.log(JSON.stringify(result));
        },
        (error) => {
          this.setState({
            city: [],
            list: [],
            isLoaded: true,
            error,
          });
        }
      );
  };

  selectDetail = (key) => {
    console.log("selected index " + key);
    let selectedDetail = this.state.list.filter((item, index) => key === index);
    console.log("selected object: " + JSON.stringify(selectedDetail[0]));
    this.setState({ selectedDetail: selectedDetail[0], selectedIndex: key });
  };

  render() {
    return (
      <div className="container">
        <WeatherSearch handleSearch={this.handleSearch} />
        {this.state.isLoaded && (
          <WeatherTable
            className="container"
            city={this.state.city}
            list={this.state.list}
            selectDetail={this.selectDetail}
          />
        )}
        {this.state.selectedDetail && (
          <WeatherDetail
            city={this.state.city}
            selectedDetail={this.state.selectedDetail}
          />
        )}
      </div>
    );
  }
}

export default Main;
