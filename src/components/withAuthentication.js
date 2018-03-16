import React from 'react';
import PropTypes from 'prop-types';
// importar firebase
import { firebase } from '../firebase';
import { Grid, Row, Col } from 'react-flexbox-grid';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
  	constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

  	getChildContext() {
    	  return {
      	  authUser: this.state.authUser,
      	};
  	}

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      return (
        <Grid>
          <Row>
            <Col>
              <Component />
            </Col>
          </Row>
        </Grid>
      );
    }
  }

   WithAuthentication.childContextTypes = {
    authUser: PropTypes.object,
  };
  
  return WithAuthentication;
}

export default withAuthentication;