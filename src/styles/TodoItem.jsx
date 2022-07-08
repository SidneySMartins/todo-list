import styled from "styled-components";

export const TitleContainer = styled.li`
	display: flex;
	flex: 1;
	margin-top: 10px;
	background-color: #f4f4f4;
	padding: 10px 20px;
	border-radius: 50px;
	font-weight: bold;
	text-decoration: ${(props) => (props?.todoStatus ? "line-through" : "none")};
	cursor: pointer;
`;

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props?.color || "#000"};
	font-size: 1.5rem;
`;
