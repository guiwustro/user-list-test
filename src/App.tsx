import UserList from "./components/UserList";
import UsersProvider from "./contexts/userContext";

function App() {
	return (
		<div className="App">
			<UsersProvider>
				<h1>Users list</h1>
				<UserList />
			</UsersProvider>
		</div>
	);
}

export default App;
