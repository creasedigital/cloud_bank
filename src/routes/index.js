import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "../views/Home";
import { SendMoney } from "../views/SendMoney";
import { Investment } from "../views/Investment";
import { Loan } from "../views/Loan";
import { Cards } from "../views/Cards";
import { Transactions } from "../views/Transactions";
import { MarketPlace } from "../views/MarketPlace";
import { Settings } from "../views/Settings";
import NotFound from "../views/NotFound";
import DashboardLayout from "../layout/DashboardLayout";

const RouteHandler = () => {
	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path="/" element={<DashboardLayout />}>
						<Route index element={<Home />} />
						<Route path="send-money" element={<SendMoney />} />
						<Route path="investment" element={<Investment />} />
						<Route path="loan" element={<Loan />} />
						<Route path="cards" element={<Cards />} />
						<Route path="transactions" element={<Transactions />} />
						<Route path="marketplace" element={<MarketPlace />} />
						<Route path="settings" element={<Settings />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default RouteHandler;
