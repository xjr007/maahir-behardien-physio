import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Welcome = () => {
	return (
		<section>
			<Container fluid className='bg-warning view_height_50'>
				<Row className='pt-5 pb-5'>
					<Col md={{ offset: 4 }}>
						<h1>Your health</h1>
					</Col>
				</Row>
				<Row>
					<Col md={{ offset: 4 }}>
						<h1>is in good hands</h1>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Welcome;
