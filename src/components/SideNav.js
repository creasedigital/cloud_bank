import { Link } from "react-router-dom";
import NAV_LOGO from "../assets/cloudbank-1_logo-n-text.svg";
import TURN_OFF from "../assets/nav_icons/turn-off 1.svg";
import SideNavItem from "./SideNavItem";

const SideNav = () => {
	return (
		<div className="flex flex-col justify-between h-full pt-16 md:pt-8 pb-8 items-center">
			<div>
				<Link to="/">
					<div className="mb-8">
						<img className="cursor-pointer" alt="icon" src={NAV_LOGO} />
					</div>
				</Link>
				<div className="w-full">
					<SideNavItem />
				</div>
			</div>
			<div className="cursor-pointer hover:motion-safe:animate-bounce text-navRed flex ml-16 items-start w-full">
				<img alt="button icon" src={TURN_OFF} />
				<span className="ml-2 ">Log out</span>
			</div>
		</div>
	);
};
export default SideNav;
