import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

class User extends Component {
  render() {
    return (
   		<Grid>
        <Row>
          <Col xs={12} md={6}>
            'papa'
          </Col>        
        </Row>
      </Grid>
    );
  }
}

export default User;




  