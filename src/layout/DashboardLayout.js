import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};

	return (
		<div className="w-full min-h-screen">
			<div
				className={`bg-white h-full fixed z-10 top-0 left-0 overflow-x-hidden w-48 ${
					toggle && "moveLeft"
				}`}
			>
				<SideNav />
			</div>
			<div className={`px-8 py-10 ml-48 ${toggle && "ml-0"}`}>
				<Header toggle={toggle} handleClick={handleClick} />
				{children}
			</div>
		</div>
	);
};
export default DashboardLayout;
