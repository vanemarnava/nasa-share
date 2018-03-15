import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import withAuthorization from './../withAuthorization.js';

class HomePage extends Component {

	render () {
		return (
			<div>
    		<h1>Home Page</h1>
    		<p>Estoy en el homeeeeee!!!!</p>
  		</div>
		)
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);