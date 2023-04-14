import { ThemeInfo, ThemeLabel } from "../../styles/typography";
import { Container } from "./styles";

const InfoLabel = ({ info, label }: { info: string; label: string }) => {
	return (
		<Container>
			<ThemeLabel>{label}</ThemeLabel>
			<ThemeInfo>{info}</ThemeInfo>
		</Container>
	);
};

export default InfoLabel;
