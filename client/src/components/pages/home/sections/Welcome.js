import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Welcome = () => {
	return (
		<section>
			<Jumbotron className='bg-warning view_height_50'>
				<Row>
					<Col lg={6} md={6} sm={12} xs={12}>
						<h1 className='center_text'>Your health</h1>
						<h3 className='center_text'>is in good hands</h3>
					</Col>
					<Col lg='auto' md='auto' sm={6} xs={6}>
						<img src='https://i.pravatar.cc/150?img=9' alt='avatar' thumbnail />
					</Col>
				</Row>
			</Jumbotron>
		</section>
	);
};

export default Welcome;
