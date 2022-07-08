import { useState, useEffect } from "react";
import { Container, Wrapper, Title, ItemWrapper } from "./styles/App-styled";
import { AddTodo, Todos } from "./components";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		getTodos();
	}, []);
	const getTodos = () => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then((res) => setTodos(res?.data));
	};

	const addTodo = (title) => {
		axios
			.post("https://jsonplaceholder.typicode.com/todos", {
				title,
				completed: false,
			})
			.then((res) => {
				res.data.id = uuidv4();
				setTodos([...todos, res?.data]);
			});
	};

	return (
		<Container>
			<Wrapper>
				<Title>Teste</Title>
				<AddTodo addTodo={addTodo} />
				<ItemWrapper>
					<Todos todos={todos} />
				</ItemWrapper>
			</Wrapper>
		</Container>
	);
}

export default App;
