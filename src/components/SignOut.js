import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { auth } from '../firebase';

const SignOutButton = () =>
	<Grid>
		<Row>
			<Col>
			  <button className='logButton two'
			    type="button"
			    onClick={auth.doSignOut}>
			    Desconectar
			  </button>
			</Col>
		</Row>
	</Grid>

export default SignOutButton;