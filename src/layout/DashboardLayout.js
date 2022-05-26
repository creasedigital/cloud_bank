import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { useState } from "react";
import { motion } from "framer-motion";

const DashboardLayout = ({ children, pageName }) => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};

	return (
		<div className="w-full min-h-screen">
			<div
				className={`bg-white  h-full fixed z-10 top-0 left-0 overflow-x-hidden w-48 ${
					toggle && "moveLeft"
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
				className={`px-8 py-10 ml-48 ${toggle && "ml-0"}`}
			>
				<Header pageName={pageName} toggle={toggle} handleClick={handleClick} />
				{children}
			</motion.div>
		</div>
	);
};
export default DashboardLayout;
