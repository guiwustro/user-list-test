import UserList from "./components/UserList";
import UsersProvider from "./contexts/userContext";
import RoutesMain from "./routes";

function App() {
	return (
		<>
			<UsersProvider>
				<RoutesMain />
			</UsersProvider>
		</>
	);
}

export default App;
