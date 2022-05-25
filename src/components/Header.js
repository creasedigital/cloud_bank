import HAMBURGER from "../assets/ham_menu.svg";
import CLOUD_LOGO from "../assets/cloud_logo.svg";

const Header = () => {
	return (
		<div className="mb-4 w-full">
			<div className="md:hidden">
				<img className="fixed" src={HAMBURGER} alt="menu icon" />
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
