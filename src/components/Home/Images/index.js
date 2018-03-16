import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

class Images extends Component {

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentWillMount() {
    let d = new Date();
    let arrMonth = ['01','02','03','04','05','06','07','08','09','10','11','12',];
    let toDay = d.getDate();
    let toMonth = d.getMonth();
    let toYear = d.getFullYear();
    if (toDay < 10) {
      toDay = '0' + toDay;
    };
    let url = `https://api.nasa.gov/planetary/apod?date=${toYear}-${arrMonth[toMonth]}-${toDay}&api_key=Tqbm56QokO6KA0u6wjbcnSVeiYwlsq9dNK46y7fE`;

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {        
        this.setState({ data: data })
      })
  }

  render() {
    console.log(this.state.data);
    const title = this.state.data.title;
    const image = this.state.data.url;
    const explanation = this.state.data.explanation;
    const date = this.state.data.date;

    if (Object.keys(this.state.data).length > 0) {
      return (
        
        <div className="container-fluid">
          <h1>Imagen del día / {date}</h1>
          <h2>{title}</h2>
          <img src={image}/>
          {explanation}
        </div>
      )
    } else {
      return <p className="text-center">Cargando imagen...</p>
    }
  }

}

Images.propTypes = {
  toDay: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
  })
}

export default Images;