import UsersProvider from "./contexts/userContext";
import RoutesMain from "./routes";
import Global from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/theme";
import ModalProvider from "./contexts/ModalContext";

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<Global />
			<ModalProvider>
				<UsersProvider>
					<RoutesMain />
				</UsersProvider>
			</ModalProvider>
		</ThemeProvider>
	);
}

export default App;
