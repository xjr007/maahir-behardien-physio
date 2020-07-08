import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	HOME_PAGE,
	PERSONNEL_PAGE,
	ABOUT_PAGE,
	CONTACT_PAGE,
} from '../routes/Routes';

const NavbarNavigation = () => {
	return (
		<Fragment>
			{' '}
			<Navbar expand='sm' variant='dark' bg='dark' sticky='top'>
				<Navbar.Brand className=''>
					<h4>MB Physiotherapists</h4>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto bold_font'>
						<Nav.Link href={HOME_PAGE}>Home</Nav.Link>

						<NavDropdown title='About us' id='collasible-nav-dropdown'>
							<NavDropdown.Item href={ABOUT_PAGE}>What we do </NavDropdown.Item>
							<NavDropdown.Item href={PERSONNEL_PAGE}>Personnel</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href={CONTACT_PAGE}>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default NavbarNavigation;
