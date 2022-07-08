import React from "react";
import TodoItem from "../TodoItem/TodoItem";

export default function Todos({ todos = [], markComplete, deleteTodo }) {
	return todos?.map((todo) => (
		<>
			<TodoItem
				key={todos?.id}
				todo={todo}
				markComplete={markComplete}
				deleteTodo={deleteTodo}
			/>
		</>
	));
}
