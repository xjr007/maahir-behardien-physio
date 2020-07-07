import React, { Fragment } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';

import Container from 'react-bootstrap/Container';

import Home from './components/pages/Home';

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Container fluid>
				<Home />
			</Container>
		</Fragment>
	);
};

export default App;
