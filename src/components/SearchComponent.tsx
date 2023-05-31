import { Button, Form, InputGroup } from 'react-bootstrap';
import { RxCross2 } from 'react-icons/rx';

interface ISearchComponent {
	search: string;
	setSearch: (search: string) => void;
	handleSearch: (e: any) => void;
	handleClearSearch: () => void;
}

const SearchComponent = ({
	search,
	setSearch,
	handleSearch,
	handleClearSearch,
}: ISearchComponent) => {
	return (
		<InputGroup style={{ width: 'auto' }}>
			<Form.Control
				style={{ width: 'auto' }}
				placeholder="Поиск по заголовку"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => handleSearch(e)}
			/>
			<Button variant="outline-light" onClick={handleClearSearch}>
				<RxCross2 />
			</Button>
		</InputGroup>
	);
};

export default SearchComponent;
