import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import logo from './../img/logo.png';

import './../css/Landing.css';

const LandingPage = () =>
  <div>
  	<Grid>
      <Row>
        <Col className="logBody" xs={12} md={12}>
        	<img src={logo} alt='nasa-logo' className='nasa-logo'/>
          <h2 className="nasaTitle">Nasa Share</h2>
          <p> Nasa Share es un lugar en donde los amantes del infinito universo pueden disfrutar de las maravillosas imagenes que diariamente desde el año 1995 la Nasa comparte con el mundo entero. Que esperas para unirte?</p>
        </Col>
      </Row>
    </Grid>
  </div>

export default LandingPage;