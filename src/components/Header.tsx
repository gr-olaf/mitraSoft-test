import { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { RxHamburgerMenu } from 'react-icons/rx';
import Drawer from './Drawer';
import { useAppDispatch } from '../utils/hooks/redux';
import { setSearchPost } from '../store/slices/PostSlice';
import SearchComponent from './SearchComponent';

const Header = () => {
	const [show, setShow] = useState(false);
	const [search, setSearch] = useState('');

	const dispatch = useAppDispatch();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSearch = (e: any) => {
		if (e.key === 'Enter') {
			dispatch(setSearchPost(search));
		}
	};

	const handleClearSearch = () => {
		setSearch('');
		dispatch(setSearchPost(''));
	};

	return (
		<Container>
			<Navbar expand="lg" variant="light" bg="dark" fixed="top">
				<Container>
					<Button variant="outline-light" onClick={handleShow}>
						<RxHamburgerMenu />
					</Button>
					<SearchComponent
						search={search}
						setSearch={setSearch}
						handleSearch={handleSearch}
						handleClearSearch={handleClearSearch}
					/>
				</Container>
			</Navbar>
			<Drawer show={show} handleClose={handleClose} />
		</Container>
	);
};

export default Header;
