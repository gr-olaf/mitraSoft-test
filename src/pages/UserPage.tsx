import { useNavigate, useParams } from 'react-router-dom';
import { userAPI } from '../services/UserService';
import { Button, Container, Row } from 'react-bootstrap';
import UserCard from '../components/UserCard';
import { postAPI } from '../services/PostsService';
import PostItem from '../components/PostItem';
import SpinnerComponent from '../components/SpinnerComponent';
import AlertComponent from '../components/AlertComponent';

const UserPage = () => {
	const navigate = useNavigate();
	const { userId } = useParams();
	if (!userId) return <></>;

	const {
		data: user,
		isLoading: userIsLoading,
		isError: userIsError,
	} = userAPI.useGetUserByIdQuery(+userId);
	const {
		data: posts,
		isLoading: postsIsLoading,
		isError: postsIsError,
	} = postAPI.useGetPostByIdQuery(+userId);

	const handleNavigateBack = () => {
		navigate('/');
	};

	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				paddingBlock: '20px',
			}}
		>
			<Button
				variant="outline-secondary"
				style={{ alignSelf: 'start' }}
				onClick={handleNavigateBack}
			>
				Назад
			</Button>
			{userIsError && <AlertComponent />}
			{userIsLoading && <SpinnerComponent />}
			{user && <UserCard user={user} />}
			<Container
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					paddingBlock: '20px',
				}}
			>
				<Row>Посты</Row>
				{postsIsError && <AlertComponent />}
				{postsIsLoading && <SpinnerComponent />}
				{posts?.map((item) => (
					<PostItem item={item} key={item.id} />
				))}
			</Container>
		</Container>
	);
};

export default UserPage;
