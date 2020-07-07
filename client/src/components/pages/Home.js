import React, { Fragment } from 'react';
import Contact from '../sections/Contact';
import Welcome from '../sections/Welcome';

const Home = () => {
	return (
		<Fragment>
			<section className='container d-flex align-items-center justify-content-center mt-5 bg-danger'>
				<Welcome />
			</section>
			<section className='bg-success'>
				<h1>About section</h1>
			</section>
			<section>
				<Contact />
			</section>
		</Fragment>
	);
};

export default Home;
