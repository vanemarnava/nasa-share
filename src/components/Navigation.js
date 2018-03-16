import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';


const Navigation = (props, { authUser }) =>
  <Grid>
    <Row>
      <Col>
        { authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
        }
      </Col>
    </Row>
  </Grid>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <br />
    <li><Link to={routes.HOME}>Home</Link></li>
    <br />
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <br />
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Página Inicio</Link></li>
    <br />
    <li><Link to={routes.SIGN_IN} className='inicio' >Iniciar Sesión</Link></li>
  </ul>

export default Navigation;