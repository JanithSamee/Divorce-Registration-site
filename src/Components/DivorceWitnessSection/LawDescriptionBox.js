import React from "react";

function LawDescriptionBox({ lawNo, lawDescription }) {
	return (
		<div className="lawdescription-container">
			<h2>{lawNo}</h2>
			<div>{lawDescription}</div>
		</div>
	);
}

export default LawDescriptionBox;
