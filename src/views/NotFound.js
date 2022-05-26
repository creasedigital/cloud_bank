import { Link } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

const NotFound = () => {
	return (
		<>
			<DashboardLayout pageName="Not Found">
				<div className="empty">
					The requested page does not exist.{" "}
					<span>
						<Link to="/">Return To Home</Link>
					</span>
				</div>
			</DashboardLayout>
		</>
	);
};
export default NotFound;
