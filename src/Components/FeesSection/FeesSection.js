import React from "react";
import "./fees-styles.css";
import SubTitle from "../SubTitle/SubTitle";
import FeesCard from "./FeesCard";
import PaymentMethods from "./PaymentMethods";

import SingleProfileIcon from "../../assets/single-profile-icon.svg";
import DualProfileIcon from "../../assets/dual-profile-icon.svg";

function FeesSection() {
	return (
		<div className="fees-container">
			<SubTitle title={"Fee"}></SubTitle>
			<div className="fees-cards-container">
				<FeesCard
					title1={"For "}
					title2={"1"}
					title3={" Witness"}
					fee="1,000"
					image={SingleProfileIcon}
				></FeesCard>
				<FeesCard
					title1={"For"}
					title2={" 2 "}
					title3={"Witness"}
					fee="3,000"
					image={DualProfileIcon}
				></FeesCard>
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
