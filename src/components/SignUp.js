import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { auth } from '../firebase';
import { Grid, Row, Col } from 'react-flexbox-grid';
import * as routes from '../constants/routes';


const SignUpPage = ({ history }) =>
  <Grid>
    <Row>
      <Col className="logBody" xs={12} md={12}>
        <Row center="xs">
          <h1>Créate una Cuenta</h1>
          <SignUpForm history={history} />
        </Row>
      </Col>
    </Row>
  </Grid>


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
  	const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
     <Grid>
        <Row center="xs">
          <Col className="logBody" xs={12} md={12}>
              <form onSubmit={this.onSubmit}>
                <input
                  className='sign'
                  value={username}
                  onChange={event => this.setState(byPropKey('username', event.target.value))}
                  type="text"
                  placeholder="Nombre Completo"
                />
                <br />
                <input
                  className='sign'
                  value={email}
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  type="text"
                  placeholder="Correo Electrónico"
                />
                <br />
                <input
                  className='sign'
                  value={passwordOne}
                  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                  type="password"
                  placeholder="Contraseña"
                />
                <br />
                <input
                  className='sign'
                  value={passwordTwo}
                  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                  type="password"
                  placeholder="Confirma Contraseña"
                />
                <br />
                <button className='logButton' disabled={isInvalid} type="submit">
                  Sign Up
                </button>       
                { error && <p>{error.message}</p> }
              </form>
          </Col>
        </Row>
     </Grid>
    );
  }
}

const SignUpLink = () =>
  <p>
    Aún no tienes una cuenta??
    {' '}
    <Link to={routes.SIGN_UP}>Créala!!</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};