import { ReactNode } from 'react';
import Header from './Header';

interface ILayout {
	children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
