import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto bold_font'>
						<Nav.Link>
							<Link to={HOME_PAGE}>Home</Link>
						</Nav.Link>

						<NavDropdown title='About us' id='basic-nav-dropdown'>
							{/* <Link to={ABOUT_PAGE}>About</Link> */}
							<NavDropdown.Item>
								{' '}
								<Link to={ABOUT_PAGE}>What we do</Link>
							</NavDropdown.Item>
							<NavDropdown.Item>
								<Link to={PERSONNEL_PAGE}>Personnel</Link>
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link>
							<Link to={CONTACT_PAGE}>Contact</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};

export default NavbarNavigation;
