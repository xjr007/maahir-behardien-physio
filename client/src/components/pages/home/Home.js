import React, { Fragment } from 'react';
import Welcome from './sections/Welcome';
import About from './sections/About';
import Contact from './sections/Contact';

const Home = () => {
	return (
		<Fragment>
			<Welcome />
			<About />
			<Contact />
		</Fragment>
	);
};

export default Home;
