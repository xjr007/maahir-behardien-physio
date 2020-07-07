import React from 'react';
import logo from '../../assets/img/MBP_Logo.png';

const Welcome = () => {
	return (
		<div>
			<div>
				<img src={logo} alt='Logo' className='logo' />
			</div>
			<div>
				<h3>Intro message here</h3>
			</div>
		</div>
	);
};

export default Welcome;
