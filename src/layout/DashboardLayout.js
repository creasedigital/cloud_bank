import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { useState } from "react";
import { motion } from "framer-motion";

const DashboardLayout = ({ children, pageName }) => {
	const [toggle, setToggle] = useState(false);

	const handleClick = (state) => {
		setToggle(state);
	};

	return (
		<div className="w-full min-h-screen">
			{toggle && (
				<div
					onClick={() => handleClick(false)}
					className="w-screen h-screen fixed md:hidden z-10 bg-grayOne opacity-50"
				/>
			)}
			<div
				className={`bg-white -translate-x-full md:translate-x-0 h-full fixed z-20 top-0 left-0 overflow-x-hidden w-48 ${
					toggle ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<SideNav />
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					delay: 0.4,
					opacity: { type: "spring", stiffness: 100 },
					default: { duration: 0.5 },
				}}
				className={`px-8 py-4 ml-0 md:ml-48 ${toggle && "ml-48"}`}
			>
				<Header pageName={pageName} toggle={toggle} handleClick={handleClick} />
				{children}
			</motion.div>
		</div>
	);
};
export default DashboardLayout;
