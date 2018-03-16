import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { auth } from '../firebase';

const PasswordForgetPage = () =>
  <Grid>
    <Row center="xs">
      <Col xs={12} md={12}>
        <h1>Contraseña Olvidada</h1>
        <PasswordForgetForm />
      </Col>
    </Row>
  </Grid>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <Grid>
        <Row>
          <Col className="logBody" xs={12} md={12}>
            <Row center="xs">
              <form onSubmit={this.onSubmit}>
                <input className='sign'
                  value={this.state.email}
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                  type="text"
                  placeholder="Correo Electrónico"
                />
                <button className='logButton' disabled={isInvalid} type="submit">
                Resetea la contraseña
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

const PasswordForgetLink = () =>
  <Grid>
    <Row>
      <Col className='sign' xs={12} md={12}>
        <p>
          <Link to="/pw-forget">Olvidaste la contraseña?</Link>
        </p>
      </Col>
    </Row>
  </Grid>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};