import WomanLoginImage from "../../assets/sign-in-image.svg";

import { useModalContext } from "../../contexts/ModalContext";
import {
	Container,
	ContainerRow,
	LeftSide,
	ModalContainer,
	RightSide,
} from "./styles";
import MaleIcon from "../../assets/male.png";
import FemaleIcon from "../../assets/female.png";
import { ThemeLabel, ThemeTitle } from "../../styles/typography";
import InfoLabel from "../InfoLabel";
const UserModal = () => {
	const { openModal, closeModal, modalConfig } = useModalContext();
	const actualUser = modalConfig.actualUser!;
	const Gender = {
		male: MaleIcon,
		female: FemaleIcon,
	};
	const address = `${actualUser?.location.street.name}, ${actualUser?.location.street.number}`;

	const date = actualUser?.dob.date.slice(0, 10).split("-");
	const year = date[0];
	const month = date[1];
	const day = date[2];
	const formattedDate = `${day}/${month}/${year}`;
	return (
		<Container>
			<ModalContainer>
				<div className="modal__body">
					<button className="modal__close-button" onClick={() => closeModal()}>
						X
					</button>
					<LeftSide>
						<img
							src={actualUser?.picture.large}
							alt={actualUser?.name.first}
							className="image__person"
						/>
						<div className="gender__info">
							<ThemeLabel>Gênero:</ThemeLabel>
							<img
								src={Gender[actualUser?.gender!]}
								alt={actualUser?.gender}
								className="image__person-gender"
							/>
						</div>
					</LeftSide>
					<RightSide>
						<ThemeTitle>
							{actualUser?.name.first} {actualUser?.name.last}
						</ThemeTitle>
						<div className="modal__line" />

						<ContainerRow>
							<InfoLabel info={actualUser?.email} label="E-mail:" />
							<InfoLabel info={actualUser?.phone} label="Telefone:" />
						</ContainerRow>
						<ContainerRow>
							<InfoLabel info={formattedDate} label="Data de nascimento:" />
							<InfoLabel info={actualUser?.cell} label="Celular:" />
						</ContainerRow>
						<ContainerRow>
							<InfoLabel info={actualUser?.location.city} label="Cidade" />
							<InfoLabel
								info={actualUser?.location.postcode.toString()}
								label="CEP"
							/>
							<InfoLabel info={actualUser?.location.country} label="País" />
						</ContainerRow>
						<div>
							<InfoLabel info={address} label="Endereço" />
						</div>
					</RightSide>
				</div>
			</ModalContainer>
		</Container>
	);
};

export default UserModal;
