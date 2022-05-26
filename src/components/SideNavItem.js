import { NavLink } from "react-router-dom";
import { menuLinks } from "../data";

const SideNavItem = () => {
	return (
		<div className="text-navGreen ">
			{menuLinks.map((menuLink) => (
				<NavLink to={menuLink.path}>
					{" "}
					<button className="flex p-2 w-full" key={menuLink.id}>
						<img alt="icon" className="pr-2" src={menuLink.icon} />
						<span className="">{menuLink.title}</span>
					</button>
				</NavLink>
			))}
		</div>
	);
};
export default SideNavItem;
