import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

// import './../css/SignIn.css';

const SignInPage = ({ history }) =>
  <Grid>
    <Row>
      <Col className="logBody" xs={12} md={12}>
        <h1>Iniciar Sesión</h1>
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
      </Col>
    </Row>
  </Grid>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Row center="xs">
              <form onSubmit={this.onSubmit}>
                <input className='sign'
                  value={email}
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  type="text"
                  placeholder="Correo Electrónico"
                />
                <input className='sign'
                  value={password}
                  onChange={event => this.setState(byPropKey('password', event.target.value))}
                  type="password"
                  placeholder="Contraseña"
                />
                <br />
                <button className='logButton' disabled={isInvalid} type="submit">
                  Ingresar!!
                </button>
                { error && <p>{error.message}</p> }
              </form>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};

