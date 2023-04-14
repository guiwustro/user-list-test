import { useModalContext } from "../../contexts/ModalContext";
import { ThemeSubtitleBig, ThemeSubtitleSmall } from "../../styles/typography";
import Button from "../Button";
import { Container } from "./styles";

interface IUserCard {
	user: IUser;
}

const UserCard = ({ user }: IUserCard) => {
	const fullName = `${user.name.first} ${user.name.last}`;
	const { openModal } = useModalContext();
	return (
		<Container>
			<img src={user.picture.medium} alt={fullName} />
			<ThemeSubtitleBig>{fullName}</ThemeSubtitleBig>
			<ThemeSubtitleSmall>{user.email}</ThemeSubtitleSmall>
			<p>{user.phone}</p>
			<Button title="Ver mais informações" onClick={() => openModal(user)} />
		</Container>
	);
};

export default UserCard;
