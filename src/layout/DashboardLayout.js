import Header from "../components/Header";
import SideNav from "../components/SideNav";

const DashboardLayout = ({ children }) => {
	return (
		<div className="w-full min-h-screen">
			<div className="bg-white h-full fixed z-10 top-0 left-0 overflow-x-hidden w-48">
				<SideNav />
			</div>
			<div className="px-8 py-10 ml-48 ">
				<Header />
				{children}
			</div>
		</div>
	);
};
export default DashboardLayout;
