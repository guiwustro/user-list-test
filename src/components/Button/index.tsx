import { ButtonStyle } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
}

const Button = ({ title, ...props }: IButtonProps) => {
	return <ButtonStyle {...props}>{title}</ButtonStyle>;
};

export default Button;
