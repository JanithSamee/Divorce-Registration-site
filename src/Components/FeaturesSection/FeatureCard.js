import React from "react";

function FeatureCard({ number, title, body, imagePath }) {
	return (
		<div className="featurecard-container">
			<div className="featurecard-number">{number}</div>
			<div className="featurecard-band">{title}</div>
			<div className="featurecard-body">{body}</div>
			<div className="featurecard-image">
				<img src={imagePath} alt={title} />
			</div>
		</div>
	);
}

export default FeatureCard;
