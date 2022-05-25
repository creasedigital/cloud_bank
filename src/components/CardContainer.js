import { cards } from "../data";
import Card from "./Card";

export const CardContainer = () => {
	return (
		<div className="grid xs:grid-cols-2 md:grid-cols-4 ">
			{cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	);
};
