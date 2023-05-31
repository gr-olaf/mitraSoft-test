import { Button, Col, Row } from 'react-bootstrap';
import { PostsResponse } from '../models/response/PostsResponse';
import { ReactNode } from 'react';

interface IPostItem {
	item: PostsResponse;
	avatar?: ReactNode;
	handleNavigate?: (userId: number) => void;
	handleOpenModal?: (id: number) => void;
	withSide?: boolean;
}

const PostItem = ({
	item,
	handleNavigate,
	handleOpenModal,
	avatar,
	withSide,
}: IPostItem) => {
	return (
		<Row
			key={item.id}
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
			{withSide && handleNavigate && handleOpenModal && (
				<Col
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
					<div
						style={{ cursor: 'pointer' }}
						onClick={() => handleNavigate(item.userId)}
					>
						{avatar}
					</div>
					<Button
						variant="outline-secondary"
						onClick={() => handleOpenModal(item.id)}
					>
						Комментарии
					</Button>
				</Col>
			)}
		</Row>
	);
};

export default PostItem;
