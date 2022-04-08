import React from "react";
import "./fees-styles.css";
import SubTitle from "../SubTitle/SubTitle";
import FeesCard from "./FeesCard";

import SingleProfileIcon from "../../assets/single-profile-icon.svg";
import PaymentMethods from "./PaymentMethods";

function FeesSection() {
	return (
		<div className="fees-container">
			<SubTitle title={"Fee"}></SubTitle>
			<div className="fees-cards-container">
				<FeesCard title={"test"} fee="1000" image={SingleProfileIcon}></FeesCard>
				<FeesCard title={"test"} fee="1000" image={SingleProfileIcon}></FeesCard>
			</div>
			<h5>
				Smart letter fee when returning the divorce report from our company to the customer: 180 yen (nationwide
				uniform) is included.
			</h5>
			<PaymentMethods></PaymentMethods>
		</div>
	);
}

export default FeesSection;
