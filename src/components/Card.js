const Card = ({ card }) => {
	return (
		<div className="card">
			<div className="flex flex-col justify-between">
				<div className="h-60 flex items-end pb-8">
					<img className="mx-auto block" src={card.icon} alt="illustration" />
				</div>
				<div className="h-40">
					<h3 className="justify-self-start mb-4 font-semibold text-center text-deepNavGreen">
						{card.title}
					</h3>
					<p className="text-center">{card.desc}</p>
				</div>
			</div>
		</div>
	);
};
export default Card;
