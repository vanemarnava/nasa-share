import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FormImages from './FormImages'
import user from "./../../../img/user.svg";

class LateralMenu extends Component {

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
        </Col>
      </Row>
    )
  }
}

export default LateralMenu;

