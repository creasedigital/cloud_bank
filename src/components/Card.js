const Card = ({ card }) => {
	return (
		<div className="card">
			<img className="mx-auto block" src={card.icon} alt="illustration" />
			<h3 className="font-semibold text-center py-4 text-deepNavGreen">
				{card.title}
			</h3>
			<p className="text-center">{card.desc}</p>
		</div>
	);
};
export default Card;
