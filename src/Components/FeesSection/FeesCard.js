import React from "react";

function FeesCard({ title1, title2, title3, image, fee }) {
	return (
		<div className="feescard-container">
			<h2>
				{title1}
				<span>{title2}</span>
				{title3}
			</h2>
			<img src={image} alt={title1 + title2}></img>
			<div>{fee}</div>
		</div>
	);
}

export default FeesCard;
