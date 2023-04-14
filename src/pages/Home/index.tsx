import UserList from "../../components/UserList/UserList";
import UserModal from "../../components/UserModal";
import { useModalContext } from "../../contexts/ModalContext";

const Home = () => {
	const { modalConfig } = useModalContext();
	return (
		<div>
			<h1>List</h1>
			<UserList />
			{modalConfig.isModalOpen && <UserModal />}
		</div>
	);
};

export default Home;
