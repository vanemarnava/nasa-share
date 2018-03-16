import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import withAuthorization from './../withAuthorization.js';

class HomePage extends Component {

	render () {
		return (
			<Grid>
				<Row>
					<Col xs={12} md={12}>
					  <h1>Home Page</h1>
		    		<p>Estoy en el homeeeeee!!!!</p>
					</Col>
				</Row>
			</Grid>
		)
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);