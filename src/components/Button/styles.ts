import styled from "styled-components";

export const ButtonStyle = styled.button`
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.contrastTextWhite};
	font-style: normal;
	font-weight: 600;
	padding: 10px;
	width: 100px;
	:hover {
		background-color: ${(props) => props.theme.colors.secondary};
	}
`;
