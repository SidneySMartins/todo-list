import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	max-width: 600px;
	min-width: 455px;
	min-height: 50vh;
	padding: 20px;
	background-color: #fff;
	color: #000;
	border-radius: 5px;
	box-shadow: 5px 2px 44px 1px rgba(0, 0, 0, 0.75);
`;

export const ItemWrapper = styled.div`
	margin-top: 20px;
	max-height: 300px;
	overflow-y: auto;
`;

export const Title = styled.h1`
	font-weight: 600;
	text-align: center;
`;
