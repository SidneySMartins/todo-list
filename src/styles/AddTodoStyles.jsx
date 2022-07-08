import styled from "styled-components";

export const Forms = styled.form`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const StyledInput = styled.input`
	width: 80%;
	padding: 8px;
	margin: 8px 0;
	display: inline-block;
	border: 2px solid #cccccc;
	border-radius: 5px;
`;

export const StyledButton = styled.button`
	background: linear-gradient(to right, #fd746c, #ff9068);
	width: 20%;
	cursor: pointer;
	border-radius: 20px;
	height: 20%;
	border: none;
	margin-left: 10px;
	color: #fff;
	padding: 8px;
	transition: all 1s ease-in-out;
	&:hover {
		background: #55cc;
	}
`;
