import { useUsersContext } from "../../contexts/userContext";
import UserCard from "../UserCard";
import { Container } from "./styles";

const UserList = () => {
	const { users } = useUsersContext();
	return (
		<Container>
			{users.map((user, index) => (
				<UserCard key={index} user={user} />
			))}
		</Container>
	);
};

export default UserList;
