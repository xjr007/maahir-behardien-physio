import React, { Fragment } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { LinkContainer } from 'react-router-bootstrap';

import { PERSONNEL_PAGE, ABOUT_PAGE, CONTACT_PAGE } from '../routes/Routes';

const NavbarNavigation = () => {
	return (
		<Fragment>
			{' '}
			<Navbar collapseOnSelect expand='md' variant='dark' bg='dark' sticky='top'>
				<Navbar.Brand className='ml-2'>
					<strong id='underline_animation'>MAAHIR BEHARDIEN </strong>
					<br />
					<strong>PHYSIOTHERAPISTS</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className=' bold_font ml-auto'>
						<LinkContainer to='maahir-behardien-physio'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>

						<NavDropdown title='About us' id='collasible-nav-dropdown'>
							<LinkContainer to={ABOUT_PAGE}>
								<DropdownItem>Who we are</DropdownItem>
							</LinkContainer>

							<LinkContainer to={PERSONNEL_PAGE}>
								<DropdownItem>Personell</DropdownItem>
							</LinkContainer>
						</NavDropdown>
						<LinkContainer to={CONTACT_PAGE}>
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default NavbarNavigation;
