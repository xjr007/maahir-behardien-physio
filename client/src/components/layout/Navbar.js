import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarNavigation = () => {
	return (
		<Fragment>
			{' '}
			<Navbar
				expand='sm'
				variant='dark'
				bg='dark'
				sticky='top'
				className='bold_font'>
				<Navbar.Brand href='#home'>
					<h2 className='ml-3 pt-1'>Home</h2>
				</Navbar.Brand>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='#Staff'>Staff</Nav.Link>
						<Nav.Link href='#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default NavbarNavigation;
