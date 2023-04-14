import UserList from "../../components/UserList";
import UserModal from "../../components/UserModal";
import { useModalContext } from "../../contexts/ModalContext";
import { ThemeTitle } from "../../styles/typography";

const Home = () => {
	const { modalConfig } = useModalContext();
	return (
		<div>
			<ThemeTitle>Lista de usuários</ThemeTitle>
			<UserList />
			{modalConfig.isModalOpen && <UserModal />}
		</div>
	);
};

export default Home;
