import styled from "styled-components";

export const Container = styled.li`
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.lightBorder};
	min-width: 250px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 15px;
	& > img {
		border-radius: 50%;
	}
`;
