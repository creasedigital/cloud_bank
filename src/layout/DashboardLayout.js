import Header from "../components/Header";
import SideNav from "../components/SideNav";

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex w-full min-h-screen">
			<div className="bg-white h-screen w-48">
				<SideNav />
			</div>
			<div className="px-16 py-10 flex-1">
				<Header />
				{children}
			</div>
		</div>
	);
};
export default DashboardLayout;
