import { createContext, ReactNode, useContext, useState } from "react";

interface IModalProviderData {
	openModal: (user: IUser) => void;
	closeModal: () => void;
	modalConfig: IModalConfig;
}

interface IModalConfig {
	isModalOpen: boolean;
	actualUser?: IUser;
}

interface IModalProviderProps {
	children: ReactNode;
}

const ModalContext = createContext({} as IModalProviderData);

const ModalProvider = ({ children }: IModalProviderProps) => {
	const [modalConfig, setModalConfig] = useState<IModalConfig>({
		isModalOpen: false,
		actualUser: undefined,
	});

	const openModal = (user: IUser) => {
		setModalConfig((previous) => {
			return {
				isModalOpen: !previous.isModalOpen,
				actualUser: user,
			};
		});
	};

	const closeModal = () => {
		setModalConfig((previous) => {
			return {
				isModalOpen: !previous.isModalOpen,
				actualUser: undefined,
			};
		});
	};

	return (
		<ModalContext.Provider
			value={{
				openModal,
				closeModal,
				modalConfig,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;

export const useModalContext = () => useContext(ModalContext);
