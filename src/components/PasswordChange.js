import React, { Component } from 'react';
import { auth } from '../firebase';
import { Grid, Row, Col } from 'react-flexbox-grid';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Row  center="xs">
              <form onSubmit={this.onSubmit}>
                <input 
                  className='sign'
                  value={passwordOne}
                  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                  type="password"
                  placeholder="Nueva Contraseña"
                />
                <input
                  className='sign'
                  value={passwordTwo}
                  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                  type="password"
                  placeholder="Confirma nueva contraseña"
                />
                <br />
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

export default PasswordChangeForm;