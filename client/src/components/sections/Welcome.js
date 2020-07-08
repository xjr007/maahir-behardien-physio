import React from 'react';
import Logo from '../../assets/img/MBP_Logo.png';

const Welcome = () => {
	return (
		<div>
			<div>
				<img className='logo' src={Logo} alt='Logo' />
				<h1>Welcome</h1>
			</div>
			<div>
				<h3>Intro message here</h3>
			</div>
		</div>
	);
};

export default Welcome;
