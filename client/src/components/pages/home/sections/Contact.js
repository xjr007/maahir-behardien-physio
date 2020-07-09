import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
	return (
		<section>
			<Container fluid fixed='bottom' className='bg-info view_height_25'>
				<Row>
					<Col md={2}>
						<h1>Contact</h1>
					</Col>
				</Row>
				<Row>
					<Col md={6}>Col 1</Col>
					<Col md={6}>Col 2</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
