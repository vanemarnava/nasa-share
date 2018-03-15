import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import UserFilter from './components/User/UserFilter.js';

class User extends Component {
  render() {
    return (
        <Grid>          
          <Row>
            <Col xs={12} md={3}>
            <UserFilter></UserFilter>
            </Col>
            <Col xs={12} md={9}>
              asdf
            </Col>
          </Row>
        </Grid>
    );
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     forecastData: null
  //   }
  // }

  // componentDidMount() {
  //  this.updateCity(this.props.city);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.city !== this.props.city) {
  //     this.setState({
  //       forecastData: null
  //     })
  //     this.updateCity(nextProps);
  //   }
  // }

  // updateCity = (city) => {
  //    const url_forecast = `${url}?q=${city}&appid=${api_key}`;
  //   fetch(url_forecast).then(data => (data.json())).then(weather_data => {
  //     console.log(weather_data);
  //     const forecastData = transformForecast(weather_data);
  //     this.setState({forecastData})
  //   })
  // }

  // renderForecastItemDays(forecastData) {
  //   return forecastData.map(forecast => (
  //     <ForecastItem key = {`${forecast.weekDay}${forecast.hour}`} weekDay = {forecast.weekDay} hour ={forecast.hour} data = {forecast.data}></ForecastItem>
  //   ))
  //   // return 'Render Items';
  //   // return (
  //   //   days.map(day => (<ForecastItem key={day} weekDay={day} hour = {10} data = {data}></ForecastItem>))
  //   //   // <ForecastItem weekDay={'Miercoles'}></ForecastItem>
  //   // )
  // }
  // renderProgress = () => {
  //   return (<h3>cargando pronostico extendido</h3>)
  // }
  // render() {
  //   const {city} = this.props;
  //   const {forecastData} = this.state;
  //   return (
  //     <div>
  //       <h2 className = 'forecastTitle'>pronostico extendido para {city}</h2>
  //       {forecastData !== null ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
  //     </div>
  //   )
  // }
}

export default User;




  