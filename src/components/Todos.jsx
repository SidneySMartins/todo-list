import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({ todos = [] }) {
	return todos?.map((todo) => (
		<>
			<TodoItem key={todos?.id} todo={todo} />
		</>
	));
}
