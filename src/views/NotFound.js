import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			The requested page does not exist.{" "}
			<span>
				<Link to="/">Return To Home</Link>
			</span>
		</div>
	);
};
export default NotFound;
