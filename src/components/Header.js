import HAMBURGER from "../assets/ham_menu.svg";
import CLOUD_LOGO from "../assets/cloud_logo.svg";
import { FaTimes } from "react-icons/fa";

const Header = ({ pageName, handleClick, toggle }) => {
	return (
		<div className="mb-8 w-full relative">
			<div className="md:hidden">
				{toggle ? (
					<div
						onClick={() => handleClick(false)}
						className=" align-center absolute z-30 top-0 left-24 cursor-pointer shadow-sm text-navGreen p-2 "
					>
						<FaTimes style={{ fontSize: "32px" }} />
					</div>
				) : (
					<img
						className="absolute top-0 left-0 cursor-pointer"
						onClick={() => handleClick(true)}
						src={HAMBURGER}
						alt="menu icon"
					/>
				)}
				<img className="block mx-auto " src={CLOUD_LOGO} alt="brand logo" />
			</div>
			<div className="mt-8">
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
