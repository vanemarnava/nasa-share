import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FormImages from './FormImages'
import SelectedYear from './FormImages/SelectedYear'
import SelectedMonth from './FormImages/SelectedMonth'
import user from "./../../../img/user.svg";

class LateralMenu extends Component {
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

  render () {

    return (
      <Row>          
        <Col xs={12}>
          <img src={user} />
        </Col>         
        <Col xs={12}>
          <h4>Nechan</h4>
        </Col>
        <Col xs={12}>
          <FormImages/>
          <SelectedMonth/>
          <SelectedYear/>
        </Col>
      </Row>
    )
  }
}

export default LateralMenu;

