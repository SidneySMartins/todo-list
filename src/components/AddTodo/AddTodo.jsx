import { useState } from "react";
import { Forms, StyledInput, StyledButton } from "../../styles/AddTodoStyles";

export default function AddTodo({ addTodo }) {
	const [title, setTitle] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		addTodo(title);
		setTitle("");
	};
	return (
		<>
			<Forms onSubmit={onSubmit}>
				<StyledInput
					type="text"
					name="title"
					placeholder="Tarefa..."
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<StyledButton type="submit">Adicionar</StyledButton>
			</Forms>
		</>
	);
}
