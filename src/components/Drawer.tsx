import { Offcanvas, Image, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Me from '../assets/me.jpg';
import navs from '../moks/navs';

interface IDrawer {
	show: boolean;
	handleClose: () => void;
}

const Drawer = ({ show, handleClose }: IDrawer) => {
	const navigate = useNavigate();

	return (
		<Offcanvas show={show} onHide={handleClose}>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Image src={Me} alt="me" rounded width={50} />
					<Container>
						<div>Александр</div>
						<div>zalexandr29@gmail.com</div>
					</Container>
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Nav className="flex-column">
					{navs.map((item) => (
						<Nav.Item key={item.id}>
							<Nav.Link
								onClick={() => {
									navigate(item.path);
									handleClose();
								}}
							>
								{item.title}
							</Nav.Link>
						</Nav.Item>
					))}
				</Nav>
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default Drawer;
