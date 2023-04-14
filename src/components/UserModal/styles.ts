import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(12, 12, 12, 0.8);
`;

export const ModalContainer = styled.div`
	width: 80%;
	background-color: white;
	border-radius: 10px;
	position: relative;

	.modal__close-button {
		top: 10px;
		position: absolute;
		right: 10px;
		font-style: normal;
		font-weight: 700;
		font-size: 1.25rem;
		color: #000000;
		background-color: white;
		&:hover {
			cursor: pointer;
		}
	}

	.modal__body {
		padding: 3rem;
		position: relative;
		display: flex;
		@media screen and (min-width: 1024px) {
			flex-direction: row;
		}
	}
`;

export const LeftSide = styled.div`
	padding-right: 57px;
	display: none;
	@media screen and (min-width: 1024px) {
		display: block;
	}
	.gender__info {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.image__person-gender {
		width: 35px;
		height: 35px;
	}
	.image__person {
		@media screen and (min-width: 1024px) {
			width: 224px;
			height: 224px;
		}

		width: 100px;
		height: 100px;
		border-radius: 10px;
	}
`;
export const RightSide = styled.div`
	width: 100%;
	.modal__line {
		height: 1px;
		background-color: ${(props) => props.theme.colors.darkBlue};
	}
`;

export const ContainerRow = styled.div`
	display: flex;
	padding-bottom: 10px;
	justify-content: space-between;
	flex-direction: column;
	word-break: break-all;
	@media screen and (min-width: 1024px) {
		flex-direction: row;
	}
`;
