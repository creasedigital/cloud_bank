import { cards } from "../data";
import Card from "./Card";

export const CardContainer = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
			{cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	);
};
