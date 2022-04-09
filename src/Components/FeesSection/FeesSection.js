import React from "react";
import "./fees-styles.css";
import SubTitle from "../SubTitle/SubTitle";
import FeesCard from "./FeesCard";
import PaymentMethods from "./PaymentMethods";

import SingleProfileIcon from "../../assets/single-profile-icon.svg";
import DualProfileIcon from "../../assets/dual-profile-icon.svg";

function FeesSection() {
	return (
		<div className="fees-container" id="fee-section">
			<SubTitle title={"料金"}></SubTitle>
			<div className="fees-cards-container">
				<FeesCard
					title1={"証人 "}
					title2={"1"}
					title3={" 名の場合"}
					fee="00,000"
					image={SingleProfileIcon}
				></FeesCard>
				<FeesCard
					title1={"証人"}
					title2={" 2 "}
					title3={"名の場合"}
					fee="00,000"
					image={DualProfileIcon}
				></FeesCard>
			</div>
			<h5>弊社からお客様へ離婚届を返送する際のスマートレター代：180円（全国一律）を含みます。</h5>
			<PaymentMethods></PaymentMethods>
		</div>
	);
}

export default FeesSection;
