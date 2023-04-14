import styled from "styled-components";

export const ThemeTitle = styled.h1`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 700;
	font-size: 2.125rem;
	/* line-height: 75px; */
	text-align: center;

	color: ${(props) => props.theme.colors.darkBlue};
	@media (min-width: 768px) {
		font-size: 3.125rem;
		/* padding: 0 20px; */

		line-height: 75px;
	}
	text-transform: uppercase;
`;

export const ThemeSubtitleBig = styled.h3`
	font-family: "Inter", sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 1rem;
	line-height: 22px;
	color: ${(props) => props.theme.colors.contrastTextBlack};

	@media (min-width: 768px) {
		font-size: 1.1rem;
	}
`;

export const ThemeSubtitleSmall = styled.h3`
	font-family: "Inter", sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 22px;
	color: ${(props) => props.theme.colors.grey};

	@media (min-width: 768px) {
		font-size: 0.95rem;
	}
`;

export const ThemeLabel = styled.p`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 700;
	font-size: 1rem;

	@media (min-width: 768px) {
		font-size: 1.275rem;
		line-height: 45px;
	}
	color: ${(props) => props.theme.colors.darkBlue};
`;

export const ThemeInfo = styled.p`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	font-size: 0.9rem;
	line-height: 28px;
	@media (min-width: 768px) {
		font-size: 1rem;
	}
	color: ${(props) => props.theme.colors.grey100};
`;
