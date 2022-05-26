import HAMBURGER from "../assets/ham_menu.svg";
import CLOUD_LOGO from "../assets/cloud_logo.svg";
import { FaTimesCircle } from "react-icons/fa";

const Header = ({ pageName, handleClick, toggle }) => {
	return (
		<div className="mb-4 w-full relative">
			<div className="md:none">
				{toggle ? (
					<img
						className="absolute top-0 left-0 cursor-pointer"
						onClick={() => handleClick()}
						src={HAMBURGER}
						alt="menu icon"
					/>
				) : (
					<div
						onClick={() => handleClick()}
						className=" align-center absolute z-10 top-0 left-0 cursor-pointer shadow-sm text-navGreen p-2 "
					>
						<FaTimesCircle style={{ fontSize: "40px" }} />
					</div>
				)}
				<img className="block mx-auto " src={CLOUD_LOGO} alt="brand logo" />
			</div>
			<div>
				<h2 className="text-grayOne text-base md:text-2xl">{pageName}</h2>
				<div>
					<span className="text-deepNavGreen">Monday, </span>
					<span>21st February, 2021</span>
				</div>
			</div>
		</div>
	);
};
export default Header;
