import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from '../routes';

const AppRouter = () => {
	return (
		<Container style={{ marginTop: '55px' }}>
			<Routes>
				{routes.map(({ path, Component }) => (
					<Route path={path} element={Component} key={path} />
				))}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Container>
	);
};

export default AppRouter;
