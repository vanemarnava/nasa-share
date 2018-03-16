import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = (props, { authUser }) =>
	<Grid>
		<Row>
			<Col xs={12} md={12}>
		    <Row center="xs">
		    	<h1>Account: {authUser.email}</h1>
		    	<PasswordForgetForm />
		    	<PasswordChangeForm />
		    </Row>
			</Col>
		</Row>
	</Grid>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);