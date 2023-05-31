import { Card, Col, Row } from 'react-bootstrap';
import { UserResponse } from '../models/response/UserResponse';

interface IUserCard {
	user: UserResponse[];
}

const UserCard = ({ user }: IUserCard) => {
	return (
		<Card>
			<Card.Header>
				<Row>
					<Col>{user[0].username}</Col>
					<Col>{user[0].email}</Col>
				</Row>
			</Card.Header>
			<Card.Body>
				<Row>
					<Col>Основная информация</Col>
					<Col>
						<Col>
							<Row>
								<Col>Имя</Col>
								<Col>{user[0].name}</Col>
							</Row>
						</Col>
						<Col>
							<Row>
								<Col>Телефон</Col>
								<Col>{user[0].phone}</Col>
							</Row>
						</Col>
						<Col>
							<Row>
								<Col>Адрес</Col>
								<Col>
									{user[0].address.city}, {user[0].address.street}
								</Col>
							</Row>
						</Col>
						<Col>
							<Row>
								<Col>Веб-сайт</Col>
								<Col>{user[0].website}</Col>
							</Row>
						</Col>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default UserCard;
