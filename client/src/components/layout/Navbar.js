import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PERSONNEL_PAGE, ABOUT_PAGE, CONTACT_PAGE } from '../routes/Routes';

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
						<NavLink className='nav-link' to='maahir-behardien-physio'>
							Home
						</NavLink>

						<NavDropdown title='About us' id='collasible-nav-dropdown'>
							<NavLink className='dropdown-item' to={ABOUT_PAGE}>
								What we do
							</NavLink>{' '}
							<NavLink className='dropdown-item' to={PERSONNEL_PAGE}>
								Personnel
							</NavLink>
						</NavDropdown>

						<NavLink className='nav-link' to={CONTACT_PAGE}>
							Contact
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default NavbarNavigation;
