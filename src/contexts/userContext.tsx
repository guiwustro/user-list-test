import { api } from "../services/api";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

interface IUsersProvider {
	users: IUser[];
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	filterUsersByGender: (gender: IGender) => void;
	filteredUsers: IUser[];
}

interface IUsersProps {
	children: ReactNode;
}

type IGender = "male" | "female" | "all";

export const UsersContext = createContext({} as IUsersProvider);

const UsersProvider = ({ children }: IUsersProps) => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
	const [actualFilter, setActualFilter] = useState<IGender>("all");

	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		if (actualFilter === "all") {
			api.get(`/?page=${currentPage}&results=20&seed=abc`).then((res) => {
				setUsers((prev) => [...prev, ...res.data.results]);
			});
		} else {
			api
				.get(`/?gender=${actualFilter}&results=20&page=${currentPage}`)
				.then((res) => {
					setFilteredUsers((prev) => [...prev, ...res.data.results]);
				});
		}
	}, [currentPage]);

	const filterUsersByGender = (gender: IGender) => {
		const usersFiltered = users.filter((user) => user.gender === gender);
		setActualFilter(gender);
		setFilteredUsers(usersFiltered);
	};
	return (
		<UsersContext.Provider
			value={{ users, setCurrentPage, filterUsersByGender, filteredUsers }}
		>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersProvider;

export const useUsersContext = () => useContext(UsersContext);
