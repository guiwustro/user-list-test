import FilterBar from "../../components/FilterBar";
import UserList from "../../components/UserList";
import UserModal from "../../components/UserModal";
import { useModalContext } from "../../contexts/ModalContext";
import { ThemeTitle } from "../../styles/typography";

const Home = () => {
	const { modalConfig } = useModalContext();
	return (
		<div>
			<ThemeTitle>Lista de usuários</ThemeTitle>
			<FilterBar />
			<UserList />
			{modalConfig.isModalOpen && <UserModal />}
		</div>
	);
};

export default Home;
