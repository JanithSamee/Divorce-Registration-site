import React from "react";
import "./fees-styles.css";
import SubTitle from "../SubTitle/SubTitle";
import FeesCard from "./FeesCard";

import SingleProfileIcon from "../../assets/single-profile-icon.svg";

function FeesSection() {
	return (
		<div className="fees-container">
			<SubTitle title={"Fee"}></SubTitle>
			<FeesCard title={"test"} fee="1000" image={SingleProfileIcon}></FeesCard>
		</div>
	);
}

export default FeesSection;
