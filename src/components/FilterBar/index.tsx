import { useUsersContext } from "../../contexts/userContext";
import { ThemeLabel, ThemeSubtitleBig } from "../../styles/typography";
import Button from "../Button";
import { Container, ContainerGender } from "./styles";

const FilterBar = () => {
	const { filterUsersByGender } = useUsersContext();
	return (
		<Container>
			<ThemeSubtitleBig>Filtrar por:</ThemeSubtitleBig>
			<ContainerGender>
				<Button
					filterType
					title="Todos"
					onClick={() => filterUsersByGender("all")}
				/>
				<Button
					filterType
					title="Masculino"
					onClick={() => filterUsersByGender("male")}
				/>
				<Button
					filterType
					title="Feminino"
					onClick={() => filterUsersByGender("female")}
				/>
			</ContainerGender>
		</Container>
	);
};

export default FilterBar;
