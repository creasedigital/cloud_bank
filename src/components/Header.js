import HAMBURGER from "../assets/ham_menu.svg";
import CLOUD_LOGO from "../assets/cloud_logo.svg";

const Header = ({ handleClick, toggle }) => {
	return (
		<div className="mb-4 w-full relative">
			<div className="md:hidden">
				{toggle ? (
					<div
						onClick={() => handleClick()}
						className="flex justify-center align-center absolute z-10 top-0 left-0 cursor-pointer text-white shadow-md  p-2 w-10 h-10 rounded-full bg-navGreen"
					>
						<span className="">X</span>
					</div>
				) : (
					<img
						className="absolute top-0 left-0 cursor-pointer"
						onClick={() => handleClick()}
						src={HAMBURGER}
						alt="menu icon"
					/>
				)}
				<img className="block mx-auto " src={CLOUD_LOGO} alt="brand logo" />
			</div>
			<div>
				<h2 className="text-grayOne text-base md:text-2xl">Loan</h2>
				<div>
					<span className="text-deepNavGreen">Monday, </span>
					<span>21st February, 2021</span>
				</div>
			</div>
		</div>
	);
};
export default Header;
