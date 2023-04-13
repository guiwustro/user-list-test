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
}

interface IUsersProps {
	children: ReactNode;
}

export const UsersContext = createContext({} as IUsersProvider);

const UsersProvider = ({ children }: IUsersProps) => {
	const [users, setUsers] = useState<IUser[]>([]);
	useEffect(() => {
		api.get("/?results=20").then((res) => {
			setUsers(res.data.results);
			console.log(users);
		});
	}, []);

	return (
		<UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
	);
};

export default UsersProvider;

export const useUsersContext = () => useContext(UsersContext);
