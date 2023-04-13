import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";

const RoutesMain = () => {
	return (
		<AnimatePresence>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</AnimatePresence>
	);
};

export default RoutesMain;
