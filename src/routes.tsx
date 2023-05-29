import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

export const routes = [
	{
		path: '/',
		Component: <MainPage />,
	},
	{
		path: '/about',
		Component: <AboutPage />,
	},
	{
		path: '/user' + '/:id',
		Component: <UserPage />,
	},
];
