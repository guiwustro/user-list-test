interface IUserCard {
	user: IUser;
}

const UserCard = ({ user }: IUserCard) => {
	const fullName = `${user.name.first} ${user.name.last}`;
	return (
		<li>
			<h3>{fullName}</h3>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<img src={user.picture.medium} alt={fullName} />
			{/* <Link href={`/users/${user.}`}></Link> */}
		</li>
	);
};

export default UserCard;
