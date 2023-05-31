import { Button, Modal } from 'react-bootstrap';
import { CommentResponse } from '../models/response/CommentResponse';
import CommentItem from './CommentItem';
import SpinnerComponent from './SpinnerComponent';

interface IModalWindow {
	comments: CommentResponse[] | undefined;
	show: boolean;
	onHide: () => void;
	isLoading: boolean;
}

const ModalWindow = (props: IModalWindow) => {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Комментарии
				</Modal.Title>
			</Modal.Header>
			<Modal.Body
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					paddingInline: '20px',
				}}
			>
				{props.isLoading && <SpinnerComponent />}
				{props.comments &&
					props.comments.map((item) => (
						<CommentItem item={item} key={item.id} />
					))}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Закрыть</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalWindow;
