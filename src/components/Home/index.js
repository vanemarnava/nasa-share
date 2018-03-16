import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import withAuthorization from './../withAuthorization.js';
import Images from './Images';
import LateralMenu from './LateralMenu';
import './Home.css';

class HomePage extends Component {

	render () {
		return (
			 <Grid>
        <Row>
          <Col className="userLeft" xs={12} md={3}>
          <LateralMenu/>
          </Col>
          <Col className="imageRight" xs={12} md={9}>
            <Images/>
          </Col>
        </Row>
      </Grid>
		)
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);