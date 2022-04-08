import React from "react";
import "./subtitle-styles.css";

function SubTitle({ title }) {
	return (
		<div className="subtitle-container">
			<h1>{title}</h1>
		</div>
	);
}

export default SubTitle;
