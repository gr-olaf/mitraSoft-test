import { Col, Row } from 'react-bootstrap';
import { CommentResponse } from '../models/response/CommentResponse';

interface ICommentItem {
	item: CommentResponse;
}

const CommentItem = ({ item }: ICommentItem) => {
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
			<Col>
				<h4>{item.email}</h4>
				<div>{item.body}</div>
			</Col>
		</Row>
	);
};

export default CommentItem;
