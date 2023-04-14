import styled, { css } from "styled-components";

interface IButtonStyleProps {
	filterType?: boolean;
}

export const ButtonStyle = styled.button<IButtonStyleProps>`
	background-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.contrastTextWhite};
	font-style: normal;
	font-weight: 600;
	padding: 10px;
	border-radius: 10px;
	width: 100px;
	:hover {
		background-color: ${(props) => props.theme.colors.secondary};
	}
	${(props) =>
		props.filterType &&
		css`
			background-color: ${(props) => props.theme.colors.purple300};
			width: auto;
			:hover {
				background-color: ${(props) => props.theme.colors.purple200};
			}
		`}
`;
