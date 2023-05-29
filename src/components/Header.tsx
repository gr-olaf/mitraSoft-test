import { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { RxHamburgerMenu } from 'react-icons/rx';
import Drawer from './Drawer';

const Header = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container>
			<Navbar expand="lg" variant="light" bg="dark" fixed="top">
				<Container>
					<Button variant="outline-light" onClick={handleShow}>
						<RxHamburgerMenu />
					</Button>
				</Container>
			</Navbar>
			<Drawer show={show} handleClose={handleClose} />
		</Container>
	);
};

export default Header;
