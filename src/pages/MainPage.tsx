import { useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { RxAvatar } from 'react-icons/rx';
import { postAPI } from '../services/PostsService';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '../components/ModalWindow';
import { useAppDispatch, useAppSelector } from '../utils/hooks/redux';
import { setCurrentPost } from '../store/slices/PostSlice';
import { commentAPI } from '../services/CommentService';
import PostItem from '../components/PostItem';
import SpinnerComponent from '../components/SpinnerComponent';
import AlertComponent from '../components/AlertComponent';

const MainPage = () => {
	const [limit, setLimit] = useState(10);
	const postId = useAppSelector((state) => state.postReducer.postId);
	const dispatch = useAppDispatch();
	const search = useAppSelector((state) => state.postReducer.search);
	const navigate = useNavigate();

	const {
		data: posts,
		isLoading: postsIsLoading,
		isError: postsIsError,
	} = postAPI.useGetAllPostsQuery(limit);
	const {
		data: comments,
		isLoading: commentsIsLoading,
		isError: commentsIsError,
	} = commentAPI.useGetCommentByIdQuery(postId);

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
			{postsIsError && <AlertComponent />}
			{postsIsLoading && <SpinnerComponent />}
			{posts
				?.filter((item) => item.title.includes(search))
				.map((item) => (
					<PostItem
						key={item.id}
						item={item}
						avatar={<RxAvatar />}
						handleNavigate={handleNavigate}
						handleOpenModal={handleOpenModal}
						withSide
					/>
				))}
			{!postsIsLoading && !postsIsError && (
				<Button
					style={{ alignSelf: 'center' }}
					variant="outline-secondary"
					onClick={() => setLimit((prev) => prev + 10)}
				>
					Загрузить больше
				</Button>
			)}
			<ModalWindow
				show={modalShow}
				onHide={() => setModalShow(false)}
				comments={comments}
				isLoading={commentsIsLoading}
				isError={commentsIsError}
			/>
		</Container>
	);
};

export default MainPage;
