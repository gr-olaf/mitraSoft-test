import { Container, Row } from 'react-bootstrap';

const AboutPage = () => {
	return (
		<Container
			style={{
				paddingBlock: '20px',
			}}
		>
			<Row>Здравствуйте! Меня зовут Александр.</Row>
			<Row>
				Без лишних слов - ищу работу во fontend. Зачем и почему frontend?
			</Row>
			<Row>
				1. Нужен боевой опыт на проектах и возможность профессионального роста.
			</Row>
			<Row>
				2. Изначально интересовался просто версткой, со временем перетекло в
				увлечение frontend-ом. В учебных целях пробовал писать backend, но
				frontend оказался более симпатичен.
			</Row>
			<Row>Зачем вам нужен я?</Row>
			<Row>
				Сообразительный, не туплю (за редким исключением). Не нытик, хороший
				собеседник. Если необходимо - самостоятельный.
			</Row>
			<Row>
				Навыки описывать тут нет смысла, если интересно, то изучите мое{' '}
				<a
					style={{ width: 'inherit', paddingInline: '5px' }}
					href="https://drive.google.com/file/d/1w6tQohZc-Yy8jWoHMdF8udw-NnhXWtsk/view?usp=sharing"
					target="_blank"
				>
					резюме.
				</a>
			</Row>
		</Container>
	);
};

export default AboutPage;
