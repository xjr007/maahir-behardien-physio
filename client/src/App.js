import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';

import Container from 'react-bootstrap/Container';

import Home from './components/pages/home/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Personnel from './components/pages/Personnel';

import 'bootstrap/dist/css/bootstrap.min.css';

import { CONTACT_PAGE, ABOUT_PAGE, PERSONNEL_PAGE } from './components/routes/Routes';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Navbar />
				<Container fluid className='justify-content-center'>
					<Switch>
						<Route exact path='/maahir-behardien-physio/' component={Home} />
						<Route exact path={CONTACT_PAGE} component={Contact} />
						<Route exact path={ABOUT_PAGE} component={About} />
						<Route exact path={PERSONNEL_PAGE} component={Personnel} />
					</Switch>
				</Container>
			</Router>
		</Fragment>
	);
};

export default App;
