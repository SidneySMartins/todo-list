import React from "react";
import { TitleContainer } from "../styles/TodoItem";
import {
	LeadingActions,
	SwipeableList,
	SwipeableListItem,
	SwipeAction,
	TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

export default function TodoItem({ todo }) {
	const leadingActions = () => (
		<LeadingActions>
			<SwipeAction onClick={() => console.info("swipe action triggered")}>
				Action name
			</SwipeAction>
		</LeadingActions>
	);

	const trailingActions = () => (
		<TrailingActions>
			<SwipeAction
				destructive={true}
				onClick={() => console.info("swipe action triggered")}
			>
				Delete
			</SwipeAction>
		</TrailingActions>
	);

	return (
		<SwipeableList>
			<SwipeableListItem
				leadingActions={leadingActions()}
				trailingActions={trailingActions()}
			>
				<TitleContainer>{todo?.title}</TitleContainer>
			</SwipeableListItem>
		</SwipeableList>
	);
}
