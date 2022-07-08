import React from "react";
import { Icon, TitleContainer } from "../styles/TodoItem";
import {
	LeadingActions,
	SwipeableList,
	SwipeableListItem,
	SwipeAction,
	TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { DeleteFilled, CheckCircleFilled } from "@ant-design/icons";

export default function TodoItem({ todo, markComplete, deleteTodo }) {
	const leadingActions = (id) => (
		<LeadingActions>
			<SwipeAction onClick={() => markComplete(id)}>
				<Icon color="#03da2ab4">
					<CheckCircleFilled />
				</Icon>
			</SwipeAction>
		</LeadingActions>
	);

	const trailingActions = (id) => (
		<TrailingActions>
			<SwipeAction destructive={true} onClick={() => deleteTodo(id)}>
				<Icon color="#da0d03b4">
					<DeleteFilled />
				</Icon>
			</SwipeAction>
		</TrailingActions>
	);

	return (
		<SwipeableList>
			<SwipeableListItem
				leadingActions={leadingActions(todo?.id)}
				trailingActions={trailingActions(todo?.id)}
			>
				<TitleContainer todoStatus={todo?.completed}>
					{todo?.title}
				</TitleContainer>
			</SwipeableListItem>
		</SwipeableList>
	);
}
