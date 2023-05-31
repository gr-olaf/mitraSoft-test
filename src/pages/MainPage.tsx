import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { RxAvatar } from 'react-icons/rx';
import { postAPI } from '../services/PostsService';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '../components/ModalWindow';
import { useAppDispatch, useAppSelector } from '../utils/hooks/redux';
import { setCurrentPost } from '../store/slices/PostSlice';
import { commentAPI } from '../services/CommentService';
import PostItem from '../components/PostItem';
import SpinnerComponent from '../components/SpinnerComponent';

const MainPage = () => {
	const postId = useAppSelector((state) => state.postReducer.postId);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { data: posts, isLoading: postsIsLoading } =
		postAPI.useGetAllPostsQuery('');
	const { data: comments, isLoading: commentsIsLoading } =
		commentAPI.useGetCommentByIdQuery(postId);

	const [modalShow, setModalShow] = useState(false);

	const handleOpenModal = (postId: number) => {
		setModalShow(true);
		dispatch(setCurrentPost(postId));
	};

	const handleNavigate = (userId: number) => {
		navigate(`/user/${userId}`);
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
			{postsIsLoading && <SpinnerComponent />}
			{posts?.map((item) => (
				<PostItem
					key={item.id}
					item={item}
					avatar={<RxAvatar />}
					handleNavigate={handleNavigate}
					handleOpenModal={handleOpenModal}
					withSide
				/>
			))}
			<ModalWindow
				show={modalShow}
				onHide={() => setModalShow(false)}
				comments={comments}
				isLoading={commentsIsLoading}
			/>
		</Container>
	);
};

export default MainPage;
