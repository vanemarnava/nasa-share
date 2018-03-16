import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


class Images extends Component {

  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentWillMount() {
    fetch('https://api.nasa.gov/planetary/apod?date=2012-12-12&api_key=Tqbm56QokO6KA0u6wjbcnSVeiYwlsq9dNK46y7fE')
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
    if (Object.keys(this.state.data).length > 0) {

      return (
        <div className="container-fluid">
          {title}
          <img src={image}/>
        </div>
      )
    } else {
      return <p className="text-center">Cargando imagen...</p>
    }
  }

}

export default Images;