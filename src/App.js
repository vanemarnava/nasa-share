import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            'papa'
          </Col>
          <Col xs={12} md={6}>
          'pepe'
          </Col>          
        </Row>
      </Grid>
    );
  }
}

export default App;
