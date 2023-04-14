import { ButtonStyle } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	filterType?: boolean;
}

const Button = ({ title, filterType, ...props }: IButtonProps) => {
	return (
		<ButtonStyle filterType={filterType} {...props}>
			{title}
		</ButtonStyle>
	);
};

export default Button;
