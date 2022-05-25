import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "../views/Home";

const RouteHandler = () => {
	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path="/dashboard">
						<Route index element={<Home />} />
						<Route path="jobs" element={<Jobs />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default RouteHandler;
