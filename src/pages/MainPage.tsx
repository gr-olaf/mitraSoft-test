import { Col, Container, Row } from 'react-bootstrap';
import { RxAvatar } from 'react-icons/rx';
import { postAPI } from '../services/PostsService';

const MainPage = () => {
	const { data: posts } = postAPI.useGetAllPostsQuery('');

	return (
		<Container
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
				paddingTop: '20px',
			}}
		>
			{posts &&
				posts.map((item) => (
					<Row
						style={{
							padding: '5px',
							border: '1px solid #bababa',
							borderRadius: '10px',
							boxShadow: '5px 5px 5px #cccccc5b',
						}}
					>
						<Col xs={10}>
							<h4>{item.title}</h4>
							<div>{item.body}</div>
						</Col>
						<Col>
							<div>
								<RxAvatar />
							</div>
							<div>Комментарии</div>
						</Col>
					</Row>
				))}
		</Container>
	);
};

export default MainPage;
