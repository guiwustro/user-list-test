"use client";

import { useUsersContext } from "../../contexts/userContext";
import UserCard from "../UserCard/UserCard";

const UserList = () => {
	const { users } = useUsersContext();
	return (
		<div>
			<ul>
				{users.map((user, index) => (
					<UserCard key={index} user={user} />
				))}
			</ul>
		</div>
	);
};

export default UserList;
