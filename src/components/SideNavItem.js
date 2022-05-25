import { NavLink } from "react-router-dom";
import { menuLinks } from "../data";

const SideNavItem = () => {
	return (
		<div className="text-navGreen">
			{menuLinks.map((menuLink) => (
				<NavLink to={menuLink.path}>
					{" "}
					<button className="flex mb-4" key={menuLink.id}>
						<img className="mr-2" src={`../${menuLink.icon}`} />
						<span className="">{menuLink.title}</span>
					</button>
				</NavLink>
			))}
		</div>
	);
};
export default SideNavItem;
