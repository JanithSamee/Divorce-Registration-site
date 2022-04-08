import React from "react";

function FeesCard({ title, image, fee }) {
	return (
		<div className="feescard-container">
			<h2>{title}</h2>
			<img src={image} alt={title}></img>
			<div>{fee}</div>
		</div>
	);
}

export default FeesCard;
