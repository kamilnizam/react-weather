import React from "react";

class WeatherSearch extends React.Component {
  constructor(props) {
    super();
    // to create form:
    // 1) create states/variables based on the number of inputs that you have
    //
    this.state = {
      name: "",
      country: "",
    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
    // [name] is a variable from form name and not a state.name
  };

  // 5) Create a method handleAdd
  handleClick = (e) => {
    // Lifting up state - 3) In child, call the props
    // Lifting up state - 4) Pass the items to be sent to parent in arguments

    this.props.handleSearch(this.state.name, this.state.country);

    console.log("name: " + this.state.name);
    console.log("country: " + this.state.country);

    // let getWeather = async () => {
    //   const api_call = await fetch(
    //     "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
    //       this.state.name +
    //       "&appid=9fd7a449d055dba26a982a3220f32aa2"
    //   );

    //   const response = await api_call.json();
    //   console.log(response);
    // };
  };

  render() {
    return (
      <div className="my-5">
        <h2>Search City:</h2>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="City"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="country"
              id="country"
              placeholder="Country"
              value={this.state.country}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

export default WeatherSearch;
