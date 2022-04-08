import React from "react";
import DownArrowIcon from "../../assets/down-arrow.svg";

function ConditionsBox() {
	return (
		<div>
			<div className="condition-container">
				<h2>Conditions of Witnesses</h2>
				<div>
					as for a witness of a divorce report,
					<span>anyone other than the divorcee party over the age of 20 can be.</span>
					in addition, not only adults with japanese nationality but also foreign nationals can be witnesses.
					therefore, it is more common to ask family members and friends such as parents and siblings to
					witness.
				</div>
			</div>
			<img src={DownArrowIcon} alt="down-arrow" width={"64px"} style={{ marginTop: "16px" }}></img>
		</div>
	);
}
export default ConditionsBox;
