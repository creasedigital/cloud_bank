import Header from "../components/Header";
import SideNav from "../components/SideNav";

const DashboardLayout = ({ children }) => {
	return (
		<div className="flex w-full min-h-screen">
			<div>
				<SideNav />
			</div>
			<div>
				<Header />
				{children}
			</div>
		</div>
	);
};
export default DashboardLayout;
