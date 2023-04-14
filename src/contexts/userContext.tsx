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
}

interface IUsersProps {
	children: ReactNode;
}

export const UsersContext = createContext({} as IUsersProvider);

const UsersProvider = ({ children }: IUsersProps) => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		api.get(`/?page=${currentPage}&results=20&seed=abc`).then((res) => {
			setUsers((prev) => [...prev, ...res.data.results]);
		});
	}, [currentPage]);

	return (
		<UsersContext.Provider value={{ users, setCurrentPage }}>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersProvider;

export const useUsersContext = () => useContext(UsersContext);
