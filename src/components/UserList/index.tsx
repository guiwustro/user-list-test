import { useEffect, useRef } from "react";
import { useUsersContext } from "../../contexts/userContext";
import UserCard from "../UserCard";
import { Container } from "./styles";

const UserList = () => {
	const { users, setCurrentPage } = useUsersContext();
	const ref = useRef<any>();
	useEffect(() => {
		const intersectionObserver = new IntersectionObserver((entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				setCurrentPage((currentValue) => currentValue + 1);
			}
		});
		intersectionObserver.observe(ref.current);
		return () => intersectionObserver.disconnect();
	}, []);
	return (
		<Container>
			{users.map((user, index) => (
				<UserCard key={index} user={user} />
			))}
			<li ref={ref}></li>
		</Container>
	);
};

export default UserList;
