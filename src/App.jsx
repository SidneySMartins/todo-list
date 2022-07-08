import { useState, useEffect } from "react";
import { Container, Wrapper, Title, ItemWrapper } from "./styles/App-styled";
import { AddTodo, Todos } from "./components";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { notification } from "antd";

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

	const markComplete = (id) => {
		let markCompletedTodos = todos?.map((todo) => {
			if (todo?.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodos(markCompletedTodos);
	};

	const deleteTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(() => {
				notification.success({
					description: "Tarefa deletada com sucesso",
					placement: "top",
					duration: 2,
				});
				setTodos([...todos.filter((todo) => todo?.id !== id)]);
			});
	};

	return (
		<Container>
			<Wrapper>
				<Title>Todo List</Title>
				<AddTodo addTodo={addTodo} />
				<ItemWrapper>
					<Todos
						todos={todos}
						markComplete={markComplete}
						deleteTodo={deleteTodo}
					/>
				</ItemWrapper>
			</Wrapper>
		</Container>
	);
}

export default App;
