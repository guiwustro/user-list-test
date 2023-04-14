import styled from "styled-components";

export const Container = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 20px;
	width: 95%;
	@media screen and (min-width: 570px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (min-width: 820px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (min-width: 1124px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (min-width: 1440px) {
		grid-template-columns: repeat(5, 1fr);
	}
`;
